import React from 'react';

const VideoItem = (props) => {
    const video = props.video;
    const onSelectedVideo = props.onSelectedVideo;
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <div className = 'video-item item' onClick={ () => onSelectedVideo(video)}>
            <div className='image'>
            <img src = {imageUrl} alt={video.snippet.description}/>
            </div>
                <div className = 'align content' >
                    <a className = 'header' >{video.snippet.title}</a>
                    </div>
        </div>
    )
};

export default VideoItem;