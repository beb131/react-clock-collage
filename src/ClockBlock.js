import React, { Component } from "react";
import BinaryClock from "./BinaryClock";
import "./ClockBlock.css";

export default class ClockBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      hour: null,
      minute: null,
      second: null
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const second = new Date().getSeconds();
    this.setState({
      date: new Date(),
      hour: String(hour < 10 ? `0${hour}` : hour),
      minute: String(minute < 10 ? `0${minute}` : minute),
      second: String(second < 10 ? `0${second}` : second)
    });
  }

  render() {
    const { hour, minute, second } = this.state;
    return (
      <div>
        <h1>It is {this.state.date.toLocaleTimeString()}.</h1>
        <h2>Let's see a few more ways to display that...</h2>
        <BinaryClock hour={hour} minute={minute} second={second} />
      </div>
    );
  }
}
