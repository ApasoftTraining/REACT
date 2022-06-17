import React from 'react'
import { useState} from 'react';
function Home() {
  const [dato, setdato] = useState(0);
  return (
    
    <div>ESTOY EN HOME
      <p>{dato}</p>
    </div>
    
    
    
  )
}

export default Home