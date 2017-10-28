import * as React from 'react'
import { Form, FormSelectProps } from 'semantic-ui-react'

type Props = FormSelectProps

const FormSelect = ({ onChange, input, ...rest }: Props) => (
  input ? (
    <Form.Select
      name={input.name}
      value={input.value}
      onChange={(e, { value }) => { input.onChange(value, '', '') }}
      onFocus={input.onFocus}
      {...rest}
    />
  ) : null
)

export { FormSelect }