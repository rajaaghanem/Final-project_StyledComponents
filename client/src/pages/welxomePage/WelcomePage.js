import React from "react";
import "./welcomePage.css";

function WelcomePage() {
  return (
    <div>
      <div className="container card">
        <input type="radio" name="slider" id="item-1" checked />
        <label className="card item-1" id="song-1">
            <img
              src="https://images.unsplash.com/photo-1619331455756-a7fd26f4e491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="song"
            />
          </label>
        <input type="radio" name="slider" id="item-2" />
        <label className="card"  id="song-2">
            <img
              src="https://images.unsplash.com/photo-1584720812403-ccafcb6d411e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80"
              alt="song"
            />
          </label>
        <input type="radio" name="slider" id="item-3" />
        <label className="card"  id="song-3">
            <img
              src="https://images.unsplash.com/photo-1623822898059-727cebeb8670?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="song"
            />
          </label>
        
        {/* <div class="player">
    <div class="upper-part">
      <div class="play-icon">
        <svg width="20" height="20" fill="#2992dc" stroke="#2992dc" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-play" viewBox="0 0 24 24">
          <defs/>
          <path d="M5 3l14 9-14 9V3z"/>
        </svg>
      </div>
      <div class="info-area" id="test">
        <label class="song-info" id="song-info-1">
          <div class="title">Bunker</div>
          <div class="sub-line">
            <div class="subtitle">Balthazar</div>
            <div class="time">4.05</div>
          </div>
        </label>
        <label class="song-info" id="song-info-2">
          <div class="title">Words Remain</div>
          <div class="sub-line">
            <div class="subtitle">Moderator</div>
            <div class="time">4.05</div>
          </div>
        </label>
        <label class="song-info" id="song-info-3">
          <div class="title">Falling Out</div>
          <div class="sub-line">
            <div class="subtitle">Otzeki</div>
            <div class="time">4.05</div>
          </div>
        </label>
      </div>
    </div>
    <div class="progress-bar">
      <span class="progress"></span>
    </div>
  </div> */}
      </div>
    </div>
  );
}

export default WelcomePage;
