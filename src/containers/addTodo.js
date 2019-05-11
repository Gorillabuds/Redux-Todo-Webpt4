import React, {Component} from "react";
import {connect} from 'react-redux';
import {addTodo,completeTodo} from '../actions';

class AddTodo extends Component{
    state={
        currentItem:''
    };
    handleChange=event=>{
        this.setState({currentItem:event.target.value});
        console.log(this.state.currentItem);
    };
    submit =event=>{
        event.preventDefault();
        this.props.completeTodo(event.target.id);
    };
    toggleComplete=event=>{
        event.preventDefault();
        this.props.completeTodo(event.target.id);
    };
    render(){
        return(
            <div>
                <form>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Add Todo"
                        value={this.state.currentItem}
                    />
                        <button onClick={this.submit}>Add Todo</button>
                </form>
                    <ul>
                        {console.log(this.props.todo,'test')}
                        {this.props.todo.map(item=>{
                            return(
                                <li
                                    onClick={this.toggleComplete}
                                    key={item.id}
                                    id={item.id}
                                    style={item.completed?
                                    {textDecoration:"line-through"}:null
                                    }>
                                        {item.value}
                                    </li>
                            );
                        })}
                    </ul>
            </div>
        );
    }
}
