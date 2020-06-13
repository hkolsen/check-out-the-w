import React from 'react';
import { styled } from '~/styled';
import { useResourcesData } from '~/data/useResourcesData';
import { MarkdownWrapper } from '../MarkdownWrapper';
import { CTALink, CustomLink } from '../CustomLink';
import Img from 'gatsby-image';

const HeroWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.DARK_GRAY};
    background-image: url('data:image/svg+xml,%3Csvg width="52" height="26" viewBox="0 0 52 26" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ff69b4" fill-opacity="0.4"%3E%3Cpath d="M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
    border-bottom: 0.5em solid ${({ theme }) => theme.colors.ACTIVE};
    padding: 10em 0 3em;
    position: relative;
    width: 100%;
    ${({ theme }) => theme.media.medium`
        padding: 7em 0 3em;
    `}
`;

const HeroSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1290px;
    ${({ theme }) => theme.media.medium`
        flex-direction: column-reverse;
        max-width: 90%;
    `};
`;

const HeroContent = styled.article``;

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

const SlidesLink = styled(CTALink)`
    font-size: 1.25em;
`;

const HeroImgLink = styled(CustomLink)`
    max-width: 40em;
    width: 100%;
    ${({ theme }) => theme.media.medium`
        margin: 0 0 2em;
    `};
`;
const HeroSlidesImg = styled(Img)`
    border: 2px solid ${({ theme }) => theme.colors.BASE};
    box-shadow: ${({ theme }) => theme.colors.BASE} -8px 8px;
`;

export const Hero: React.FC = () => {
    const { frontmatter } = useResourcesData();
    return (
    <HeroWrapper>
        <HeroSection>
        <HeroContent>
            <Header>{frontmatter.resourcesHeader}</Header>
            <Intro content={frontmatter.resourcesSubheader} />
            <SlidesLink linkURL="https://noti.st/heidiolsen/qrHED6/effective-storytelling-with-data-visualization" linkType="external">View slides</SlidesLink>
        </HeroContent>
        <HeroImgLink linkURL="https://noti.st/heidiolsen/qrHED6/effective-storytelling-with-data-visualization" linkType="external">
            <HeroSlidesImg fluid={frontmatter.resourcesHeroImg.childImageSharp.fluid} alt={frontmatter.resourcesHeroImgAlt} />
        </HeroImgLink>
        </HeroSection>
    </HeroWrapper>
  );
};