import React from 'react';

import styles from './logo.css';

const myLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    aria-labelledby="offbeatAppetiteLogoTitle"
    role="img"
    className={styles.logo}
  >
    <title id="offbeatAppetiteLogoTitle">The Offbeat Appetite</title>
    <g fill="currentColor" fillRule="evenodd">
      <path d="M47.8 24.1c11 1.6 17.3 6 23.6 14a38 38 0 017 30.3 39.6 39.6 0 01-14.5 27 32 32 0 01-27 7.4 32.2 32.2 0 01-23.7-14.5A40 40 0 016.5 58a37.9 37.9 0 0115-26.7c8.2-6 15.3-8.6 26.3-7zm-.4 2.9c-8.4-1.2-13 1.3-18.5 6.7A46.3 46.3 0 0018.4 60a46.6 46.6 0 002.9 28.3c3.7 6.8 7.6 10.5 16.7 11.8 8 1 13.5-1.3 19-6.7 5.4-5.5 7.7-14.4 9.5-26.5 1.6-11.8 1.9-21-1.8-28a21 21 0 00-17.3-12z" />
      <path d="M90.2 24l.1.4L122 102h-11.8l-5.6-14.3L99 73.4H79.7l.5-2.6h17.9L84.9 38.1l-4.8 12.4c-.3-1.2-.7-2.5-1.2-3.7l8.9-22.4.2-.4h2.2zM66.8 77.2l-.5 2H66z" />
    </g>
  </svg>
);

export default myLogo;
