import React from 'react';

import { HomePageContainer, HomePageContent } from './homepage.styles';
import Todo from '../../components/todo/todo.component';


class HomePage extends React.Component {
    constructor() {
        super();

        this.state = {}
    }

    render() {
        return (
            <HomePageContainer>
                <HomePageContent>
                    <Todo />
                </HomePageContent>
            </HomePageContainer>
        )
    } 
}

export default HomePage;