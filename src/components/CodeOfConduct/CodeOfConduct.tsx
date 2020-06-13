import React from 'react';
import { styled } from '~/styled';
import { useCOCData } from '~/data/useCOCData';
import { MarkdownWrapper } from '../MarkdownWrapper';

const Wrapper = styled.div`
    padding: 10em 0 3em;
    position: relative;
    width: 100%;
    ${({ theme }) => theme.media.medium`
        padding: 7em 0 3em;
    `}
`;

const Code = styled(MarkdownWrapper)`
    color: ${({ theme }) => theme.colors.WHITE};
    max-width: 29em;
    padding: 0 0 1em;
    p {
        font-size: 1.25em;
        line-height: 1.5;
        margin: 0;
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
        width: 100%;
        br {
            display: none;
        }
    `};
`;

export const CodeOfConduct: React.FC = () => {
    const { html } = useCOCData();
    return (
    <Wrapper>
        <Code content={html} />
    </Wrapper>
  );
};