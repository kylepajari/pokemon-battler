import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sound from "react-sound";
import BattleTheme from "../Sounds/battleTheme.mp3";
import Victory from "../Sounds/victory.mp3";
import volumeIcon from "../volume.png";

class Music extends Component {
  constructor(props) {
    super(props);

    this.state = {
      volume: 50
    };
  }

  componentWillReceiveProps(props) {
    if (props.volume === 0) {
      this.setState({ volume: 0 });
    } else if (props.volume === 0.5) {
      this.setState({ volume: 50 });
    }
  }

  render() {
    return null;
  }
}

export default Music;
