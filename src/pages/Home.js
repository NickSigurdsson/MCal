import React from 'react';
import ProSidebar from '../components/ProSidebar';
import Topbar from '../components/Topbar';
import QuickInfo from '../components/QuickInfo';
import Barchart from '../components/Barchart';
import Donutchart from '../components/Donutchart';


function Home () {
    return (
        <>
            <div style={{ display: 'flex' }}>
                <ProSidebar />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Topbar />
                    <QuickInfo />
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'row' }}>
                        <Barchart />
                        <Donutchart />
                    </div>
                </div>
            </div>
        </>
    )
};

export default Home;
