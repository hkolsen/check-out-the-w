import React from 'react';
import { styled } from '~/styled';
import { FormActionType, FormState, useForm } from './ResourceFormManager';

const FormTextArea = styled.textarea`
  background: ${({ theme}) => theme.colors.WHITE};
  border: 2px solid
    ${({ theme }) => theme.colors.BASE};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.BASE};
  font-family: 'Work Sans', sans-serif;
  font-size: 1em;
  height: 90%;
  line-height: 2;
  margin: 0.5em 0 0;
  min-height: 15em;
  resize: none;
  padding: 0.5em 1em;
  width: 90%;
  ${({ theme }) => theme.media.small`
    min-height: 10em;
  `};
  :hover {
    border: ${({ theme }) => `2px solid ${theme.colors.ACCENT}`};
  }
  :focus {
    border: ${({ theme }) => `2px solid ${theme.colors.ACCENT}`};
  }
  :focus:invalid {
  }
`;

const RadioButton = styled.input.attrs({ type: 'radio' })`
  display: none;
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    display: block;
  }
  @supports (-ms-ime-align: auto) {
    display: block;
  }
`;

function useFormInput(
  fieldName: keyof FormState,
): {
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
} {
  const { state, dispatch } = useForm();
  return {
    value: state[fieldName],
    onChange: (event) => {
      dispatch({
        type: FormActionType.ChangeValue,
        key: fieldName,
        value: event.target.value,
      });
    },
  };
}

interface InputProps {
  fieldName: keyof FormState;
  type: 'text' | 'email' | 'textarea' | 'radio';
  radioValue?: string;
  onRadioChange?: () => void;
}

export const Input: React.FC<InputProps> = ({
  fieldName,
  type,
  radioValue,
  onRadioChange,
}) => {
  const { value, onChange } = useFormInput(fieldName);
  switch (type) {
    case 'textarea':
      return (
        <FormTextArea
          id={fieldName}
          name={fieldName}
          value={value}
          onChange={onChange}
        />
      );
    case 'radio':
      return (
        <RadioButton
          type="radio"
          id={radioValue}
          name={fieldName}
          value={radioValue}
          onChange={(event) => {
            if (onRadioChange) {
              onRadioChange();
            }
            return onChange(event);
          }}
        />
      );
    default:
      return null;
  }
};