/* eslint-disable key-spacing */

import BaseEntity from './BaseEntity.js';
import Interaction from './Interaction.js';
import Player from './Player.js';
import template from './template.js';

import * as doodads from './doodads/index.js';
import * as items from './items/index.js';
import * as interactions from './interactions/index.js';
import * as locations from './locations/index.js';
import * as npcs from './npcs/index.js';

const registry = {
  ...doodads, ...items, ...locations, ...npcs, Player,
};

const VERBS = {
  SEARCH: 'search',
  GET:    'pickUp',
  MOVE:   'moveTo',
  COPY:   'duplicate',
  LOCK:   'lock',
  UNLOCK: 'unlock',
  MERGE:  'merge',
  REPORT: 'talkTo',
  PATCH:  'patch',
  DELETE: 'drop',
  TRACE:  'describe',
  PUT:    'put',
};

const respond = (text) => ({ text });
const error = (text) => ({ text, kind: 'error' });

class Game extends BaseEntity {
  process(verb, ids) {
    const method = VERBS[verb];
    if (!method) {
      return error(`*sigh* I have no idea how to <strong>${verb}</strong>.`);
    }

    // Ensure all entities mentioned can be referenced by the player
    const entities = [];
    for (const id of ids) {
      const entity = this.player.reference(id);
      if (!entity) {
        return error(`There is no <strong>${id}</strong> nearby.`);
      }
      entities.push(entity);
    }

    // Handle searching and player movement
    if (method === 'search' || method === 'moveTo') {
      return respond(this[method](...entities));
    }

    // Handle interactions between multiple entities (e.g. key + door)
    if (entities.length > 1) {
      // Generate a unique interaction id (e.g. InnKeyPlusInnDoor)
      const id = entities.map((e) => e.type).sort().join('Plus');
      const Class = interactions[id] || Interaction;
      const interaction = new Class(this.player, entities);
      return respond(interaction[method]());
    }

    // Handle primary entity
    const [primary] = entities;
    if (!primary) {
      return error(`What am I supposed to <strong>${verb}</strong>?`);
    }
    return respond(primary[method]());
  }

  search(entity) {
    const { player } = this;
    if (entity === this.player || entity === player.location) {
      return entity.search();
    }
    return `I can’t search <strong>${entity.id}</strong>.`;
  }

  moveTo(nextLocation) {
    const { location } = this.player;
    if (location === nextLocation) {
      return 'Hey, I’m already there!';
    }
    if (location.connectsTo(nextLocation)) {
      return location.movePlayerTo(nextLocation);
    }
    return 'That won’t work!';
  }

  reset() {
    this.children = this.constructor.create().children;
  }

  static restore(definition, parent = null) {
    const { type, children = [], ...props } = definition;
    const Class = !parent ? Game : registry[definition.type];
    if (!Class) {
      throw new Error(`could not restore entity of type: ${type}`);
    }
    const entity = new Class();
    for (const child of children) {
      entity.addNode(this.restore(child, entity));
    }
    Object.assign(entity, props);
    if (parent) {
      parent.addNode(entity);
    }
    return entity;
  }

  static create() {
    return this.restore(template);
  }
}

export default Game;
