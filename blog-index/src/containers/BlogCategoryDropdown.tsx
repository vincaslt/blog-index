import * as React from 'react'
import { connect } from 'react-redux'
import { Select, DropdownProps } from 'semantic-ui-react'
import { actions, selectors, models as m } from '../modules/categories'
import { FormSelect } from '../components/FormControls/FormSelect'
import { State as ReduxState } from '../modules'

type OwnProps = {
  clearable?: boolean
} & DropdownProps

interface StateProps {
  options: m.Category[],
  formElement?: boolean,
  allLoaded?: boolean
}

interface DispatchProps {
  requestCategories: typeof actions.requestCategories
}

type Props = OwnProps & StateProps & DispatchProps

class BlogCategoryDropdown extends React.Component<Props> {
  componentDidMount() {
    if (!this.props.allLoaded) {
      this.props.requestCategories()
    }
  }

  render() {
    const { options, requestCategories, formElement, clearable, allLoaded, ...rest } = this.props
    const FormComponent = formElement ? FormSelect : Select
    const initialOptions = this.props.clearable ? [{ key: '', text: 'None' }] : []
    const opts = [...initialOptions, ...options.map((opt) => ({
      key: opt.id,
      text: opt.name,
      value: opt.id
    }))]

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

const mapStateToProps = (state: ReduxState): StateProps => {
  return {
    options: selectors.categoriesSelector(state),
    allLoaded: selectors.allCategoriesLoadedSelector(state)
  }
}

const mapDispatchToProps = {
  requestCategories: actions.requestCategories
}

const ConnectedBlogCategoryDropdown = connect<StateProps, DispatchProps, OwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(BlogCategoryDropdown)

export { ConnectedBlogCategoryDropdown as BlogCategoryDropdown }