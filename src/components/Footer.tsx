import React from 'react';
import { styled} from '~/styled';
import { TextLink } from './CustomLink';
import { FormattedMessage } from 'react-intl';

const FooterSection = styled.section`
    background: ${({ theme }) => theme.colors.BASE};
    color: ${({ theme }) => theme.colors.WHITE};
    padding: 3em 0;
`;

const FooterContainer = styled.article`
    margin: 0 auto;
    max-width: 43em;
    width: 100%;
`;

const FooterHeader = styled.h2`
    color: ${({ theme }) => theme.colors.WHITE};
    font-size: 1.5em;
    margin: 0 0 0.25em;
    padding: 0;
    text-align: left;
`;


const FooterLinkList = styled.ul`
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 1em 0;
`;

const FooterText = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    font-size: 0.75em;
    margin: 0 auto;
    text-align: left;
`;

const FooterLink = styled(TextLink)`
    color: ${({ theme }) => theme.colors.WHITE}; 
`;

export const Footer: React.FC = () => 
<FooterSection>
    <FooterContainer>
        <FooterHeader>
        <FormattedMessage
            defaultMessage="Helpful Links"
            description="Header for the social links"
            id="Footer.SocialLinks"
            />
        </FooterHeader>
        <FooterLinkList>
            <FooterLink linkURL="#" linkType="external">
                Check Out The W Twitch Channel
            </FooterLink>
            <FooterLink linkURL="#" linkType="external">
                Discord Channel
            </FooterLink>
            <FooterLink linkURL="#" linkType="external">
                Community Resources
            </FooterLink>
            <FooterLink linkURL="#" linkType="external">
                Code of Conduct
            </FooterLink>
        </FooterLinkList> 
        <FooterText>
        <FormattedMessage
              defaultMessage="&copy; 2020 Check Out The W, a GrandCooley Jam"
              description="Copyright for the site"
              id="Footer.Copyright"
              />
        </FooterText>   
        </FooterContainer>   
    </FooterSection>
  