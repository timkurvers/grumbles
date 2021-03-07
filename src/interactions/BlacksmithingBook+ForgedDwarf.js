import Interaction from '../Interaction.js';

class BlacksmithingBookPlusForgedDwarf extends Interaction {
  merge() {
    const { player, forged_dwarf: dwarf, blacksmithing_book: book } = this.refs;
    player.children.delete(book);
    dwarf.happy = true;

    return 'The <strong>forged_dwarf</strong> is super happy now. Never seen anything quite like it.';
  }
}

export default BlacksmithingBookPlusForgedDwarf;
