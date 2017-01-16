import React, {Component} from 'react';
import VideoItem from './videoItem';

class VideoList extends Component {
    render(){
        const items = this.props.videos.map((video) => {
            return (
                <VideoItem 
                onSelectedVideo={this.props.onSelectedVideo}
                key={video.etag}  
                video={video}/>);
        });
        return(
            <ul className='col-md-4 list-group'>
                {items}
            </ul>
        )
    }
}

export default VideoList;