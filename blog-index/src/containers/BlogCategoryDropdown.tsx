import * as React from 'react'
import { connect } from 'react-redux'
import { FormSelect } from '../components/FormControls/FormSelect'
import { State as ReduxState } from '../modules/blogs/index'

export interface Props {
  options?: {
    key: string
    text: string
    value: number|string
  }[]
}

const BlogCategoryDropdown = ({ options, ...rest }: Props) => (
  <FormSelect
    name="category"
    label="Category"
    required
    loading={!options}
    options={options}
    placeholder="Category"
    {...rest}
  />
)

// TODO: load categories
const mapStateToProps = (state: ReduxState) => ({
  options: [{
    text: 'Travel',
    key: 'travel',
    value: 1
  }]
})

const ConnectedBlogCategoryDropdown = connect(mapStateToProps)(BlogCategoryDropdown)

export { ConnectedBlogCategoryDropdown as BlogCategoryDropdown }