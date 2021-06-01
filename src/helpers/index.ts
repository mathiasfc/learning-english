import WORDS from 'data/words';
import Router from 'next/router';
import { routes } from './routes';

/**
 * Loads the next word to be rendered
 * @returns { string } The next random word
 */
export const loadNextWord = (): string => {
  const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
  return randomWord;
};

/**
 * Loads the word page, based on word passed by parameter
 * @param { string } word next valid word
 */
export const loadWordPage = (word: string): void => {
  Router.push(`${routes.words.path}${word}`);
};
