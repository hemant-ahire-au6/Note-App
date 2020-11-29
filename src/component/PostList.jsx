import React from 'react';
import { connect } from 'react-redux';
import { todoAction } from '../redux/action';

const TodoList = (props) => {
    const { todos, dispatch } = props;

    const deleteTodo = (id) => {
        dispatch(todoAction.delete(id))
    }
    return (
        <div>
            <div className= "row">
                {
                    todos.map((todo, idx) => {
                        return (<>

                            <div className="card">
                                <div className="card-header">
                                    Note
                                </div>
                              
                                <div className="card-body">
                                    <h5 onClick={() => deleteTodo(todo.id)} key={idx}>
                                        {todo.title}></h5>
                                        <br/>
                                    <p className="card-text">{todo.body}</p>
                                    <button  className="btn btn-primary" onClick={() => deleteTodo(todo.id)}>Delete</button>
                                    <button  className="btn btn-primary" onClick={() => deleteTodo(todo.id)}>Delete</button>
                                </div>
                            </div>


                        </>
                        );
                    })
                }
           </div> 
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    }
}

export default connect(mapStateToProps)(TodoList);