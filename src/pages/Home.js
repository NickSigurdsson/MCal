import React from 'react';
import ProSidebar from '../components/ProSidebar';
import Topbar from '../components/Topbar';
import QuickInfo from '../components/QuickInfo';
import Barchart from '../components/Barchart';


function Home () {
    return (
        <>
            <div style={{ display: 'flex' }}>
                <ProSidebar />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}> {/* Vertical container */}
                    <Topbar />
                    <QuickInfo />
                    <Barchart />
                </div>
            </div>
        </>
    )
};

export default Home;
