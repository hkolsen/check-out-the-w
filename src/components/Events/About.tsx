import React from 'react';
import { styled } from '~/styled';
import { MarkdownWrapper } from '../MarkdownWrapper';
import { useEventsData } from '~/data/useEventsData';

const AboutWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.BRIGHT_BG};
    background-image: url('data:image/svg+xml,%3Csvg width="52" height="26" viewBox="0 0 52 26" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f8699e" fill-opacity="0.7"%3E%3Cpath d="M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
    border-bottom: 0.5em solid ${({ theme }) => theme.colors.ACTIVE};
    padding: 3em 0;
    width: 100%;
`;

const AboutSection = styled.section`
    background: ${({ theme }) => theme.colors.WHITE};
    border: 2px solid ${({ theme }) => theme.colors.DARK_GRAY};
    box-shadow: ${({ theme }) => theme.colors.DARK_GRAY} -8px 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1200px;
    padding: 2em;
    ${({ theme }) => theme.media.medium`
        flex-direction: column;
        max-width: 80%;
  `};
`;

const Header = styled.h1`
    color: ${({ theme }) => theme.colors.BASE};
    font-family: ${({ theme }) => theme.fonts.SANS_SERIF};
    font-size: 2.5em;
    line-height: 1.5;
    margin: 0 0 0.25em;
    padding: 0;
    ${({ theme }) => theme.media.medium`
        font-size: 2em;
        line-height: 1;
    `};
`;

const Intro = styled.article`
    ${({ theme }) => theme.media.medium`
        margin: 0 0 1.5em;
    `};
`;

const AboutMe = styled(MarkdownWrapper)`
    p {
        font-size: 1em;
        line-height: 1.5;
        margin: 0;
        padding: 0;
    }
    a {
        text-decoration-color: ${({ theme }) => theme.colors.ACTIVE};
    }
    ${({ theme }) => theme.media.medium`
        min-height: 10em;
        padding: 0.5em 0; 
        width: 100%
        br {
            display: none;
        }
    `};
`;

export const About: React.FC = () => {
    const { frontmatter } = useEventsData();
    return (
    <AboutWrapper id="about">
        <AboutSection>
            <Intro>
            <Header>{frontmatter.aboutHeader}</Header>
                <AboutMe content={frontmatter.aboutContent} />
            </Intro>
        </AboutSection>
    </AboutWrapper>
  );
};