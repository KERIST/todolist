import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import TodoSearch from '../todo-search/todo-search.component';
import TodoList from '../todo-list/todo-list.component';
import AddTodoForm from '../add-todo-form/add-todo-form.component';
import SaveForm from '../save-form/save-form.component';

const TodoContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    padding: 1rem;
`;

class Todo extends React.Component {
    constructor(props) {
        super();

        const { items, uid } = props;

        this.state = {items: items ? items : {
            1: {data: 'Example', isDone: false},
        }, filter: '', savedLink: uid ? uid : ''}

        this.changeStatus = this.changeStatus.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteTodoItem = this.deleteTodoItem.bind(this);
        this.setFilter = this.setFilter.bind(this);
        this.saveTodosAsync = this.saveTodosAsync.bind(this);
    }

    changeStatus(id) {
        this.setState(state => {
            let items = state.items;
            return {items: {...items, [id]: {...items[id], isDone: !items[id].isDone}}}
        })
        
    }

    componentDidUpdate() {
        localStorage.setItem('items', JSON.stringify(this.state.items));
        localStorage.setItem('uid', JSON.stringify(this.state.savedLink));
    }
    
    componentDidMount() {
        let savedItems = localStorage.getItem('items');
        let savedItemsUid = localStorage.getItem('uid');
        if(savedItems && savedItemsUid) {
            this.setState({items: JSON.parse(savedItems), savedLink: JSON.parse(savedItemsUid)});
        } else if(savedItems) {
            this.setState({items: JSON.parse(savedItems)});
        } else if(savedItemsUid) {
            this.setState({savedLink: JSON.parse(savedItemsUid)});
        }
    }

    addItem(data) {
        let newItemId = uuidv4();
        let newItem = {data, isDone: false};
        this.setState(state => {
            return {items: {...state.items, [newItemId]: newItem}};
        })
    }

    setFilter(text) {
        this.setState({filter: text});
    }

    deleteTodoItem(id) {
        this.setState(state => {
            let items = state.items;
            delete items[id];
            return {items};
        })
    }

    saveTodosAsync(e) {
        e.preventDefault();

        if(this.state.savedLink) {
            fetch('/api/todos/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({items: this.state.items, uid: this.state.savedLink})
            }).then(response => {
                if(response.status === 200) {
                    console.log('saved');
                }
            })
        } else {
            fetch('/api/todos/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({items: this.state.items})
            }).then(response => response.json())
            .then(response => this.setState({savedLink: response.uid}));
        }
        
    }

    render() {
        const { items, filter, savedLink } = this.state;

        return (
            <TodoContainer>
                <TodoSearch setFilter={this.setFilter} />
                <TodoList changeStatus={this.changeStatus} items={items} deleteTodoItem={this.deleteTodoItem} filter={filter}/>
                <AddTodoForm addItem={this.addItem} />
                <SaveForm saveTodos={this.saveTodosAsync} savedLink={savedLink}/>
            </TodoContainer>
        );
    }
} 

export default Todo;