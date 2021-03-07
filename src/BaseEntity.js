import { underscore } from './utils.js';

class BaseEntity {
  constructor() {
    this.type = this.constructor.name;

    this.parent = null;
    this.children = new Set();
  }

  get id() {
    return underscore(this.type);
  }

  get game() {
    let entity = this;
    while (entity.parent) {
      entity = entity.parent;
    }
    return entity;
  }

  get player() {
    return this.game.findRecursively('me');
  }

  is(id) {
    return this.id === id;
  }

  addNode(target) {
    target.moveNodeTo(this);
  }

  moveNodeTo(target) {
    if (this.parent) {
      this.parent.children.delete(this);
    }
    this.parent = target;
    this.parent.children.add(this);
  }

  findRecursively(id) {
    return this.find(id, { recursively: true });
  }

  find(id, { recursively = false } = {}) {
    for (const child of this.children) {
      if (child.is(id)) {
        return child;
      }

      if (recursively) {
        const hit = child.find(id, { recursively });
        if (hit) {
          return hit;
        }
      }
    }
    return null;
  }

  listEntities() {
    const list = Array.from(this.children).map((child) => (
      `<li><strong>${child.id}</strong></li>`
    ));
    return `<ul>${list.join('')}</ul>`;
  }

  search() {
    return 'I can’t search that.';
  }

  pickUp() {
    return 'Nah, I don’t want to pick that up.';
  }

  duplicate() {
    return 'I can’t duplicate stuff willy-nilly.';
  }

  lock() {
    return 'I’m a wizard, not a locksmith!';
  }

  unlock() {
    return 'I’m a wizard, not a lockpicker!';
  }

  merge() {
    return 'Merge with what?';
  }

  talkTo() {
    return 'Nobody’s listening to me!';
  }

  patch() {
    return 'I don’t feel like patching this.';
  }

  describe() {
    return 'Nothing to see here. Moving along.';
  }

  drop() {
    return 'I don’t want to drop THAT.';
  }

  put() {
    return 'I can’t put that.';
  }
}

export default BaseEntity;
