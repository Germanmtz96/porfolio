import React, { useState } from 'react';
import Button from '@mui/material/Button';

const TextPreview = ({ text, maxLength = 261 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p className="saira-semi-condensed-regular" style={{ color: 'rgb(75 85 99)' }}>
        {isExpanded ? text : `${text.substring(0, maxLength)}...`}
      </p>
      <Button onClick={handleToggle} style={{ color: '#ffbc1b', background: 'none', border: 'none', cursor: 'pointer', textTransform:'capitalize', marginBottom:'15px',marginTop:'-20px' }}>
        {isExpanded ? 'Ver menos...' : 'Ver más...'}
      </Button>
    </div>
  );
};

export default TextPreview;
