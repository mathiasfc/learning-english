import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import * as s from './style';

const WordPage = ({ word }) => {
  const [toggleSpeed, setToggleSpeed] = useState(false);

  const playAudio = () => {
    window.speechSynthesis.cancel();

    // eslint-disable-next-line no-undef
    const audio = new window.SpeechSynthesisUtterance();
    const voices = window.speechSynthesis.getVoices();
    audio.voice = voices[2]; // Note: some voices don't support altering params
    audio.voiceURI = 'native';
    audio.volume = 1;
    audio.rate = toggleSpeed ? 0.5 : 1;
    audio.pitch = 1;
    audio.text = word.phrase;
    audio.lang = 'en-US';

    setToggleSpeed(!toggleSpeed);
    window.speechSynthesis.speak(audio);
  };

  return (
    <s.WordPageContainer>
      <Image
        height="200px"
        width="200px"
        objectFit="contain"
        src={`/images/words/${word.word}.png`}
      />
      <h1>
        {word?.word} - {word?.translation}
      </h1>

      <h2>{word?.phrase}</h2>
      <button type="button" onClick={playAudio}>
        PLAY
      </button>
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
