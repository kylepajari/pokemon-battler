import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sound from "react-sound";
import BattleTheme from "../battleTheme.mp3";
import Victory from "../victory.mp3";
import volumeIcon from "../volume.png";

class Music extends Component {
  constructor(props) {
    super(props);

    this.state = {
      volume: 0,
      battle: Sound.status.PLAYING,
      victory: Sound.status.STOPPED
    };
  }

  toggleSound = () => {
    if (this.state.volume === 0) {
      this.setState({
        volume: 50
      });
    } else {
      this.setState({
        volume: 0
      });
    }
  };

  render() {
    return (
      <div className="MusicPlayer">
        <Sound
          url={BattleTheme}
          loop={true}
          autoLoad={false}
          autoPlay={false}
          volume={this.state.volume}
          playStatus={this.state.battle}
        />
        <Sound
          url={Victory}
          loop={false}
          autoLoad={false}
          autoPlay={false}
          volume={this.state.volume}
          playStatus={this.state.victory}
        />
        <img
          className={`"volume" ${
            this.state.volume === 0 ? "volume muted" : "volume"
          }`}
          src={volumeIcon}
          alt="SOUND"
          onClick={() => this.toggleSound()}
        />
      </div>
    );
  }
}

export default Music;
