import { useState } from 'react';
import styled from 'styled-components';
import { Button, Icon, Label } from 'semantic-ui-react';


const SaveFormContainer = styled.form`
    display: flex;
    justify-content: center;
    padding: 2rem;
    align-items: center;
    font-size: 32px;
`;

const SaveForm = () => {
    const [savedLink, setSavedLink] = useState('');

    return (
        <SaveFormContainer>
            <Label size="big">
                <Icon name='linkify' /> <a href={`http://todo.kerist.org/todos/`}>http://todo.kerist.org/todos/</a>
            </Label>
            <Button basic color='green'>Save Todos</Button>
        </SaveFormContainer>
        );
    };
export default SaveForm;