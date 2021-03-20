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

`;

class Todo extends React.Component {
    constructor() {
        super();

        this.state = {items: {
            1: {data: 'Хлеб', isDone: true},
            2: {data: 'Молоко', isDone: false},
            3: {data: 'Сделать дз', isDone: true},
            4: {data: 'Пойти на улицу', isDone: false},
            5: {data: 'Сходить в боссейн', isDone: false},
        }, filter: ''}
        this.changeStatus = this.changeStatus.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteTodoItem = this.deleteTodoItem.bind(this);
        this.setFilter = this.setFilter.bind(this);
    }

    changeStatus(id) {
        console.log(id);
        this.setState(state => {
            let items = state.items;
            return {items: {...items, [id]: {...items[id], isDone: !items[id].isDone}}}
        })
        
    }

    componentDidUpdate() {
        localStorage.setItem('items', JSON.stringify(this.state.items));
    }
    
    componentDidMount() {
        let savedItems = localStorage.getItem('items');
        if(savedItems) {
            this.setState({items: JSON.parse(savedItems)});
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

    saveTodosAsync(callback) {
        // TODO: implement fetch request
    }

    render() {
        const { items, filter } = this.state;

        return (
            <TodoContainer>
                <TodoSearch setFilter={this.setFilter} />
                <TodoList changeStatus={this.changeStatus} items={items} deleteTodoItem={this.deleteTodoItem} filter={filter}/>
                <AddTodoForm addItem={this.addItem} />
                <SaveForm />
            </TodoContainer>
        );
    }
} 

export default Todo;