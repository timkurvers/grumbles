import Interaction from '../Interaction.js';

class PrincessPlusStick extends Interaction {
  merge() {
    const { princess } = this.refs;

    if (princess.cursed) {
      princess.cursed = false;
      return 'Poof! The <strong>sloth</strong> turns into a beautiful <strong>princess</strong>!';
    }
    return 'The <strong>princess</strong> is perfect, no spells could make her better.';
  }
}

export default PrincessPlusStick;
