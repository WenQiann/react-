import React, { Component } from 'react';
import {
    Player,
    ControlBar,
    PlayToggle, // PlayToggle 播放/暂停按钮 若需禁止加 disabled
    ReplayControl, // 后退按钮
    // ForwardControl,  // 前进按钮
    CurrentTimeDisplay,
    TimeDivider,
    PlaybackRateMenuButton,  // 倍速播放选项
    VolumeMenuButton
} from 'video-react';
import "video-react/dist/video-react.css"; // import css
import { Link } from 'react-router-dom';
export default class Videoes extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        console.log(this.player)
        this.player.subscribeToStateChange(this.handleStateChange.bind(this));
    }
    handleStateChange(state, prevState) {
        this.setState({
            player: state,
            currentTime: state.currentTime,
            duration: state.duration,
        });
    }
    render() {
        return <div className="videohh">
            <Link to='/news'>
                <Player
                    ref={c => {
                        this.player = c;
                    }}
                    autoPlay='true'
                    playsInline='true'
                    src={this.state.videoUrl}
                    poster="https://video-react.js.org/assets/poster.png"
                >
                    <ControlBar autoHide={false} disableDefaultControls={false}>
                        <ReplayControl seconds={10} order={1.1} />
                        <PlayToggle />
                        <CurrentTimeDisplay order={4.1} />
                        <TimeDivider order={4.2} />
                        <PlaybackRateMenuButton rates={[5, 2, 1.5, 1, 0.5]} order={7.1} />
                        <VolumeMenuButton />
                    </ControlBar>
                </Player>
            </Link>
        </div>
    }
}