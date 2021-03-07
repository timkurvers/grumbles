import Interaction from '../Interaction.js';

class InnDoorPlusInnKey extends Interaction {
  merge() {
    const { player, inn_key: innKey, inn_door: innDoor } = this.refs;

    if (player.find('inn_key')) {
      innKey.moveNodeTo(innDoor);
      return 'The <strong>inn_key</strong> slides into the <strong>inn_door</strong> lock. I should try to <strong>UNLOCK</strong> it now.';
    }
    return 'I don’t have the <strong>inn_key</strong> yet. Maybe I should <strong>SEARCH</strong> the <strong>room</strong>?';
  }
}

export default InnDoorPlusInnKey;
