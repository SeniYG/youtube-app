import React from 'react';

const VideoItem = (props) => {
    const video = props.video;
    const onSelectedVideo = props.onSelectedVideo;
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <div className = 'item' onClick={ () => onSelectedVideo(video)}>
            <img className = 'ui image' src = {imageUrl} />
                <div className = 'content' >
                    <div className = 'header' >{video.snippet.title}</div>
                    </div>
        </div>
    )
};

export default VideoItem;