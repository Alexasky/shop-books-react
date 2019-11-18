import React from 'react'
import { Menu, Input } from 'semantic-ui-react'

const Filter = ({setFilter, filterBy, searchQuery, setSearchQuery}) => {

  return(
    <Menu secondary>
      <Menu.Item
        active={filterBy === 'all'}
        onClick={setFilter.bind(this, 'all')}
      >All</Menu.Item>
      <Menu.Item
        active={filterBy === 'price_high'}
        onClick={setFilter.bind(this, 'price_high')}
      >Price High</Menu.Item>
      <Menu.Item
        active={filterBy === 'price_low'}
        onClick={setFilter.bind(this, 'price_low')}
      >Price Low</Menu.Item>
      <Menu.Item
        active={filterBy === 'author'}
        onClick={setFilter.bind(this, 'author')}
      >Author</Menu.Item>
      <Input icon='search' value={searchQuery} placeholder='type your book...' onChange={e => setSearchQuery(e.target.value)} />
    </Menu>
  )
}

export default Filter
