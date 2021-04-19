import styled from 'styled-components';
import { Button, Icon, Label } from 'semantic-ui-react';


const SaveFormContainer = styled.form`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    padding: 2rem;
    align-items: center;
    font-size: 32px;
    button {
        margin-top: 1rem !important; 
    }
`;

const SaveForm = ({ saveTodos, savedLink }) => {
    return (
        <SaveFormContainer onSubmit={saveTodos}>
            <Label size="big">
                <Icon name='linkify' title='copy link' /> <a href={`/todos/${savedLink}`}>{savedLink}</a>
            </Label>
            <Button basic color='green'>Save Todos</Button>
        </SaveFormContainer>
        );
};

export default SaveForm;