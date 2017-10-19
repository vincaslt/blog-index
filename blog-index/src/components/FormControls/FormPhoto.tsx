import * as React from 'react'
import { Form, FormFieldProps } from 'semantic-ui-react'
import { WrappedFieldProps } from 'redux-form'
import { ImageFile } from '../ImageDropzone'

type Props = WrappedFieldProps<{}> & FormFieldProps

const FormPhoto = ({ input, control, controlProps, ...rest }: Props) => {
  const Control = control
  return input ? (
    <Form.Field
      control={() => <Control
        name={input.name}
        value={input.value}
        onSelect={(file: ImageFile) => input.onChange(file, {}, {})}
        {...controlProps}
      />}
      {...rest}
    />
  ) : null
}

export { FormPhoto }