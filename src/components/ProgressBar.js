import React from 'react';
import './styles/ProgressBar.less';

const ProgressBar = ({skill, percentage}) => {
  const styles = {
    width: `${percentage / 2}%`
  }

  return (
    <div className="progress-bar" style={styles}>
      <p>{skill} - {percentage}</p>
    </div>
  );
}

export default ProgressBar;