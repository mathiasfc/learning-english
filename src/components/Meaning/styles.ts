import styled, { css } from 'styled-components';
import { zIndex } from 'helpers/constants';

export const MeaningContainer = styled.div`
  ${({ theme }) => css`
    color: ${theme.typography.primaryText};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
    z-index: ${zIndex.high};
  `}
`;

export const MeaningInnerContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.backgroundColor};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    max-height: 300px;
    width: 80%;
    max-width: 600px;
    border-radius: 3px;
    padding: 30px 20px;
    position: relative;
  `}
`;

export const MeaningLabelContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;

    span {
      color: ${theme.typography.primaryText};
      font-size: 20px;
      font-weight: bold;
    }
  `}
`;

type DescriptionContainer = {
  readonly $loadingMeaning?: boolean;
};

export const MeaningDescriptionContainer = styled.div<DescriptionContainer>`
  ${({ theme, $loadingMeaning }) => css`
    display: flex;
    width: 100%;
    justify-content: ${$loadingMeaning ? 'center' : 'flex-start'};
    align-items: ${$loadingMeaning ? 'center' : 'initial'};
    margin-top: 30px;
    height: 100%;
    overflow-y: scroll;

    .MuiCircularProgress-colorPrimary {
      color: ${theme.buttons.mainButtonColor};
    }

    span {
      color: ${theme.typography.primaryText};
      font-size: 20px;
    }
  `}
`;
