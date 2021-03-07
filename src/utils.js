/* eslint-disable no-param-reassign */

export const stripIndent = (strings, ...params) => {
  let source = strings.map((string, i) => (
    `${string}${params[i] || ''}`
  )).join('');

  // See: https://github.com/zspecza/common-tags/blob/master/src/stripIndentTransformer/stripIndentTransformer.js
  const match = source.match(/^[^\S\n]*(?=\S)/gm);
  const indent = match && Math.min(...match.map((el) => el.length));
  if (indent) {
    const regexp = new RegExp(`^.{${indent}}`, 'gm');
    source = source.replace(regexp, '');
  }

  // Strip leading whitespace and trailing tabs/spaces
  source = source.replace(/^\n+|[ \t]+$/g, '');

  return source;
};

// Loosely based on Ruby on Rails' Inflector
// See: https://api.rubyonrails.org/classes/ActiveSupport/Inflector.html
export const underscore = (str) => {
  str = str.replace(/(\p{Upper}+)(\p{Upper}\p{Lower})/gu, '$1_$2');
  str = str.replace(/([\p{Lower}\d])(\p{Upper})/gu, '$1_$2');
  return str.toLowerCase();
};
