/*
 *   Import libraries
 *
 * */
import React, { Component } from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props) => {

    var videoItems =  props.video.map( (singleVideo) => {
        return <VideoListItem video={ singleVideo } key={ singleVideo.etag } />
    });

    return (
        <ul className="col-md-4 list-group media-list">
            { videoItems  }
        </ul>
    )
};

export default VideoList;