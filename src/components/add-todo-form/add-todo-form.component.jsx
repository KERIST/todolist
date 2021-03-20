import { useState } from 'react';
import { Button, Input } from 'semantic-ui-react'
import styled from 'styled-components';

const AddTodoFormContainer = styled.form`
    display: flex;
    justify-content: center;
`;

const AddTodoForm = ({ addItem }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    return (<AddTodoFormContainer onSubmit={(e) => {e.preventDefault(); addItem(inputValue); setInputValue('');}}>
        <Input icon='add' iconPosition='left' placeholder='Search users...' onChange={handleInputChange} value={inputValue} />
        <Button>Add</Button>
    </AddTodoFormContainer>)
};

export default AddTodoForm;