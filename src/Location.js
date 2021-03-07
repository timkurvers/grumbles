import { stripIndent } from './utils.js';

import BaseEntity from './BaseEntity.js';

class Location extends BaseEntity {
  get connections() {
    return [];
  }

  connectsTo(entity) {
    const id = entity instanceof Location ? entity.id : entity;
    return this.connections.includes(id);
  }

  listConnections() {
    const list = Array.from(this.connections).map((connection) => (
      `<li><strong>${connection}</strong></li>`
    ));
    return `<ul>${list.join('')}</ul>`;
  }

  search() {
    return stripIndent`
      In the <strong>${this.id}</strong>, I can see:

      ${this.listEntities()}

      The <strong>${this.id}</strong> connects to:

      ${this.listConnections()}
    `;
  }

  movePlayerTo(nextLocation) {
    this.player.moveNodeTo(nextLocation);
    return `I’m in the <strong>${nextLocation.id}</strong> now.`;
  }
}

export default Location;
