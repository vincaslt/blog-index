import * as React from 'react'
import { connect } from 'react-redux'
import { Select, DropdownProps } from 'semantic-ui-react'
import { actions, selectors, models as m } from '../modules/categories'
import { FormSelect } from '../components/FormControls/FormSelect'
import { State as ReduxState } from '../modules'

interface StateProps {
  options: m.Category[],
  formElement?: boolean,
}

interface DispatchProps {
  requestCategories: typeof actions.requestCategories
}

type Props = DropdownProps & StateProps & DispatchProps

class BlogCategoryDropdown extends React.Component<Props> {
  componentDidMount() {
    this.props.requestCategories()
  }

  render() {
    const { options, requestCategories, formElement, ...rest } = this.props
    const FormComponent = formElement ? FormSelect : Select
    const opts = options.map((opt) => ({
      key: opt.id,
      text: opt.name,
      value: opt.id
    }))

    return (
      <FormComponent
        label="Category"
        placeholder="Category"
        loading={opts.length === 0}
        options={opts}
        {...rest}
      />
    )
  }
} 

const mapStateToProps = (state: ReduxState) => ({
  options: selectors.categoriesSelector(state)
})

const mapDispatchToProps = {
  requestCategories: actions.requestCategories
}

const ConnectedBlogCategoryDropdown = connect(mapStateToProps, mapDispatchToProps)(BlogCategoryDropdown)

export { ConnectedBlogCategoryDropdown as BlogCategoryDropdown }