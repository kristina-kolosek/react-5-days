import React, { Component } from 'react';
import ListComponent from '../ListComponent/ListComponent';
import SearchComponent from '../SearchComponent/SearchComponent';

const notes = [
  {
    title: 'Note one',
    body: 'This is the note one.',
    id: '1'
  },
  {
    title: 'Note two',
    body: 'This is the note two.',
    id: '2'
  },
  {
    title: 'Burek',
    body: 'This is the note three.',
    id: '3'
  },
];

class NotesComponent extends Component {
  state = {
    query: ''
  }

  handleInputChange = (e) => {
    this.setState({
      query: e.target.value.toLowerCase()
    });
  }

  isFiltered = (item) => {
    return item.title.toLowerCase().includes(this.state.query) ||
           item.body.toLowerCase().includes(this.state.query)
  }

  renderNotes = () => {
    return notes.map((item, index) => {
      if(this.isFiltered(item)) {
        return (
          <ListComponent
            key={item.id}
            item={item}
          />
      )} else {
        return false;
      }
    });
  }

  render() {
    return (
      <div>
        <SearchComponent
          placeholder="Search for..."
          
          handleChange={this.handleInputChange}
        />
      {
        this.renderNotes()
      }
      </div>
    );
  }
}

export default NotesComponent;
