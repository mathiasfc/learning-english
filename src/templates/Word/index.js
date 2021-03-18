/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import { nextWord } from 'helpers/index';
import * as s from './style';

const WordPage = ({ word }) => {
  const [toggleSpeed, setToggleSpeed] = useState(false);

  const playAudio = () => {
    window.speechSynthesis.cancel();

    // eslint-disable-next-line no-undef
    const audio = new window.SpeechSynthesisUtterance();
    const voices = window.speechSynthesis.getVoices();
    audio.voice = voices[1];
    audio.voiceURI = 'native';
    audio.volume = 1;
    audio.rate = toggleSpeed ? 0.6 : 1;
    audio.pitch = 1;
    audio.text = word.phrase;
    audio.lang = 'en-US';

    setToggleSpeed(!toggleSpeed);
    window.speechSynthesis.speak(audio);
  };

  const loadAnotherWord = () => {
    setToggleSpeed(false);
    nextWord();
  };

  return (
    <s.WordPageContainer>
      <s.Content>
        <s.ImageWrapper>
          <Image
            layout="fill"
            objectFit="contain"
            src={`/images/words/${word?.word.charAt(0)}/${word?.word}.png`}
          />
        </s.ImageWrapper>
        <s.WordContainer>
          <s.Word>{word?.word}</s.Word>
          <s.Translation>({word?.translation})</s.Translation>
        </s.WordContainer>

        <s.PhraseContainer>
          <span>"{word?.phrase}"</span>
          <s.PlayButton aria-label="Ouvir" onClick={playAudio}>
            <VolumeUpIcon />
          </s.PlayButton>
        </s.PhraseContainer>
      </s.Content>
      <s.CommandsBar>
        <s.NextButton aria-label="Próxima" onClick={loadAnotherWord}>
          <NavigateNextIcon />
        </s.NextButton>
      </s.CommandsBar>
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
