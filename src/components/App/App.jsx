import React from 'react';
import axios from 'axios';
import './App.css';
import { Container, Card} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Menu from '../../containers/Menu'
import BookCard from '../../containers/BookCard'
import Filter from '../../containers/Filter'


class App extends React.Component {
  componentDidMount(){
    const {setBooks} = this.props;
    axios.get('/books.json').then(({data}) => {
      setBooks(data)
    })
  }
  render(){
    const {books, isReady, setFilter, filterBy} = this.props
    return (
      <Container>
        <Menu />
        <Filter setFilter = {setFilter} filterBy = {filterBy}/>
        <Card.Group itemsPerRow={4}>
          {
            !isReady
              ? 'Loading...'
              : books.map((book, index) => (
                <BookCard key={index} {...book}/>
              ))
          }
        </Card.Group>
      </Container>
    );
  }
}

export default  App;
