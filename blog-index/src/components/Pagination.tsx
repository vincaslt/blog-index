import * as React from 'react'
import { Menu } from 'semantic-ui-react'

interface Props {
  pages: number
  onSelect: (page: number) => any // page starting from 0
  activePage: number
}

class Pagination extends React.Component<Props> {
  handleSelect = (page: number) => () => this.props.onSelect(page)

  renderPagination = () => {
    const shownPages = 3

    const generateAround = (from: number, to: number) => (
      to >= from ?
        Array(Math.min(to, this.props.pages) - Math.max(0, from) + 1).fill(1).map((el, i) => {
          const page = from + i
          return (
            <Menu.Item
              onClick={this.handleSelect(page)}
              name={`${page}`}
              key={page}
              active={page === this.props.activePage}
            />
          )
        }) : []
    )

    return [
      ...generateAround(1, shownPages),
      this.props.activePage > shownPages + 2
        ? <Menu.Item key="fill_before" disabled>...</Menu.Item>
        : null,
      ...generateAround(
        Math.max(shownPages + 1, this.props.activePage - 1),
        Math.min(this.props.pages - shownPages, this.props.activePage + 1)
      ),
      this.props.activePage < this.props.pages - shownPages - 1
        ? <Menu.Item key="fill_after" disabled>...</Menu.Item>
        : null,
      ...generateAround(Math.max(this.props.pages - shownPages + 1, shownPages + 1), this.props.pages)
    ]
  }

  render() {
    return (
      <Menu attached pagination>
        {this.renderPagination()}
      </Menu>
    )
  }
}

export { Pagination }