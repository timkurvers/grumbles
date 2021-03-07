import BaseEntity from '../BaseEntity.js';

class Shoes extends BaseEntity {
  constructor() {
    super();

    this.holy = false;
  }

  get id() {
    if (this.holy) {
      return 'holy_shoes';
    }
    return 'holey_shoes';
  }

  patch() {
    const { location } = this.player;
    if (location.is('church')) {
      this.holy = true;
      return 'Sacred chants scared the ’e’ out of ’holey’. There are <strong>holy_shoes</strong> in my bag now, cheers!';
    }
    return `I perform sacred chants on my <strong>holey_shoes</strong>, but it doesn't seem to work in the <strong>${location.id}</strong>.`;
  }

  put() {
    if (!this.holy) {
      return 'I can’t wear them while they’re full of holes.';
    }
    if (this.player.location.is('road_to_castle')) {
      this.player.shoes = true;
      return 'Holy f’ing shoes, I can walk on the water!';
    }
    return 'I’m quite comfortable without shoes, why would I put them on?';
  }

  pickUp() {
    this.moveNodeTo(this.player);
    return 'Ah, my trusted <strong>holey_shoes</strong>. Seriously, I should get them repaired.';
  }

  describe() {
    if (this.holy) {
      return 'Holy f’ing shoes!';
    }
    return 'My trusted <strong>holey_shoes</strong>. Seriously, I should get them repaired.';
  }
}

export default Shoes;
