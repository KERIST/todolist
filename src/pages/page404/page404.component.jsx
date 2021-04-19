import { Icon, Header } from 'semantic-ui-react';
import styled from 'styled-components';

const Page404Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10rem;
`;

const Page404Text = styled.p`
    font-weight: 500;
`;

const Page404 = () => (
    <Page404Container>
        <Header as='h2' icon textAlign='center'>
            <Icon name="question circle outline" size="massive"></Icon>
            <Page404Text>404 page is not found</Page404Text>
        </Header>
    </Page404Container>
)

export default Page404;