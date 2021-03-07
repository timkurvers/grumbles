import BaseEntity from '../BaseEntity.js';
import { stripIndent } from '../utils.js';

class Wine extends BaseEntity {
  pickUp() {
    this.moveNodeTo(this.player);
    return 'I’m not an alcoholic anymore, but somebody else might be. I’ll take it.';
  }

  describe() {
    return stripIndent`
      Chiteau Haut-Brion 1959, magnificent <strong>wine</strong>. I love French <strong>wine</strong>, like I love the French language.

      I have sampled every language, French is my favourite - fantastic language, especially to curse with.

      ’Nom de Dieu de putain de bordel de merde de saloperies de connards d'enculis de ta mire.’

      You see, it's like wiping your ass with silk, I love it.
    `;
  }
}

export default Wine;
