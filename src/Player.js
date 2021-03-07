import { stripIndent } from './utils.js';

import BaseEntity from './BaseEntity.js';

class Player extends BaseEntity {
  constructor() {
    super();

    this.shoes = false;
  }

  get id() {
    return 'me';
  }

  get location() {
    return this.parent;
  }

  reference(id) {
    const { location } = this;

    // Current location
    if (id === 'room' || location.is(id)) {
      return location;
    }

    // Entities in the current location
    const entity = location.find(id);
    if (entity) {
      return entity;
    }

    // Inventory items
    const item = this.find(id);
    if (item) {
      return item;
    }

    // Location connections
    if (location.connectsTo(id)) {
      return this.game.find(id);
    }

    return null;
  }

  describe() {
    return stripIndent`
      I am Grumbles the Wizard! *flexes*

      I’m currently in the <strong>${this.location.id}</strong>.
    `;
  }

  search() {
    return `I’m currently carrying:\n\n${this.listEntities()}`;
  }

  pickUp() {
    return 'I throw myself to the ground and pick myself up again.';
  }

  talkTo() {
    return stripIndent`
      <strong>me</strong>: ... and then she said ‘Oh my God, how could he do that?’
      <strong>me</strong>: I know, right!? It’s totally unacceptable.
      <strong>me</strong>: Some people are just outright rude!
    `;
  }
}

export default Player;
