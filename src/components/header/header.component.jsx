import { Header, Icon } from 'semantic-ui-react';
import HeaderComponentContainer from './header.styles';

const HeaderComponent = () => (
    <HeaderComponentContainer>
        <Header as='h2' inverted>
            <Icon name='tasks'/>
            <Header.Content>
                Todo App
                <Header.Subheader>Make your life organized</Header.Subheader>
            </Header.Content>
        </Header>
    </HeaderComponentContainer>
)

export default HeaderComponent;