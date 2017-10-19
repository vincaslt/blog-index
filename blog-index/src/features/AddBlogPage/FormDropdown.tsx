import * as React from 'react'
import { Form, FormDropdownProps } from 'semantic-ui-react'
import { WrappedFieldProps } from 'redux-form'

type Props = WrappedFieldProps<{}> & FormDropdownProps

const FormDropdown = ({ onChange, input, ...rest }: Props) => (
  input ? (
    <Form.Dropdown
      name={input.name}
      value={input.value}
      onChange={(e, { value }) => { input.onChange(value, '', '') }}
      onFocus={input.onFocus}
      {...rest}
    />
  ) : null
)

export { FormDropdown }