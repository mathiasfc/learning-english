/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import * as s from './style';

const WordPage = ({ word }) => {
  return (
    <s.WordPageContainer>
      <div>{word?.word}</div>
    </s.WordPageContainer>
  );
};

WordPage.propTypes = {
  word: PropTypes.shape({
    word: PropTypes.string,
    phrase: PropTypes.string,
    image: PropTypes.string,
    audio: PropTypes.string
  }).isRequired
};

export default WordPage;
