import * as React from 'react'
import styled from 'styled-components'
import { Form } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'
import { ImageDropzone } from '../../components/ImageDropzone'
import { FormDropdown } from '../../components/FormControls/FormDropdown'
import { FormTextArea } from '../../components/FormControls/FormTextArea'
import { FormSelect } from '../../components/FormControls/FormSelect'
import { FormPhoto } from '../../components/FormControls/FormPhoto'

const options = [
  { key: 'ls', text: 'Lifestyle', value: 'lifestyle' },
  { key: 'pg', text: 'Coding', value: 'female' },
  { key: 'tr', text: 'Travel', value: 'female' }
]

const tagOptions = [
  { key: 'pg', text: 'Programming', value: 'programming' },
  { key: 'tt', text: 'Tutorials', value: 'tutorials' },
  { key: 'ma', text: 'Multiple Authors', value: 'multiple' }
]

const StyledDropzone = styled(ImageDropzone)`
  width: 19.2rem;
  height: 13.5rem;
  border: 1px solid rgba(34,36,38,.15);
  border-radius: .28571429rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MainFormContainer = styled.div`
  width: 100%;
  padding: 0 0.5rem;
`

class AddBlogPage extends React.Component {
  render() {
    return (
      <Form>
        <Form.Group>
          <Field
            name="photo"
            component={FormPhoto}
            control={StyledDropzone}
            controlProps={{ placeholder: 'Drop or click' }}
            label="Photo"
            required
            multiple={false}
          />
          <MainFormContainer>
            <Form.Group widths="equal">
              <Field component={Form.Input} name="title" label="Title" required placeholder="Title" />
              <Field
                component={FormSelect}
                name="category"
                label="Category"
                required
                options={options}
                placeholder="Category"
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Field
                component={Form.Input}
                name="link"
                label="Link"
                required
                placeholder="http://..."
                icon="linkify"
                iconPosition="left"
              />
              <Field
                component={FormDropdown}
                name="tags"
                label="Tags"
                placeholder="Tags"
                fluid
                multiple
                search
                selection
                options={tagOptions}
              />
            </Form.Group>
            <Field
              component={Form.Input}
              name="tagline"
              label="Tagline"
              maxLength={115}
              placeholder="Short Description"
              icon="pencil"
              iconPosition="left"
            />
          </MainFormContainer>
        </Form.Group>
        <Field
          component={FormTextArea}
          name="description"
          required
          label="Description"
          placeholder="What is the blog about?"
        />
        <Form.Button labelPosition="left" icon="checkmark" primary content="Submit" />
      </Form>
    )
  }
}

// TODO: separate form component and partials
const ConnectedAddBlogPage = reduxForm({
  form: 'addBlog'
})(AddBlogPage)

export { ConnectedAddBlogPage as AddBlogPage }