import Location from '../Location.js';

class Church extends Location {
  get connections() {
    return ['courtyard', 'church_library'];
  }

  describe() {
    if (this.find('insects')) {
      return 'Spiders and bugs <strong>bar</strong> my way! It seems libraries aren’t that popular nowadays.';
    }
    return 'The <strong>church</strong> is cleansed of <strong>insects</strong>. A holy spirit fills the air.';
  }

  movePlayerTo(nextLocation) {
    const insects = this.find('insects');

    if (nextLocation.is('church_library') && insects) {
      if (this.player.find('insect_hunters')) {
        return 'Flesh-eating spiders are still in my way, but the <strong>insect_hunters</strong> are with me..';
      }
      const hunters = this.game.findRecursively('insect_hunters');
      hunters.active = true;
      return 'I’m very afraid of <strong>insects</strong>! Perhaps I need some help to advance.';
    }
    return super.movePlayerTo(nextLocation);
  }
}

export default Church;
