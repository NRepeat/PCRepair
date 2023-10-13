import React from "react";

export default function Banner() {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="545">
        <image x="0" y="0" width="1920" height="545" xlinkHref="./HPdesk.svg" />
      </svg>
			<div style={{position:"absolute", top:"0",left:'25%'}}>
				<h1>Welcome to repair center</h1>
				<p>Choose the best option for yourself</p>
			</div>
    </div>
  );
}
