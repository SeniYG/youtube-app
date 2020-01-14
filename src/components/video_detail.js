import React from "react";

const VideoDetail = ({video}) => {

    if (!video) {
        return (
            <div className="ui segment">
                <div className="ui active centered inline dimmer">
                    <div className="ui text loader">Loading</div>
                </div>
            </div>
        )
    }
    const urlSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div className='ui embed'>
            <iframe src={urlSrc} allowFullScreen title='Video player'/>
            <div className='ui segment'>
                <h4 className='ui header'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>


    )
}

export default VideoDetail;