import { Header, Icon } from 'semantic-ui-react';
import HeaderComponentContainer from './header.styles';
import { Link } from 'react-router-dom';

const HeaderComponent = () => (
    <HeaderComponentContainer>
        <Link to='/'>
            <Header as='h1' inverted>

                <Icon name='tasks'/>
                <Header.Content>
                    Todo App
                    <Header.Subheader>Make your life organized</Header.Subheader>
                </Header.Content>
            </Header>
        </Link>
    </HeaderComponentContainer>
)

export default HeaderComponent;