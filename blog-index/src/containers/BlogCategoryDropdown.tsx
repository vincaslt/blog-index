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
    label="Category"
    placeholder="Category"
    loading={!options}
    options={options}
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

const ConnectedBlogCategoryDropdown = connect(mapStateToProps, {})(BlogCategoryDropdown)

export { ConnectedBlogCategoryDropdown as BlogCategoryDropdown }