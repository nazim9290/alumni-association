import React, { useEffect, useState } from "react";

import "./Countdown.css";

function Countdown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [outText, setOutText] = useState("");
  const [showSemicolon, setShowSemicolon] = useState(false);

  useEffect(() => {
    // Set the date we're counting down to
    var countDownDate = new Date("2023 01 04 8:00:30").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      setDays(days);
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(hours);
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(minutes);
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setSeconds(seconds);

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        setOutText("its done");
      }
    }, 1000);
  }, []);

  return (
    <div className="countdown">
      {!outText ? (
        <div className="timer-container">
          <div className="timer">
            {days}
            <span>days</span>
          </div>
          {showSemicolon ? <div className="semicolon">:</div> : null}
          <div className="timer">
            {hours}
            <span>hour</span>
          </div>
          {showSemicolon ? <div className="semicolon">:</div> : null}
          <div className="timer">
            {minutes}
            <span>minute</span>
          </div>
          {showSemicolon ? <div className="semicolon">:</div> : null}
          <div className="timer">
            {seconds}
            <span>second</span>
          </div>
        </div>
      ) : (
        <div>
          <h1>Event all Most Done</h1>
        </div>
      )}
    </div>
  );
}
export default Countdown;
