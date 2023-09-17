import React from 'react';
import ProSidebar from '../components/ProSidebar';
import Meals from '../components/Meals';


function Stats() {
  
  return (
    <div style={{ display: 'flex' }}>
      <ProSidebar />
      <Meals />
    </div>
  )
}

export default Stats;