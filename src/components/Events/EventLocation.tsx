import React from 'react';
import { styled } from '~/styled';
import { FormattedMessage } from 'react-intl';
import { CTALink } from '../CustomLink';
import W21Map from '~/img/W21Map.png';

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
  ${({ theme }) => theme.media.medium`
         font-size: 1.5em;
  `};
`;

const AddressContainer = styled.section`
    align-items: center;
    background: ${({ theme }) => theme.colors.WHITE};
    border: 2px solid ${({ theme }) => theme.colors.DARK_GRAY};
    border-top: ${({ theme }) => `2px solid ${theme.colors.DARK_GRAY}`};
    border-bottom: ${({ theme }) => `5px solid ${theme.colors.DARK_GRAY}`};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2em;
    ${({ theme }) => theme.media.medium`
        align-items: flex-start;
        flex-direction: column;
        padding: 2em 1em;
        max-width: 90%;
  `};
`;

const AddressLine = styled.p`
  font-size: 1.5em;
  font-weight: bold;
`;

const EventDetails = styled.div`
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

const EventDay = styled.span`
  font-size: 1.25em;
  font-weight: bold;
  margin: 0;
  ${({ theme }) => theme.media.medium`
       font-size: 1.5em;
       padding: 0 0.5em 0 0;
  `};
`;

const EventDate = styled.span`
  font-size: 2em;
  font-weight: bold;
  margin: 0;
  ${({ theme }) => theme.media.medium`
       font-size: 1.5em;
  `};
`;

const Map = styled.img`
  border: 2px solid ${({ theme }) => theme.colors.DARK_GRAY};
  border-top: ${({ theme }) => `2px solid ${theme.colors.DARK_GRAY}`};
  border-bottom: ${({ theme }) => `5px solid ${theme.colors.DARK_GRAY}`};
  box-sizing: border-box;
  height: 100%;
  margin: 1em auto;
  width: 100%;
`;

export const EventLocation: React.FC = () => 
<Wrapper>
    <Section>
      <HeaderContainer>
        <Header>
          <FormattedMessage
            defaultMessage="W21 Details"
            description="Header that explains the location"
            id="Location.Header"
            />
            </Header>
            
        </HeaderContainer>
        <AddressContainer>
        <EventDetails>
            <EventDay>Wed - Sun</EventDay>
            <EventDate>July 14 - 18</EventDate>
        </EventDetails>
          <AddressLine>44644 Camp Morrison Drive<br></br>Scio, OR 97374</AddressLine>
          <HeaderLink linkURL="https://goo.gl/maps/gKTVtCgfnEoPAWr36" linkType="external">
            <FormattedMessage
            defaultMessage="Show me on a map"
            description="Navigation link that Events you the map"
            id="Location.link"
            />
            </HeaderLink>
        </AddressContainer>
        <Map src={W21Map} />
    </Section>
    </Wrapper>