import React, { Component } from 'react';
import '../style/App.css';
import SearchBar from "./search_bar";
import YTSearch from "youtube-api-search"

const API_KEY = 'AIzaSyA9meEUfC1qWzdTKI1ceBbYuiOcJ-peRZw';
class App extends Component {

    state = {
        videos: [],
        selectedVideo : ''
    }

    handleChange = (searchTerm) => {
        YTSearch({key: API_KEY, term: searchTerm}, (videos) => {
            console.log(videos)
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
       return ( <div className="App">
            <h1>Youtube-App</h1>
            <SearchBar handleOnChange={searchTerm => this.handleChange(searchTerm)}/>
        </div>
       )
    };
}

export default App;
