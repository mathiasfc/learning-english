import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { routes } from 'helpers/routes';
import * as s from './style';

const Custom404 = () => {
  return (
    <s.Custom404PageContainer>
      <Image src="/gifs/travolta.gif" height="200px" width="200px" />
      <s.InnerMessage>
        A página que você procura não existe{' '}
        <span role="img" aria-label="Emoji pensativo">
          🤔
        </span>
      </s.InnerMessage>
      <Link href={routes.home.path}>
        <s.BackToHomeMessage>
          Clique aqui para voltar para a home
        </s.BackToHomeMessage>
      </Link>
    </s.Custom404PageContainer>
  );
};

export default Custom404;
