import React from 'react';

import styles from './Timer.module.scss';

const Timer = ({time}) => {
  let millisecond = time;

  let hours = Math.floor((millisecond / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((millisecond / (1000 * 60)) % 60);
  let seconds = Math.floor((millisecond / 1000) % 60);
  let milliseconds = Math.floor((millisecond / 0.1) % 1000);
  console.log(milliseconds);

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  if (milliseconds < 10) {
    milliseconds = `00${milliseconds}`;
  }

  return (
    <div className={styles.timer}>
      <p className={styles.title}>Timer</p>
      {`${hours}:${minutes}:${seconds}:${milliseconds}`}
    </div>
  );
};

export default Timer;
