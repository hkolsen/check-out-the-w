import qs from 'qs';
import React, { createContext, useContext, useReducer } from 'react';
import { useAsyncHandler, useHandler, useObjectMemo } from '~/utils';

export interface FormState {
  submitName: string;
  title: string;
  category: string;
  categoryOther: string;
  message: string;
}
const INITIAL_STATE: FormState = {
  submitName: '',
  title: '',
  category: '',
  categoryOther: '',
  message: '',
};

interface FormContext {
  state: FormState;
  isLoading: boolean;
  dispatch: React.Dispatch<FormAction>;
}
const FormContext = createContext<FormContext>({
  state: INITIAL_STATE,
  isLoading: false,
  dispatch: () => {
    throw new Error('Cannot dispatch outside of FormContext');
  },
});
export function useForm() {
  return useContext(FormContext);
}

export enum FormActionType {
  ChangeValue,
  Submit,
}
interface ChangeValueFormAction {
  type: FormActionType.ChangeValue;
  key: keyof FormState;
  value: string;
}
interface SubmitFormAction {
  type: FormActionType.Submit;
}
type FormAction = ChangeValueFormAction | SubmitFormAction;
function reducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case FormActionType.ChangeValue:
      return {
        ...state,
        [action.key]: action.value,
      };
    case FormActionType.Submit:
      return state;
  }
}

export const ResourceFormManager: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    ...INITIAL_STATE,
  });
  const [run, { loading }] = useAsyncHandler(() => async () => {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: qs.stringify({
        'form-name': 'Resources',
        ...state,
      }),
    });
  });
  const customDispatch = useHandler((action: FormAction) => {
    switch (action.type) {
      case FormActionType.Submit:
        run();
        break;
      default:
        dispatch(action);
        break;
    }
  });
  const context = useObjectMemo({
    state,
    isLoading: loading,
    dispatch: customDispatch,
  });
  return (
    <FormContext.Provider value={context}>{children}</FormContext.Provider>
  );
};