import React from 'react'

const Preloader = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <svg
        width="200"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        className="lds-ellipsis"
        style={{background:"0 0"}}
      >
        <circle cx="30" cy="50" r="0" fill="#047aed">
          <animate
            attributeName="r"
            values="10;0;0;0;0"
            keyTimes="0;0.25;0.5;0.75;1"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            calcMode="spline"
            dur="1s"
            repeatCount="indefinite"
            begin="0s"
          />
          <animate
            attributeName="cx"
            values="84;84;84;84;84"
            keyTimes="0;0.25;0.5;0.75;1"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            calcMode="spline"
            dur="1s"
            repeatCount="indefinite"
            begin="0s"
          />
        </circle>
        <circle cx="30" cy="50" r="1" fill="#047aed">
          <animate
            attributeName="r"
            values="0;10;10;10;0"
            keyTimes="0;0.25;0.5;0.75;1"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            calcMode="spline"
            dur="1s"
            repeatCount="indefinite"
            begin="-0.5s"
          />
          <animate
            attributeName="cx"
            values="16;16;50;84;84"
            keyTimes="0;0.25;0.5;0.75;1"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            calcMode="spline"
            dur="1s"
            repeatCount="indefinite"
            begin="-0.5s"
          />
        </circle>
        <circle cx="16" cy="50" r="1" fill="#047aed">
          <animate
            attributeName="r"
            values="0;10;10;10;0"
            keyTimes="0;0.25;0.5;0.75;1"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            calcMode="spline"
            dur="1s"
            repeatCount="indefinite"
            begin="-0.25s"
          />
          <animate
            attributeName="cx"
            values="16;16;50;84;84"
            keyTimes="0;0.25;0.5;0.75;1"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            calcMode="spline"
            dur="1s"
            repeatCount="indefinite"
            begin="-0.25s"
          />
        </circle>
        <circle cx="30" cy="50" r="0" fill="#047aed">
          <animate
            attributeName="r"
            values="0;10;10;10;0"
            keyTimes="0;0.25;0.5;0.75;1"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            calcMode="spline"
            dur="1s"
            repeatCount="indefinite"
            begin="0s"
          />
          <animate
            attributeName="cx"
            values="16;16;50;84;84"
            keyTimes="0;0.25;0.5;0.75;1"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            calcMode="spline"
            dur="1s"
            repeatCount="indefinite"
            begin="0s"
          />
        </circle>
        <circle cx="30" cy="50" r="1" fill="#047aed">
          <animate
            attributeName="r"
            values="0;0;10;10;10"
            keyTimes="0;0.25;0.5;0.75;1"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            calcMode="spline"
            dur="1s"
            repeatCount="indefinite"
            begin="0s"
          />
          <animate
            attributeName="cx"
            values="16;16;16;50;84"
            keyTimes="0;0.25;0.5;0.75;1"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            calcMode="spline"
            dur="1s"
            repeatCount="indefinite"
            begin="0s"
          />
        </circle>
      </svg>
    </div>
  );
}

export default Preloader
