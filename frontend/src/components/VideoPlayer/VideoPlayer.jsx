const VideoPlayer = (props) => {
    const srrc=`https://www.youtube.com/embed/${props.videoId}`

    return ( 
        <div>
             <iframe id="ytplayer" type="text/html" width="640" height="360"
    src={srrc}
    frameborder="0"></iframe>
        </div>
     );
}
 
export default VideoPlayer;