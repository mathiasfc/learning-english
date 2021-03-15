import React from 'react';
import PropTypes from 'prop-types';
import WORDS from 'data/words';
import CONTENTS from 'data/contents';
import WordPage from 'templates/Word';

const Word = ({ word }) => <WordPage word={word} />;

Word.propTypes = {
  word: PropTypes.shape({
    word: PropTypes.string,
    phrase: PropTypes.string,
    image: PropTypes.string,
    audio: PropTypes.string,
    translation: PropTypes.string
  }).isRequired
};

export async function getStaticPaths() {
  const words = WORDS;

  const paths = words.map(word => ({
    params: { word }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // const word = CONTENTS.find(content => content.word === params.word);
  const word = CONTENTS[params.word];

  return { props: { word } };
}

export default Word;
