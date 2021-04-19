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
        <Input icon='add' iconPosition='left' placeholder='Add todos...' onChange={handleInputChange} value={inputValue} required />
        <Button color="blue">Add</Button>
    </AddTodoFormContainer>)
};

export default AddTodoForm;