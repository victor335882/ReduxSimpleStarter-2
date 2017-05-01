import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    {
      //Due to our default state is null in reducer_active_book.js
      //we need to add a statement to prevent the following error
      //bundle.js:22004 Uncaught TypeError: Cannot read property 'title' of null
    }
    if(!this.props.book) {
      return <div>Select a book to get started</div>
    }
    return(
      <div>
        <h3>Detail for:</h3>
        <div>{this.props.book.title}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
