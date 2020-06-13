import React from 'react';
import { styled, useTheme } from '~/styled';
import { useHomeData } from '~/data/useHomeData';
import { MarkdownWrapper } from '../MarkdownWrapper';

const HeroWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.DARK_GRAY};
    background-image: url('data:image/svg+xml,%3Csvg width="52" height="26" viewBox="0 0 52 26" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ff69b4" fill-opacity="0.4"%3E%3Cpath d="M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
    border-bottom: 0.5em solid ${({ theme }) => theme.colors.ACTIVE};
    padding: 3em 0;
    position: relative;
    width: 100%;
    ${({ theme }) => theme.media.medium`
        padding: 7em 0 3em;
    `}
`;

const HeroSection = styled.section`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1290px;
    ${({ theme }) => theme.media.medium`
        flex-direction: column;
        max-width: 90%;
    `};
`;

const HeroContent = styled.article``;

const ChartContainer = styled.aside`
    max-height: 40em;
    svg {
        overflow: inherit;
    }
    .caption {
        fill: ${({ theme }) => theme.colors.WHITE};
        font-family: ${({ theme }) => theme.fonts.SANS_SERIF};
        font-size: 1rem;
        font-weight: ${({ theme }) => theme.weights.SEMI_BOLD};
        text-shadow: none;
    }
    .scale {
        fill: transparent;
        stroke: ${({ theme }) => theme.colors.LIGHT_BG};
        stroke-width: 0.5;
    }
    ${({ theme }) => theme.media.medium`
        max-height: 30em;
        svg {
            width: 350px;
            height: 350px;
        }
    `};
`;

const Header = styled.h1`
    color: ${({ theme }) => theme.colors.WHITE};
    font-family: ${({ theme }) => theme.fonts.SANS_SERIF};
    font-size: 3.5em;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    ${({ theme }) => theme.media.medium`
        font-size: 2.5em;
        line-height: 1;
    `};
`;

const Intro = styled(MarkdownWrapper)`
    color: ${({ theme }) => theme.colors.WHITE};
    max-width: 25em;
    p {
        font-size: 1.25em;
        line-height: 1.5;
        margin: 0;
        padding: 0;
        span {
            color: ${({ theme }) => theme.colors.BASE};
            padding: 0 0.25em;
        }
        .accent {
            background:${({ theme }) => theme.colors.ACCENT}; 
        }
        .active {
            background:${({ theme }) => theme.colors.ACTIVE}; 
        }
        .highlight {
            background:${({ theme }) => theme.colors.HIGHLIGHT}; 
        }
    }
    ${({ theme }) => theme.media.medium`
        min-height: 10em;
        padding: 0.5em 0; 
        width: 100%;
        br {
            display: none;
        }
    `};
`;

export const Hero: React.FC = () => {
    const { frontmatter } = useHomeData();
    const { colors } = useTheme();
    return (
    <HeroWrapper>
        <HeroSection>
            <HeroContent>
                <Header>{frontmatter.header}</Header>
                <Intro content={frontmatter.subheader} />
            </HeroContent>
        </HeroSection>
    </HeroWrapper>
  );
};