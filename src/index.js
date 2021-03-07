import Game from './Game.js';

// TODO: Saving & loading game state
const game = Game.create();

const form = document.querySelector('#input-form');
const input = document.querySelector('#input');
const output = document.querySelector('#output');

const render = ({ text, kind = '' }) => {
  const response = document.createElement('div');
  response.className = `response ${kind}`;
  response.innerHTML = text;
  output.appendChild(response);

  output.scrollTop = output.scrollHeight;
};

input.addEventListener('keyup', () => {
  input.value = input.value.replace(/^[\w]+/, (verb) => verb.toUpperCase());
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const { value } = input;
  render({ text: value, kind: 'command' });

  const [verb, ...ids] = value.split(' ');
  input.value = '';

  render(game.process(verb, ids));
});
