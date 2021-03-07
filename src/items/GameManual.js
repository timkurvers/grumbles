import BaseEntity from '../BaseEntity.js';
import { stripIndent } from '../utils.js';

class GameManual extends BaseEntity {
  describe() {
    return stripIndent`
      <dl class="game-manual">
        <dt>TRACE <em>resource</em></dt>
        <dd>Inspect <em>resource</em> with a keen eye. Try <strong>TRACE me</strong> or <strong>TRACE room</strong>.</dd>
        <dt>SEARCH <em>resource</em></dt>
        <dd>List items in <em>resource</em>. Try <strong>SEARCH me</strong> or <strong>SEARCH room</strong>.</dd>
        <dt>GET <em>resource</em></dt>
        <dd>Pick up <em>resource</em>. But only if it’s anywhere near me, obviously.</dd>
        <dt>MOVE <em>location</em></dt>
        <dd>Travel to <em>location</em>. But I can’t travel far, though.</dd>
        <dt>COPY <em>resource</em></dt>
        <dd>Copies the <em>resource</em> into your inventory. If I can.</dd>
        <dt>LOCK <em>resource</em></dt>
        <dd>Locks the <em>resource</em>. Duh!</dd>
        <dt>UNLOCK <em>resource</em></dt>
        <dd>I’ll leave this one for you to figure out.</dd>
        <dt>MERGE <em>resource1</em> <em>resource2</em></dt>
        <dd>Combine compatible resources, for better or for worse.</dd>
        <dt>REPORT <em>listener</em></dt>
        <dd>Throw words at <em>listener</em>. Also known as talking to <em>listener</em>.</dd>
        <dt>PATCH <em>resource</em></dt>
        <dd>Patch <em>resource</em> and make it less broken or more fixed.</dd>
        <dt>DELETE <em>resource</em></dt>
        <dd>Get rid of <em>resource</em> entirely.</dd>
        <dt>PUT <em>resource</em></dt>
        <dd>Self-explanatory.</dd>
      </dl>
    `;
  }
}

export default GameManual;
