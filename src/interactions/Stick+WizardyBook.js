import Interaction from '../Interaction.js';

class StickPlusWizardyBook extends Interaction {
  merge() {
    const { player, stick, wizardy_book: book } = this.refs;

    if (stick.crystal) {
      player.children.delete(book);
      stick.epic = true;
      return 'Wow, such <strong>epic_wand</strong>, very wizardy, many power, I like.';
    }
    return 'My <strong>stick</strong> is too lame to unleash such a powerful spell on it.';
  }
}

export default StickPlusWizardyBook;
