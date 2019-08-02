/* eslint-disable eqeqeq */
import React, { Component } from "react";
import "./BinaryClock.css";

export default class Clock extends Component {
  getActiveCells(time) {
    const cells = {};
    time.forEach((val, key) => {
      cells[key] = {};
      if (val == 1 || val == 3 || val == 5 || val == 7 || val == 9) {
        cells[key][1] = "active";
      } else {
        cells[key][1] = "";
      }

      if (val == 2 || val == 3 || val == 6 || val == 7) {
        cells[key][2] = "active";
      } else {
        cells[key][2] = "";
      }

      if (val == 4 || val == 5 || val == 6 || val == 7) {
        cells[key][4] = "active";
      } else {
        cells[key][4] = "";
      }

      if (val == 8 || val == 9) {
        cells[key][8] = "active";
      } else {
        cells[key][8] = "";
      }
    });
    return cells;
  }

  render() {
    const h = this.getActiveCells(`${this.props.hour}`.split(""));
    const m = this.getActiveCells(`${this.props.minute}`.split(""));
    const s = this.getActiveCells(`${this.props.second}`.split(""));

    if (h[1] === undefined || m[1] === undefined || s[1] === undefined) {
      return <div className="loading">loading...</div>;
    }

    return (
      <div id="clock-container">
        <h2 className="clock-header">Binary</h2>
        <div className={`cell hour-1-1 ${h[0][1]}`} />
        <div className={`cell hour-1-2 ${h[0][2]}`} />
        <div className={`cell hour-2-1 ${h[1][1]}`} />
        <div className={`cell hour-2-2 ${h[1][2]}`} />
        <div className={`cell hour-2-4 ${h[1][4]}`} />
        <div className={`cell hour-2-8 ${h[1][8]}`} />
        <div className={`cell minute-1-1 ${m[0][1]}`} />
        <div className={`cell minute-1-2 ${m[0][2]}`} />
        <div className={`cell minute-1-4 ${m[0][4]}`} />
        <div className={`cell minute-2-1 ${m[1][1]}`} />
        <div className={`cell minute-2-2 ${m[1][2]}`} />
        <div className={`cell minute-2-4 ${m[1][4]}`} />
        <div className={`cell minute-2-8 ${m[1][8]}`} />
        <div className={`cell second-1-1 ${s[0][1]}`} />
        <div className={`cell second-1-2 ${s[0][2]}`} />
        <div className={`cell second-1-4 ${s[0][4]}`} />
        <div className={`cell second-2-1 ${s[1][1]}`} />
        <div className={`cell second-2-2 ${s[1][2]}`} />
        <div className={`cell second-2-4 ${s[1][4]}`} />
        <div className={`cell second-2-8 ${s[1][8]}`} />
      </div>
    );
  }
}
