import React from 'react';
import { styled } from '~/styled';
import { CTALink } from '../CustomLink';
import { useHomeData } from '~/data/useHomeData';
import { MarkdownWrapper } from '../MarkdownWrapper';

const DiscordWrapper = styled.div`
    background: ${({ theme }) => theme.colors.DARK_GRAY};
    background-image: url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%233ef0e4" fill-opacity="0.7" fill-rule="evenodd"%3E%3Cpath d="M0 40L40 0H20L0 20M40 40V20L20 40"/%3E%3C/g%3E%3C/svg%3E');
    border-bottom: 0.5em solid ${({ theme }) => theme.colors.DARK_GRAY};
    padding: 3em 0;
    width: 100%;
    ${({ theme }) => theme.media.medium`
        padding: 3em 0 2.5em;
  `};
`;

const DiscordSection = styled.section`
    background: ${({ theme }) => theme.colors.WHITE};
    border: 2px solid ${({ theme }) => theme.colors.DARK_GRAY};
    box-shadow: ${({ theme }) => theme.colors.DARK_GRAY} -8px 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 40em;
    padding: 2em 1em;
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

const Body = styled(MarkdownWrapper)`
    max-width: 30em;
    p {
        font-size: 1em;
        line-height: 1.5;
        margin: 0;
        padding: 0;
    }
    a {
      color: ${({ theme }) => theme.colors.BASE};
      transition: ${({ theme }) => theme.easing.GLOBAL};
      text-decoration-color: ${({ theme }) => theme.colors.ACTIVE};
      &:hover {
        font-weight: bold;
        text-decoration-color: ${({ theme }) => theme.colors.ACCENT};
      }
    }
    ${({ theme }) => theme.media.medium`
        padding: 0.5em 0; 
        width: 100%
        br {
            display: none;
        }
    `};
`;

const DiscordLink = styled(CTALink)`
  margin: 1em 0 0;
  ${({ theme }) => theme.media.medium`
       font-size: 1.25em;
    `};
`;

export const Discord: React.FC = () => {
  const { frontmatter } = useHomeData();
  return (
    <DiscordWrapper id="Discord">
        <DiscordSection>
            <Intro>
            <Header>Keep the Conversation Going</Header>
            <Body content={frontmatter.discordContent} />

               <DiscordLink linkURL="https://discord.gg/Abxs4b3" linkType="external">
                 Check Out Discord
               </DiscordLink>
            </Intro>
            
        </DiscordSection>
    </DiscordWrapper>
  )
};