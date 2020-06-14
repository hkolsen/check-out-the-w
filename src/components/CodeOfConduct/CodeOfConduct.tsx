import React from 'react';
import { styled } from '~/styled';
import { useCOCData } from '~/data/useCOCData';
import { MarkdownWrapper } from '../MarkdownWrapper';

const Wrapper = styled.div`
    padding: 3em 0;
    position: relative;
    max-width: 1290px;
    margin: 0 auto;
    width: 100%;
    ${({ theme }) => theme.media.medium`
        padding: 1.5em;
        width: 90%;
    `}
`;


const Header = styled.h2`
  background: ${({ theme }) => theme.colors.ACCENT};
  border: 2px solid ${({ theme }) => theme.colors.DARK_GRAY};
  box-shadow: ${({ theme }) => theme.colors.DARK_GRAY} -8px 8px;
  color: ${({ theme }) => theme.colors.BASE};
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.SANS_SERIF};
  font-size: 3em;
  font-weight: ${({ theme }) => theme.weights.SEMI_BOLD};
  margin: 0 0 0.5em;
  padding: 0.25em 0.5em;
  ${({ theme }) => theme.media.medium`
      font-size: 2.5em;
  `};
`;

const Code = styled(MarkdownWrapper)`
    color: ${({ theme }) => theme.colors.BASE};
    padding: 0 0 1em;
    h2 {
        margin: 0 0 0.5em;
    }
    p {
        font-size: 1em;
        line-height: 1.5;
        margin: 0 0 0.5em;
        padding: 0;
        span {
            background: ${({ theme }) => theme.colors.ACCENT};
            color: ${({ theme }) => theme.colors.BASE};
            padding: 0 0.25em;
        }
    }
    ${({ theme }) => theme.media.medium`
        min-height: 10em;
        padding: 0 0.5em 1em; 
        width: 90%;
        br {
            display: none;
        }
    `};
`;

export const CodeOfConduct: React.FC = () => {
    const { html } = useCOCData();
    return (
    <Wrapper>
        <Header>
        Check Out The W Code of Conduct
          </Header>
        <Code content={html} />
    </Wrapper>
  );
};