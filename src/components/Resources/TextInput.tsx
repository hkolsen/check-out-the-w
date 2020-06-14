import React, { useState } from 'react';
import { useHandler } from '@bumped-inc/hooks';
import { styled } from '~/styled';

const FormFieldWrapper = styled.fieldset`
  align-items: flex-start;
  border: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 17em;
  padding: 0;
  position: relative;
  width: 100%;
`;

const FormLabel = styled.label<{ visible: boolean }>`
  align-items: center;
  color: ${({ theme }) => theme.colors.BASE};
  display: flex;
  flex-direction: row;
  font-size: 1em;
  font-weight: ${({ theme }) => theme.weights.REGULAR};
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  transition: 0.3s all;
`;

const FormInput = styled.input<{
  inputError: boolean;
  light: boolean;
  visible: boolean;
}>`
  background: transparent;
  border: ${({ visible, theme, light }) =>
    `2px solid ${
      visible || light ? theme.colors.ACCENT : theme.colors.BASE
    }`};
  color: ${({ light, theme }) =>
    light ? theme.colors.BASE : theme.colors.BASE};
  font-family: 'Work Sans', sans-serif;
  font-size: 1.25em;
  font-weight: ${({ theme }) => theme.weights.REGULAR};
  line-height: 1.5;
  margin: 0.25em 0 0;
  padding: 0.25em;
  width: 95%;
  transition: 0.3s all;
  ::placeholder {
    color: ${({ theme }) => theme.colors.BASE};
    font-weight: ${({ theme }) => theme.weights.LIGHT};
  }
  :hover {
    background: ${({ light, theme }) =>
      light ? theme.colors.WHITE : theme.colors.LIGHT_BG};
  }
  :focus {
    background: ${({ light, theme }) =>
      light ? theme.colors.WHITE : theme.colors.LIGHT_BG};
      border: ${({ theme }) => `2px solid ${theme.colors.ACCENT}`};
  }
  :focus:invalid {
  }
`;

export interface TextInputProps {
  name: string;
  label: React.ReactElement<any>;
  inputRef:
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null
    | undefined;
  initialValue?: string;
  onChangeText?: (text: string) => void;
  onFocus?: () => void;
  focused?: boolean;
  onBlur?: () => void;
  isValid?: boolean;
  light: boolean;
  type?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  name,
  light,
  label,
  onChangeText,
  onBlur,
  onFocus,
  focused,
  isValid,
  inputRef,
  initialValue,
  type,
}) => {
  const [value, setValue] = useState(initialValue || '');

  const handleChangeText = useHandler(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value || '';
      if (onChangeText) {
        onChangeText(newValue);
      }
      setValue(newValue);
    },
  );

  return (
    <FormFieldWrapper>
      <FormLabel htmlFor={name} light={light} visible={!!focused}>
        {label}
      </FormLabel>
      <FormInput
        name={name}
        light={light}
        ref={inputRef}
        onChange={handleChangeText}
        value={value}
        onBlur={onBlur}
        onFocus={onFocus}
        type={type}
        visible={!!focused}
        inputError={!isValid}
      />
    </FormFieldWrapper>
  );
};