import React from 'react';
import { Redirect } from 'react-router-dom';

import Todo from '../../components/todo/todo.component';
import LoaderComponent from '../../components/loader/loader.component'

class LoadTodos extends React.Component {
    constructor(props) {
        super();

        this.requestedUid = props.match.params.todoId;

        this.state = {
            isLoading: true,
            isCollectionExist: false, 
            items: ''
        }
    }

    componentDidMount() {
        fetch('/api/todos/get', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({uid: this.requestedUid})
        }).then(response => response.json())
        .then(({ items }) => {
            if(!items) this.setState({isLoading: false});
            this.setState({items: items, isCollectionExist: true, isLoading: false});

        });
    }

    render() {
        const { isLoading, isCollectionExist, items } = this.state;
        return (
            <div style={{height: '100%'}}>
                {isLoading ? <LoaderComponent /> : isCollectionExist ? <Todo items={items} uid={this.requestedUid} /> : <Redirect to='404'/>}
            </div>
            )
    }
}

export default LoadTodos;