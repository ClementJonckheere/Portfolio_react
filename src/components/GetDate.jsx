import React, { useState, useEffect } from 'react';

function GetDate() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div className='date-content'>
        <div className='getdate'>
        {time.toLocaleTimeString()}
        </div>
    </div>
  );
}

export default GetDate;