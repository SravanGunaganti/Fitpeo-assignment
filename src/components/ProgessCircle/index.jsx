import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressCircle = ({ percentage, size = 100, strokeWidth = 100, text=`70%` }) => {
  return (
    <div style={{ width: size, height: size, position: 'relative',marginLeft:"20px" }}>
      <CircularProgressbar
        value={70}
        text={text}
        styles={buildStyles({
          backgroundPadding:5,
          textSize: '30px',
          pathColor: '#4CB1E4',
          textColor: 'white',
          trailColor: 'steelblue',
          strokeLinecap: 'round',
          pathTransitionDuration: 0.1,
          strokeWidth: strokeWidth,
        })}
      />
    </div>
  );
};

export default ProgressCircle;
