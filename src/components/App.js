import React, { Component } from 'react';
import '../style/App.css';
import SearchBar from "./search_bar";

const API_KEY = 'AIzaSyA9meEUfC1qWzdTKI1ceBbYuiOcJ-peRZw';
class App extends Component {
    render() {
       return ( <div className="App">
            <h1>Youtube-App</h1>
            <SearchBar />
        </div>
       )
    };
}

export default App;
