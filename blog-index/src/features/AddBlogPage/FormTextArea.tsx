import * as React from 'react'
import { Form, FormTextAreaProps } from 'semantic-ui-react'
import { WrappedFieldProps } from 'redux-form'

type Props = WrappedFieldProps<{}> & FormTextAreaProps

const FormTextArea = ({ onChange, input, ...rest }: Props) => (
  input ? (
    <Form.TextArea
      name={input.name}
      value={input.value}
      onChange={(e, { value }) => { input.onChange(value, '', '') }}
      onFocus={input.onFocus}
      {...rest}
    />
  ) : null
)

export { FormTextArea }