import React from 'react';
import ProSidebar from '../components/ProSidebar';
import Meals from '../components/Stats/Meals';
// import LoggingItem from '../components/Stats/LoggingItem';


function Stats() {
  
  return (
    <div style={{ display: 'flex' }}>
      <ProSidebar />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '200px' }}>
          <Meals />
        </div>
    </div>
  )
}

export default Stats;