import BaseEntity from '../BaseEntity.js';
import { stripIndent } from '../utils.js';

class Letter extends BaseEntity {
  describe() {
    return stripIndent`
      Ohai Grumbles!

      No doubt you’ve heard of the princess that went missing not long ago. We’ve tracked her GPS-enabled crown to a vault in the castle south of here, but no sane person dares venture there.

      In this kingdom, <a href="https://www.google.com/search?q=http+methods" target="_blank">HTTP verbs</a> are used to interact with its inhabitants, locations and items.

      To get started, try the following commands:

      &gt; <strong>TRACE me</strong>
      &gt; <strong>SEARCH me</strong>
      &gt; <strong>SEARCH room</strong>
      &gt; <strong>MOVE courtyard</strong>

      For all of the available commands, read the game manual:

      &gt; <strong>TRACE game_manual</strong>

      Yours truly,

      ’Friend’
    `;
  }
}

export default Letter;
