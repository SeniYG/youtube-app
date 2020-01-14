import React, { Component } from 'react';
import '../style/App.css';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';
import VideoDetail from "./video_detail";

const API_KEY = 'AIzaSyDbCN4BqnWGjtat7xrba2uW-XpG5wnI71Y';
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
            <div className='ui container' style={{marginTop: '1em'}}>
                <h1>Youtube Custom App</h1>
                <SearchBar handleOnChange={searchTerm => this.handleChange(searchTerm)}/>
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='ten wide column'>
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className='six wide column'>
                            <VideoList onVideoSelect= { videoSelect => this.setState({selectedVideo: videoSelect})}
                                       videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default App;
