/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import * as s from './style';

const WordPage = ({ word, nextWord }) => {
  const [toggleSpeed, setToggleSpeed] = useState(false);

  const playAudio = () => {
    window.speechSynthesis.cancel();

    // eslint-disable-next-line no-undef
    const audio = new window.SpeechSynthesisUtterance();
    const voices = window.speechSynthesis.getVoices();
    audio.voice = voices[1]; // Note: some voices don't support altering params
    audio.voiceURI = 'native';
    audio.volume = 1;
    audio.rate = toggleSpeed ? 0.6 : 1;
    audio.pitch = 1;
    audio.text = word.phrase;
    audio.lang = 'en-US';

    setToggleSpeed(!toggleSpeed);
    window.speechSynthesis.speak(audio);
  };

  return (
    <s.WordPageContainer>
      <s.ImageWrapper>
        <Image
          layout="fill"
          objectFit="contain"
          src={`/images/words/${word.word}.png`}
        />
      </s.ImageWrapper>
      <s.WordContainer>
        <s.Word>{word?.word}</s.Word>
        <s.Translation>({word?.translation})</s.Translation>
      </s.WordContainer>

      <s.Phrase>
        <span>"{word?.phrase}"</span>
      </s.Phrase>

      <s.NextButton type="button" onClick={nextWord}>
        Next
      </s.NextButton>
      <s.PlayButton type="button" onClick={playAudio}>
        <span />
      </s.PlayButton>
    </s.WordPageContainer>
  );
};

WordPage.propTypes = {
  word: PropTypes.shape({
    word: PropTypes.string,
    phrase: PropTypes.string,
    image: PropTypes.string,
    audio: PropTypes.string,
    translation: PropTypes.string
  }).isRequired
};

export default WordPage;
