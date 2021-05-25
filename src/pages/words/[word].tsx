import React from 'react';
import { GetStaticProps } from 'next';
import WORDS from 'data/words';
import CONTENTS from 'data/contents';
import WordPageTemplate from 'templates/Word';
import { Word } from 'types';

type WordPageProps = {
  word: Word;
};

const WordPage = ({ word }: WordPageProps) => <WordPageTemplate word={word} />;

export async function getStaticPaths() {
  const words = WORDS;

  const paths = words.map(word => ({
    params: { word }
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async context => {
  const { params } = context;

  const word = CONTENTS.find(content => content.word === params?.word);

  return { props: { word } };
};

export default WordPage;
