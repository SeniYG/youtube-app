import React from 'react';

const VideoItem = (props) => {
    const video = props.video;
    const onSelectedVideo = props.onSelectedVideo;
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <div className = 'item' onClick={ () => onSelectedVideo(video)}>
            <div className='ui tiny image'>
            <img className = 'ui small image' src = {imageUrl} />
            </div>
                <div className = 'align content' >
                    <a className = 'header' >{video.snippet.title}</a>
                    </div>
        </div>
    )
};

export default VideoItem;