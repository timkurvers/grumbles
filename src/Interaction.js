/* eslint-disable no-param-reassign */

import { underscore } from './utils.js';

class Interaction {
  constructor(player, entities) {
    this.refs = entities.reduce((lookup, entity) => {
      lookup[underscore(entity.type)] = entity;
      return lookup;
    }, {});
    this.refs.player = player;
  }

  merge() {
    return 'These cannot be combined.';
  }
}

export default Interaction;
