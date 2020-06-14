import React from 'react';
import { styled } from '~/styled';
import { useHomeData } from '~/data/useHomeData';
import { FormattedMessage } from 'react-intl';
import { CTALink } from '../CustomLink';
import { MarkdownWrapper } from '../MarkdownWrapper';

const Wrapper = styled.div`
  width: 100%;
`;

const Section = styled.section`
  margin: 0 auto;
  max-width: 1290px;
  padding: 2em 1em 2.5em;
  ${({ theme }) => theme.media.small`
    max-width: 90%
  `};
`;

const HeaderContainer = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 0 1em 0;
  padding: 0.25em 0;
  ${({ theme }) => theme.media.medium`
        align-items: flex-start;
        flex-direction: column;
        max-width: 90%;
  `};
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.colors.BASE};
  font-family: ${({ theme }) => theme.fonts.SANS_SERIF};
  font-size: 3em;
  font-weight: ${({ theme }) => theme.weights.SEMI_BOLD};
  margin: 0;
  padding: 0;
  ${({ theme }) => theme.media.medium`
      font-size: 2.5em;
      min-width: auto;
  `};
`;

const HeaderLink = styled(CTALink)`
  font-size: 2em;
  margin: 0;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li<{ featured: boolean }>`
    background: ${({ theme, featured }) => featured ? theme.colors.BRIGHT_BG : theme.colors.WHITE};
    border: 2px solid ${({ theme }) => theme.colors.DARK_GRAY};
    border-top: ${({ theme, featured }) => featured ? `2px solid ${theme.colors.DARK_GRAY}` : `none`};
    border-bottom: ${({ theme, featured }) => featured ? `5px solid ${theme.colors.DARK_GRAY}` : `2px solid ${theme.colors.DARK_GRAY}`};
    display: flex;
    flex-direction: column;
    margin-right: ${({ featured }) => featured ? 0 : 2}em;
    margin-left: ${({ featured }) => featured ? 0 : 2}em;
`;

const ShowContent = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: flex-start;
    padding: 2em;
    ${({ theme }) => theme.media.medium`
        flex-direction: column;
        max-width: 90%;
  `};
`;

const ShowDetails = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors.ACCENT};
  border: 2px solid ${({ theme }) => theme.colors.DARK_GRAY};
  box-shadow: ${({ theme }) => theme.colors.DARK_GRAY} -8px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 6.5em;
  padding: 1em;
  ${({ theme }) => theme.media.medium`
        flex-direction: row;
        justify-content: flex-start;
        margin: 0 0 2em;
        padding: 0.5em;
  `};
`;

const ShowDay = styled.span`
  font-size: 1.25em;
  font-weight: bold;
  margin: 0;
  ${({ theme }) => theme.media.medium`
       font-size: 1.5em;
       padding: 0 0.5em 0 0;
  `};
`;

const ShowDate = styled.span`
  font-size: 2em;
  font-weight: bold;
  margin: 0;
  ${({ theme }) => theme.media.medium`
       font-size: 1.5em;
  `};
`;

const ShowHeader = styled.span`
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0 2em;
  ${({ theme }) => theme.media.medium`
       padding: 0;
  `};
`;

const ShowTitle = styled.h3`
    color: ${({ theme }) => theme.colors.BASE};
    font-family: ${({ theme }) => theme.fonts.SANS_SERIF};
    font-size: 2.5em;
    line-height: 1.25;
    margin: 0 0 0.25em;
`;

const ShowDesc = styled(MarkdownWrapper)`
  font-size: 1em;
  a {
      color: ${({ theme }) => theme.colors.BASE};
      transition: ${({ theme }) => theme.easing.GLOBAL};
      text-decoration-color: ${({ theme }) => theme.colors.ACTIVE};
      &:hover {
        font-weight: bold;
        text-decoration-color: ${({ theme }) => theme.colors.ACCENT};
      }
    }
`;

const ShowTime = styled.span`
  font-size: 2em;
  font-weight: bold;
  ${({ theme }) => theme.media.medium`
      border-top: 2px solid ${({ theme }) => theme.colors.ACCENT};
      margin: 1em 0 0;
  `};
`;


export const Programming: React.FC = () => {
  const { frontmatter } = useHomeData();
  return (
    <Wrapper>
    <Section>
      <HeaderContainer>
        <Header>
          <FormattedMessage
            defaultMessage="Coming Up Next &#9656;"
            description="Header that explains what's next in programming"
            id="Programming.Header"
            />
            </Header>
            <HeaderLink linkURL="https://www.twitch.tv/checkoutthew" linkType="external">
            <FormattedMessage
            defaultMessage="Tune in on Twitch"
            description="Navigation link that brings you to the Twitch"
            id="Programming.link"
            />
            </HeaderLink>
        </HeaderContainer>
        <List>
        {(frontmatter.programmingList || []).map((show) => (
            <Item key={show.id} featured={show.featured}>
                <ShowContent>
                <ShowDetails>
                  <ShowDay>{show.day}</ShowDay>
                  <ShowDate>{show.date}</ShowDate>
                </ShowDetails>
                <ShowHeader>
                  <ShowTitle>{show.title}</ShowTitle>
                  <ShowDesc content={show.description} />
                </ShowHeader>
                <ShowTime>{show.time}</ShowTime>
              </ShowContent>
            </Item>
        ))}
        </List>
    </Section>
    </Wrapper>
  );
};