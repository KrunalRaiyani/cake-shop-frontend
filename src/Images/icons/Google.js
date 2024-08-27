import React from "react";

const Google = ({ className, ...props }) => {
  return (
    <svg
      {...props}
      className={className}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.04717 12C5.04717 11.2206 5.17662 10.4733 5.40768 9.77238L1.3634 6.68402C0.575188 8.28438 0.131104 10.0877 0.131104 12C0.131104 13.9107 0.574642 15.7129 1.36176 17.3122L5.40386 14.2178C5.17499 13.5202 5.04717 12.7757 5.04717 12Z"
        fill="#FBBC05"
        className="group-hover:fill-white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.1482 4.90909C13.8415 4.90909 15.3709 5.50909 16.5726 6.49091L20.0685 3C17.9382 1.14545 15.207 0 12.1482 0C7.39924 0 3.31781 2.71582 1.3634 6.684L5.40769 9.77236C6.33955 6.94364 8.99587 4.90909 12.1482 4.90909Z"
        fill="#EB4335"
        className="group-hover:fill-white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.1482 19.0909C8.99587 19.0909 6.33955 17.0564 5.40769 14.2277L1.3634 17.3155C3.31781 21.2842 7.39924 24 12.1482 24C15.0792 24 17.8776 22.9593 19.9778 21.0093L16.1389 18.0415C15.0557 18.7238 13.6918 19.0909 12.1482 19.0909Z"
        fill="#34A853"
        className="group-hover:fill-white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.619 12C23.619 11.2909 23.5098 10.5273 23.3459 9.81818H12.1482V14.4545H18.5937C18.2714 16.0353 17.3942 17.2505 16.1389 18.0414L19.9778 21.0093C22.1841 18.9616 23.619 15.9114 23.619 12Z"
        fill="#4285F4"
        className="group-hover:fill-white"
      />
    </svg>
  );
};

export default Google;
