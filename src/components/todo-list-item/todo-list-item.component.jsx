import { Icon, Table } from 'semantic-ui-react';

const TodoListItem = ({data, isDone, id, changeStatus, deleteTodoItem}) => (
    <Table.Row>
        <Table.Cell>
            <Icon name={isDone ? 'check circle outline' : 'circle outline'} color={isDone ? 'green' : 'red'} size="big" onClick={() => {changeStatus(id)}}/>
        </Table.Cell>
        <Table.Cell singleLine>
            {data}
        </Table.Cell>
        <Table.Cell>
            <Icon name="delete" color="red" size="big" onClick={() => {deleteTodoItem(id); console.log('should delete')}}/>
        </Table.Cell>
    </Table.Row>
)

export default TodoListItem;