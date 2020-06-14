import { ThreeBounce } from 'better-react-spinkit';
import React, { useMemo, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { MarkdownWrapper } from '~/components/MarkdownWrapper';
import { styled, useTheme } from '~/styled';
import { RadioIcon } from '../../img/svg/RadioIcon';
import {
  ResourceFormManager,
  FormActionType,
  useForm,
} from './ResourceFormManager';
import { Input } from './FormInput';
import { useResourcesData } from '~/data/useResourcesData';

interface StyledRadioProps {
  open: boolean;
}

const FormWrapper = styled.div`
  margin: 3.5em auto;
  max-width: 800px;
  width: 100%;
  ${({ theme }) => theme.media.medium`
    width: 95%;
  `};
`;

const FormContainer = styled.form`
  margin: 0;
`;

const FormFields = styled.div``;

const FormColumn = styled.div`
  margin: 0 0 1em;
  ${({ theme }) => theme.media.small`
    margin: 0 0 2em;
  `};
`;

const FormHeader = styled.legend`
  color: ${({ theme }) => theme.colors.BASE};
  font-weight: ${({ theme }) => theme.weights.SEMI_BOLD};
  font-size: 1.5em;
  line-height: 1.5;
  padding: 0 0 1rem;
  margin: 0;
  text-align: left;
`;

const FormBody = styled.p`
  color: ${({ theme }) => theme.colors.BASE};
  font-size: 1em;
  margin: 0 0 1em;
  padding: 0;
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

const FormSet = styled.fieldset`
  border: 0;
  box-sizing: border-box;
  padding: 0;
  position: relative;
  width: 100%;
`;

// const FormLabel = styled.label`
//   color: ${({ theme }) => theme.colors.BASE};
//   font-size: 1em;
//   font-weight: ${({ theme }) => theme.weights.REGULAR};
//   margin: 0;
//   padding: 0;
// `;

const FormLabelTextArea = styled.label`
  color: ${({ theme }) => theme.colors.BASE};
  font-size: 1em;
  font-weight: ${({ theme }) => theme.weights.REGULAR};
  margin: 0;
  padding: 0;
`;

const RadioContainer = styled.fieldset<StyledRadioProps>`
  background: ${({ open, theme }) =>
    open ? `${theme.colors.LIGHT_BG}` : `${theme.colors.WHITE}`};
  border: 0;
  border-radius: 0.5em;
  padding: 0.5em 1em;
`;

const RadioIconContainer = styled.span<StyledRadioProps>`
  background: ${({ open, theme }) =>
    open ? `${theme.colors.ACCENT}` : `${theme.colors.WHITE}`};
  display: inline-block;
  width: 1.25em;
  height: 1.25em;
  vertical-align: middle;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.colors.BASE};
  border-radius: 50%;
  margin: 0 1em 0 0;
  text-align: center;
  padding: 0.5em;
  line-height: 1.25em;
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    display: none;
  }
  @supports (-ms-ime-align: auto) {
    display: none;
  }
  svg {
    opacity: ${({ open }) => (open ? 1 : 0)};
    transition: ${({ theme }) => theme.easing.GLOBAL};
  }
`;

const RadioLabel = styled.label`
  align-items: center;
  color: ${({ theme }) => theme.colors.BASE};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const RadioLabelText = styled.h2`
  flex: 1;
  font-size: 1em;
  font-weight: ${({ theme }) => theme.weights.REGULAR};
`;

const RadioDesc = styled(MarkdownWrapper)<StyledRadioProps>`
  display: ${({ open }) => (open ? `block` : `none`)};
  font-size: 1em;
`;

const ReasonOther = styled.div<StyledRadioProps>`
  display: ${({ open }) => (open ? `block` : `none`)};
`;

const HiddenInput = styled.input`
  visibility: hidden;
`;

const ButtonContainer = styled.div``;

const FormSubmit = styled.button`
  margin: 1em 1em 0 0;
  background: ${({ theme }) => theme.colors.ACTIVE};
  border: 2px solid ${({ theme }) => theme.colors.BASE};
  color: ${({ theme }) => theme.colors.BASE};
  display: inline-block;
  font-size: 1.5em;
  font-family: ${({ theme }) => theme.fonts.SANS_SERIF};
  font-weight: bold;
  padding: 0.25em 1em 0.25em 0.75em;
  text-decoration: none;
  transition: ${({ theme }) => theme.easing.GLOBAL};
  &:after {
    border-style: solid;
    border-width: 0.125em 0.125em 0 0;
    content: '';
    display: inline-block;
    height: 0.4em;
    position: relative;
    vertical-align: middle;
    width: 0.4em;
    left: 0.25em;
    transform: rotate(45deg);
  }
  :focus-within {
    background-color: ${({ theme }) => theme.colors.WHITE};
    border: 2px dashed ${({ theme }) => theme.colors.BASE};
    color: ${({ theme }) => theme.colors.BASE};
  }
  :hover {
    background-color: ${({ theme }) => theme.colors.WHITE};
    border: 2px dashed ${({ theme }) => theme.colors.BASE};
    color: ${({ theme }) => theme.colors.BASE};
  }
`;

const FormConfirmation = styled.div`
  height: 100%;
  width: 100%;
`;

const FormConfirmationHeader = styled.h2`
  color: ${({ theme }) => theme.colors.BASE};
  font-weight: ${({ theme }) => theme.weights.SEMI_BOLD};
  font-size: 1.75em;
  line-height: 1.5;
  padding: 0 0 0.5em;
  margin: 0;
  text-align: left;
`;

const FormConfirmationBody = styled(MarkdownWrapper)`
  color: ${({ theme }) => theme.colors.BASE};
`;

const FormContents: React.FC = () => {
  const { frontmatter } = useResourcesData();
  const { isLoading, dispatch } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);
  const onUpdate = () => window.scrollTo(0, 0);
  const onSubmit = useMemo(
    () => (event: React.SyntheticEvent<any>) => {
      event.preventDefault();
      dispatch({ type: FormActionType.Submit });
      setSubmitted(true);
      onUpdate();
    },
    [dispatch],
  );
  const { colors } = useTheme();
  return (
    <FormWrapper>
      {submitted ? (
        <FormConfirmation>
          <FormConfirmationHeader>
          Resource submitted! 
          </FormConfirmationHeader>
          <FormConfirmationBody content="Your resource will be reviewed and added to the site likely betwee 24-48 hours." />
        </FormConfirmation>
      ) : (
        <FormContainer
          name="Resources"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={onSubmit}
        >
          <FormHeader>Submit a Resource</FormHeader>
          <FormBody>If you have a resource you would like to share, please fill out the form below. All contributions are welcome and will need to adhere to our <a href="/code-of-conduct">Code of Conduct</a>.</FormBody>
          <FormFields>
          <FormColumn>
              <FormSet>
                <FormLabelTextArea htmlFor="submitName">
                  <FormattedMessage
                    defaultMessage="What is your name and email address in case we need to follow up?"
                    description="Message field for the Contact Us form"
                    id="ResourceForm.message"
                  />
                  <Input type="text" fieldName="submitName" />
                </FormLabelTextArea>
              </FormSet>
            </FormColumn>
          <FormColumn>
              <FormSet>
                <FormLabelTextArea htmlFor="title">
                  <FormattedMessage
                    defaultMessage="What is the title of your resource?"
                    description="Message field for the Contact Us form"
                    id="ResourceForm.message"
                  />
                  <Input type="text" fieldName="title" />
                </FormLabelTextArea>
              </FormSet>
            </FormColumn>
            <FormColumn>
              {frontmatter?.categoryList?.filter(Boolean).map((category) => {
                const open = openId === category.id;
                return (
                  <RadioContainer key={category.id} open={open}>
                    <RadioLabel htmlFor={category.id}>
                      <Input
                        type="radio"
                        onRadioChange={() => {
                          setOpenId(category.id ?? null);
                        }}
                        fieldName="category"
                        radioValue={category.id}
                      />
                      <RadioIconContainer open={open}>
                        <RadioIcon
                          color={colors.WHITE}
                          iconName="Category "
                        />
                      </RadioIconContainer>
                      <RadioLabelText>{category.header}</RadioLabelText>
                    </RadioLabel>
                    {category.id === '05_other' ? (
                      <ReasonOther open={open}>
                        <FormLabelTextArea htmlFor="categoryOther">
                          <FormattedMessage
                            defaultMessage="If other, please provide a category:"
                            description="Message field for the Contact Us form"
                            id="ResourceForm.category"
                          />
                          <Input type="textarea" fieldName="categoryOther" />
                        </FormLabelTextArea>
                      </ReasonOther>
                    ) : (
                      <RadioDesc open={open} content={category.desc} />
                    )}
                  </RadioContainer>
                );
              })}
            </FormColumn>
            <FormColumn>
              <FormSet>
                <FormLabelTextArea htmlFor="message">
                  <FormattedMessage
                    defaultMessage="Provide the details for your resource. Try to keep it under 200 characters."
                    description="Message field for the Contact Us form"
                    id="ResourceForm.message"
                  />
                  <Input type="textarea" fieldName="message" />
                </FormLabelTextArea>
              </FormSet>
            </FormColumn>
          </FormFields>
          <HiddenInput name="bot-field" />
          <HiddenInput type="hidden" name="form-name" value="Resources" />
          <ButtonContainer>
            <FormSubmit onSubmit={onSubmit}>
              {isLoading ? (
                <ThreeBounce color={colors.ACCENT} size={12} />
              ) : (
                <FormattedMessage
                  defaultMessage="Submit Resource"
                  description="Submit button for the Close Account form"
                  id="ResourceForm.submit"
                />
              )}
            </FormSubmit>
          </ButtonContainer>
        </FormContainer>
      )}
    </FormWrapper>
  );
};

export const ResourceForm: React.FC = () => (
  <ResourceFormManager>
    <FormContents />
  </ResourceFormManager>
);