import React, {Component} from 'react';
import VideoDetail from './videoDetail'

class VideoItem extends Component{

    render(){
        const imgUrl = this.props.video.snippet.thumbnails.default.url;
        const videoTitle = this.props.video.snippet.title;
        return(
            <li onClick={(event) => {this.props.onSelectedVideo(this.props.video)}} className='list-group-item'>
                <div className="video-list media">
                    <div className="media-left">
                        <a onClick={this.openDetail} href="">
                            <img src={imgUrl} className="media-object" />
                        </a>
                    </div>
                    <div className="media-body">
                        <div className="media-heading">{videoTitle}</div>
                    </div>
                </div>
            </li>
        )
    }
}

export default VideoItem;