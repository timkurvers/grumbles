import Interaction from '../Interaction.js';

class HedgePlusStick extends Interaction {
  merge() {
    const { stick, hedge } = this.refs;

    if (hedge.open) {
      const location = hedge.parent;
      location.children.delete(hedge);
      return "'Yol-Toor-Shul!' and <strong>opened_hedge</strong> burns to ash.";
    }
    if (stick.epic) {
      hedge.open = true;
      return 'The hedge opens, revealing the <strong>bank</strong>.';
    }
    return 'My magic is too weak, I’ll need more power to open the hedge.';
  }
}

export default HedgePlusStick;
