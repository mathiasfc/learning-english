import React, { useCallback, useEffect, useState } from 'react';
import { Backdrop } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as s from './styles';

type MeaningProps = {
  word: string;
  hideMeaning: () => void;
};

const Meaning = ({ word, hideMeaning }: MeaningProps) => {
  const [meaning, setMeaning] = useState<string>('');
  const [loadingMeaning, setLoadingMeaning] = useState(false);

  const PUBLIC_DICTIONARY_API =
    'https://api.dictionaryapi.dev/api/v2/entries/en/';

  const loadWordMeaning = useCallback(async () => {
    setLoadingMeaning(true);
    const res = await fetch(`${PUBLIC_DICTIONARY_API}${word}`);

    const data = await res.json();
    const wordMeaning = data?.[0]?.meanings?.[0]?.definitions?.[0]?.definition;
    setMeaning(wordMeaning);
    setLoadingMeaning(false);
  }, [word]);

  useEffect(() => {
    loadWordMeaning();
  }, [word, loadWordMeaning]);

  return (
    <s.MeaningContainer>
      <Backdrop open onClick={hideMeaning} />

      <s.MeaningInnerContainer>
        <s.MeaningLabelContainer>
          <span>{word} meaning:</span>
        </s.MeaningLabelContainer>

        <s.MeaningDescriptionContainer $loadingMeaning={loadingMeaning}>
          {loadingMeaning ? <CircularProgress /> : <span>{meaning}</span>}
        </s.MeaningDescriptionContainer>
      </s.MeaningInnerContainer>
    </s.MeaningContainer>
  );
};

export default Meaning;
