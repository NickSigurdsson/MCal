import React from 'react';
import ProSidebar from '../components/ProSidebar';
import Profilebox from '../components/Profilebox';


function Profile () {
    return (
        <>
            <div style={{ display: 'flex' }}>
                <ProSidebar />
                <Profilebox />
            </div>
        </>
    );
}

export default Profile;