import React from 'react';
import { styled } from '~/styled';
// import { useHomeData } from '~/data/useHomeData';
// import { MarkdownWrapper } from '../MarkdownWrapper';
import { Programming } from './Programming';
import { Television } from '../../img/svg/Television';
import WTV from '../../img/WTV.gif';
import Logo from '../../img/logo.png';

const HeroWrapper = styled.div`
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="18" viewBox="0 0 100 18"%3E%3Cpath fill="%23f4f4f7" fill-opacity="0.7" d="M61.82 18c3.47-1.45 6.86-3.78 11.3-7.34C78 6.76 80.34 5.1 83.87 3.42 88.56 1.16 93.75 0 100 0v6.16C98.76 6.05 97.43 6 96 6c-9.59 0-14.23 2.23-23.13 9.34-1.28 1.03-2.39 1.9-3.4 2.66h-7.65zm-23.64 0H22.52c-1-.76-2.1-1.63-3.4-2.66C11.57 9.3 7.08 6.78 0 6.16V0c6.25 0 11.44 1.16 16.14 3.42 3.53 1.7 5.87 3.35 10.73 7.24 4.45 3.56 7.84 5.9 11.31 7.34zM61.82 0h7.66a39.57 39.57 0 0 1-7.34 4.58C57.44 6.84 52.25 8 46 8S34.56 6.84 29.86 4.58A39.57 39.57 0 0 1 22.52 0h15.66C41.65 1.44 45.21 2 50 2c4.8 0 8.35-.56 11.82-2z"%3E%3C/path%3E%3C/svg%3E');
    border-bottom: 0.5em solid ${({ theme }) => theme.colors.ACCENT};
    padding: 0;
    position: relative;
    width: 100%;
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

const HeroImg = styled.img`
    height: 15em;
    width: auto;
    transform: rotate(-5deg);
`;

// const Header = styled.h1`
//     color: ${({ theme }) => theme.colors.WHITE};
//     font-family: ${({ theme }) => theme.fonts.SANS_SERIF};
//     font-size: 3.5em;
//     line-height: 1.5;
//     margin: 0;
//     padding: 0;
//     ${({ theme }) => theme.media.medium`
//         font-size: 2.5em;
//         line-height: 1;
//     `};
// `;

// const Intro = styled(MarkdownWrapper)`
//     color: ${({ theme }) => theme.colors.WHITE};
//     max-width: 25em;
//     p {
//         font-size: 1.25em;
//         line-height: 1.5;
//         margin: 0;
//         padding: 0;
//         span {
//             color: ${({ theme }) => theme.colors.BASE};
//             padding: 0 0.25em;
//         }
//         .accent {
//             background:${({ theme }) => theme.colors.ACCENT}; 
//         }
//         .active {
//             background:${({ theme }) => theme.colors.ACTIVE}; 
//         }
//         .highlight {
//             background:${({ theme }) => theme.colors.HIGHLIGHT}; 
//         }
//     }
//     ${({ theme }) => theme.media.medium`
//         min-height: 10em;
//         padding: 0.5em 0; 
//         width: 100%;
//         br {
//             display: none;
//         }
//     `};
// `;

const TVContainer = styled.div`
    position: relative;
    svg {
        height: 20em;
        width: auto;
        z-index: 0;
    }
`;

const WTVLogo = styled.img`
    position: absolute;
    z-index: 1;
    width: 10em;
    top: 7.5em;
    left: 4em;
    transform: rotate(5deg);
`;

export const Hero: React.FC = () => (
<HeroWrapper>
        <HeroSection>
            <HeroContent>
                <HeroImg src={Logo} alt="Check Out The W Logo" />
                {/* <Header>{frontmatter.header}</Header>
                <Intro content={frontmatter.subheader} /> */}
            </HeroContent>
            <TVContainer>
            <WTVLogo src={WTV} />
            <Television />
            </TVContainer>
        </HeroSection>
        <Programming />
    </HeroWrapper>
  );