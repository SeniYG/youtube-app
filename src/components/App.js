import React, { Component } from 'react';
import '../style/App.css';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';

const API_KEY = 'AIzaSyA9meEUfC1qWzdTKI1ceBbYuiOcJ-peRZw';
class App extends Component {

    state = {
        videos: [],
        selectedVideo : null
    }

    handleChange(searchTerm) {
        YTSearch({key: API_KEY, term: searchTerm}, (videos) => {
            console.log(videos)
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
       return (
           <div className='ui container'>
            <h1>Youtube-App</h1>
            <SearchBar handleOnChange={searchTerm => this.handleChange(searchTerm)}/>
            <div className='ui grid'>
                <div className='six wide column'>
            <VideoList onVideoSelect= { videoSelect => this.setState({selectedVideo: videoSelect})}
           videos={this.state.videos}/>
                </div>
            </div>
        </div>
       )
    };
}

export default App;
