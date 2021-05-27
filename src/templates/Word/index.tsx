import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import RefreshIcon from '@material-ui/icons/Refresh';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import { loadNextWord, loadWordPage } from 'helpers/index';
import { Word } from 'types';
import { useSettings } from 'hooks/useSettings';
import * as s from './style';

type WordPageTemplateProps = {
  word: Word;
};

const WordPageTemplate = ({ word }: WordPageTemplateProps) => {
  const [toggleSpeed, setToggleSpeed] = useState(false);
  const [animateIcon, setAnimateIcon] = useState(false);
  const [nextWord, setNextWord] = useState<string>('');
  const { autoAdvanceWords, autoPlayAudio } = useSettings();

  const phraseRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (autoPlayAudio) {
      setTimeout(() => {
        playAudio();
      }, 300);
    }

    setNextWord(loadNextWord());
  }, [word]);

  let advanceTimeout: any;

  useEffect(() => {
    if (autoAdvanceWords && !autoPlayAudio) {
      advanceTimeout = setTimeout(() => {
        loadAnotherWord();
      }, 5000);
    } else {
      clearTimeout(advanceTimeout);
    }

    () => {
      clearTimeout(advanceTimeout);
    };
  }, [word, autoAdvanceWords]);

  const playAudio = () => {
    window.speechSynthesis.cancel();

    const audio = new window.SpeechSynthesisUtterance();
    const voices = window.speechSynthesis.getVoices();
    audio.voice = voices[1];
    audio.volume = 1;
    audio.rate = toggleSpeed ? 0.6 : 1;
    audio.pitch = 1;
    audio.text = word.phrase;
    audio.lang = 'en-US';

    setToggleSpeed(!toggleSpeed);
    window.speechSynthesis.speak(audio);

    audio.addEventListener('end', () => {
      if (autoAdvanceWords) {
        setTimeout(() => {
          loadAnotherWord();
        }, 500);
      }
    });
  };

  const loadAnotherWord = () => {
    setToggleSpeed(false);
    loadWordPage(nextWord);
    setAnimateIcon(true);
  };

  const addClassToWord = () => {
    const regex = new RegExp(`(${word?.word})`, 'gi');
    const phrase = word?.phrase.replace(
      regex,
      `<span class='current-word'>${word?.word}</span>`
    );

    if (phraseRef.current !== null) {
      phraseRef.current.innerHTML = `<span>"${phrase}"</span>`;
    }
  };

  useEffect(() => {
    if (phraseRef?.current) {
      addClassToWord();
    }
  });

  useEffect(() => {
    if (animateIcon) {
      setTimeout(() => {
        setAnimateIcon(false);
      }, 500);
    }
  }, [animateIcon]);

  return (
    <s.WordPageContainer>
      <s.Content>
        <s.ImageWrapper>
          <Image
            layout="fill"
            objectFit="cover"
            priority
            src={`/images/words/${word?.word.charAt(0)}/${word?.word}.png`}
          />
        </s.ImageWrapper>

        <s.NextWordImageWrapper>
          <Image
            layout="fill"
            objectFit="cover"
            priority
            src={`/images/words/${nextWord?.charAt(0)}/${nextWord}.png`}
          />
        </s.NextWordImageWrapper>
        <s.WordContainer>
          <s.Word>{word?.word}</s.Word>
          <s.Translation>({word?.translation})</s.Translation>
        </s.WordContainer>

        <s.PhraseContainer>
          <span ref={phraseRef} />
          <s.PlayAudioButton aria-label="Ouvir" onClick={playAudio}>
            <VolumeUpIcon />
          </s.PlayAudioButton>
        </s.PhraseContainer>
      </s.Content>
      <s.CommandsBar>
        <s.NextButton
          aria-label="Próxima"
          onClick={loadAnotherWord}
          $animateIcon={animateIcon}
        >
          <RefreshIcon />
        </s.NextButton>
      </s.CommandsBar>
    </s.WordPageContainer>
  );
};

export default WordPageTemplate;
