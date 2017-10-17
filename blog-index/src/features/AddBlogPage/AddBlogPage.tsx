import * as React from 'react'
import styled from 'styled-components'
import { Form } from 'semantic-ui-react'
import { ImageDropzone } from '../../components/ImageDropzone'

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

const AddBlogPage = () => (
  <div>
    <Form>
      <Form.Group>
        <Form.Field
          label="Photo"
          control={() => <StyledDropzone placeholder="Drop or click" />}
          multiple={false}
        />
        <MainFormContainer>
          <Form.Group widths="equal">
            <Form.Input label="Title" placeholder="Title" />
            <Form.Select label="Category" options={options} placeholder="Category" />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input label="Link" placeholder="http://..." icon="linkify" iconPosition="left" />
            <Form.Dropdown label="Tags" placeholder="Tags" fluid multiple search selection options={tagOptions} />
          </Form.Group>
          <Form.Input
            label="Tagline"
            maxLength={115}
            placeholder="Short Description"
            icon="pencil"
            iconPosition="left"
          />
        </MainFormContainer>
      </Form.Group>
      <Form.TextArea label="Description" placeholder="What is the blog about?" />
      <Form.Button primary>Submit</Form.Button>
    </Form>
  </div>
)

export { AddBlogPage }