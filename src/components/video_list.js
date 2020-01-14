import React from 'react';
import VideoItem from './video_item';

const VideoList = (props) => {
    const videoItems = props.videos.map( video => {
        console.log(video.etag)
        return (
            <VideoItem key={video.etag} video={video} onSelectedVideo={props.onVideoSelect} />
        );
        });
    return <div className='ui animated selection relaxed divided list'>{videoItems}</div>
};

export default VideoList;

