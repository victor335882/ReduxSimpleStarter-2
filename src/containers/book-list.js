import React,{Component} from 'react';

//react and redux are total differnt library
//to form a connention betweem redux, our application state that holds all of our data
//and our actual react components
//we need to use a separate library 'react-redux'
import {connect} from 'react-redux';

//container is just a component that has direct access to the
//state that's produced by redux

//to forge a connection between a component and redux
//and turn component into container or something con represent a smart component
//we are not to export the class as default
class BookList extends Component {
  renderList() {
    {
      //this.props is the return from function mapStateToProps(state)
    }
    return this.props.books.map((book) => {
      return (
        <li key = {book.title} className = "list-group-item">{book.title}</li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

//and use this function to take our application state,book, as an argument
//this function is a glue between react and redux
//whenever the application state change, this conpoment will instantly render
function mapStateToProps(state) {
  //Whatever is returned will show up as props
  //inside of our react component,BookList.
  return {
    books:state.books
  };
}

//the connect will take this mapStateToProps and return a container
//that's why we delete export default before
//before we want to export this container
//whenever we re-render the mapStateToPoros conpoment
//the props will instantly push into react component,BookList.
export default connect(mapStateToProps)(BookList);
