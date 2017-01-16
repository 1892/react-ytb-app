import React, {Component} from 'react';

class VideoDetail extends Component{
    render(){
        const video = this.props.video;
        if (!video){
            return <div>Loading...</div>;
        }
        const videoTitle = video.snippet.title;
        const videoDesc = video.snippet.description
        const videoID = video.id.videoId;
        const url = `https://youtube.com/embed/${videoID}`;

        return(
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={url}>

                    </iframe>
                </div>
                <div className="details">
                    <div>{videoTitle}</div>
                    <div>{videoDesc}</div>
                </div>
            </div>
        );
    }
}

export default VideoDetail;