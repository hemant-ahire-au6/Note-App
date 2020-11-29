import React from "react";
import { connect } from 'react-redux';
import { todoAction } from '../redux/action';
import '../index.css';

class BlogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
  }

  myTitleChangeHandler = (event) => {
    this.setState({ title: event.target.value });
  };

  myBodyChangeHandler = (event) => {
    this.setState({ body: event.target.value });
  };

  mySubmitHandler = (e) => {
    e.preventDefault();
    this.props.createTodo([this.state.title, this.state.body]);
    this.setState({title:'', body:''});
  };

  handleUpdate = (event) => {
    event.preventDefault();
    this.props.createTodo(this.state.title);
    this.setState({ title: event.target.value, body: event.target.value });
    alert(this.state.title + " is updated!");
  };

  render() {
    return (
      <div className = "container">
        <form onSubmit={this.mySubmitHandler} className="was-validated">
          <div className="form-group">
            <label for="uname">Title:</label>
            <input
              onChange={this.myTitleChangeHandler}
              type="text"
              className="form-control"
              id="uname"
              placeholder="Title of Blog"
              name="title"
              required
            />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
          <div className="form-group">
            <label for="pwd">Body:</label>
            <input
              onChange={this.myBodyChangeHandler}
              type="text"
              className="form-control"
              id="pwd"
              placeholder="Body of Blog"
              name="body"
              required
            />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
          <div className="form-group form-check">
            <label className="form-check-label">
              
              I agree on Terms and Conditions.
              <br/>
              <input
                className="form-check-input"
                type="checkbox"
                name="remember"
                required
              />{" "}
              <div className="valid-feedback">Valid.</div>
           <br/>
              
              <div className="invalid-feedback">
                Check this checkbox to continue.
              </div>
              
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        
          <button
            onClick={this.handleUpdate}
            className="btn btn-info"
            value="update"
          >
            Update
          </button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createTodo : ([title, body]) => dispatch(todoAction.create([title, body])),
  }
}
const initRedux = connect(null,mapDispatchToProps);
const PostWrapped = initRedux(BlogForm);

export default PostWrapped;