/*
 *   Import libraries
 *
 * */
import React from 'react';

const VideoListItem = ({video}) => {

    let thumbUrl = video.snippet.thumbnails.high.url;
    let videoId = video.id.videoId;
    let videoTitle = video.snippet.title;

    return (
        <li className="list-group-item media">
            <a className="" target={'_blank'} href={'https://www.youtube.com/watch?v=' + videoId} >
                <div className="media-left">
                    <img className="media-object"  src={thumbUrl} alt="" style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="media-body" style={{ width: '69%', height: 'auto' }} >
                    <h6 className="media-heading">
                        {videoTitle}
                    </h6>
                </div>
            </a>
        </li>
    );
};


export default VideoListItem;