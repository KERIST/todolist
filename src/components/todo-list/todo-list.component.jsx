import { List, Table } from 'semantic-ui-react';
import styled from 'styled-components';
import TodoListItem from '../todo-list-item/todo-list-item.component';

const TodoListContainer = styled.div`
    padding: 2rem;
    i {
        cursor: pointer;
    }
`

const TodoList = ({items, filter, changeStatus, deleteTodoItem}) => (
    <TodoListContainer>
        <Table celled padded size='large'>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell singleLine>Done</Table.HeaderCell>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Delete</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {Object.entries(items).filter((item) => item[1].data.includes(filter)).map(item => {
                    let id = item[0];
                    let {data, isDone} = item[1];
                    return <TodoListItem key={id} id={id} data={data} isDone={isDone} deleteTodoItem={deleteTodoItem} changeStatus={changeStatus} />
                })}
            </Table.Body>
        </Table>
    </TodoListContainer>
);

export default TodoList;