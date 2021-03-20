import { useState } from 'react';
import styled from 'styled-components';

import { Input } from 'semantic-ui-react';

const TodoSearchContainer = styled.div`
    display: flex;
    justify-content: center;
`

const TodoSearch = ({ setFilter }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        setFilter(event.target.value);
    }

    return (<TodoSearchContainer>
        <Input placeholder="Search..." value={inputValue} onChange={handleInputChange} />
    </TodoSearchContainer>)
}

export default TodoSearch;