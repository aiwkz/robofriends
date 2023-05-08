import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import '../containers/App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchValue: '',
        } 
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }

    onSearchValueChange = (event) => {
        this.setState({ searchValue: event.target.value })
    }

    render () {
        const { robots, searchValue } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
            }
        );

        return (
            <div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                <SearchBox searchValueChange={this.onSearchValueChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
    }
}

export default App;
