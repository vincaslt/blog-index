import * as React from 'react'
import { Form } from 'semantic-ui-react'

// TODO icons
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

const AddBlogPage = () => (
  <div>
    <Form>
      <Form.Group widths="equal">
        <Form.Input label="Title" placeholder="Title" />
        <Form.Select label="Category" options={options} placeholder="Category" />
        <Form.Input type="file" label="Image" />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input label="Link" placeholder="http://..." icon="linkify" iconPosition="left" />
        <Form.Dropdown label="Tags" placeholder="Tags" fluid multiple search selection options={tagOptions} />
      </Form.Group>
      <Form.Input label="Tagline" maxLength={115} placeholder="Short Description" icon="pencil" iconPosition="left" />
      <Form.TextArea label="Description" placeholder="What is the blog about?" />
      <Form.Button primary>Submit</Form.Button>
    </Form>
  </div>
)

export { AddBlogPage }