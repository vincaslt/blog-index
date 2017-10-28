import * as React from 'react'
import styled from 'styled-components'
import { Form } from 'semantic-ui-react'
import { Field, reduxForm, FormProps } from 'redux-form'
import { connect } from 'react-redux'
import { models as m, actions } from '../../modules/addBlogForm'
import { ImageDropzone } from '../../components/ImageDropzone'
import { FormDropdown } from '../../components/FormControls/FormDropdown'
import { FormTextArea } from '../../components/FormControls/FormTextArea'
import { FormPhoto } from '../../components/FormControls/FormPhoto'
import { BlogCategoryDropdown } from '../../containers/BlogCategoryDropdown'

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

type Props = {
  submit: typeof actions.submit
} & FormProps<m.FormModel, {}, {}>

class AddBlogPage extends React.Component<Props, {}> {
  onSubmit = (data: m.FormModel) => {
    this.props.submit(data)
  }

  render() {
    if (!this.props.handleSubmit) {
      return 'No handler present'
    }

    return (
      <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
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
              <Field name="categoryId" required component={BlogCategoryDropdown} />
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

const mapDispatchToProps = {
  submit: actions.submit
}

// TODO: separate form component and partials
const ConnectedAddBlogPage = reduxForm({
  form: 'addBlog',
  initialValues: {
    tags: []
  } as Partial<m.FormModel>
})(connect(null, mapDispatchToProps)(AddBlogPage))

export { ConnectedAddBlogPage as AddBlogPage }