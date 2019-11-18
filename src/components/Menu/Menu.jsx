import React from 'react'
import { Menu, List, Button, Image, Popup} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const CardComponent = ({title, id, image, removeFromCart}) => (
  <List selection divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <Button onClick={removeFromCart.bind(this, id)} color='red'>Remove</Button>
      </List.Content>
      <Image avatar src={image} />
      <List.Content>{title}</List.Content>
    </List.Item>
  </List>
);

const MenuComponent = ({totalPrice, count, items}) => (
  <Menu>
      <Menu.Item>Shop Books</Menu.Item>
      <Menu.Menu position='right'>
      <Menu.Item> Total: &nbsp; <b>{totalPrice}</b>&nbsp;$</Menu.Item>
      <Popup
          trigger={
              <Menu.Item> Cart ({count}) </Menu.Item>
          }
          content={items.map((book, i) => <CardComponent key={i} {...book} />)}
          on='click'
          hideOnScroll
      />
      </Menu.Menu>
  </Menu>
)

export default MenuComponent
