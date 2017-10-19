import * as React from 'react'
import { Form, FormFieldProps } from 'semantic-ui-react'
import { WrappedFieldProps } from 'redux-form'

type Props = WrappedFieldProps<{}> & FormFieldProps

const FormFile = ({ onChange, input, control, controlProps, ...rest }: Props) => {
  const Control = control
  return input ? (
    <Form.Field
      name={input.name}
      value={input.value}
      onFocus={input.onFocus}
      control={() => <Control onChange={input.onChange} {...controlProps} />}
      {...rest}
    />
  ) : null
}

export { FormFile }