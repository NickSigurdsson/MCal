import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SettingsIcon from '@mui/icons-material/Settings';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom'; 


function ProSidebar () {
    return (
        <Sidebar 
            collapsed={true} 
            backgroundColor='orange' 
            collapsedWidth='66px'
            style={{ height: '100vh' }}
        >
            <Menu>
                <MenuItem component={<Link to="../Profile" />}> <AccountCircleIcon/> </MenuItem>
                <MenuItem component={<Link to="../" />}> <HomeIcon/> </MenuItem>
                <MenuItem component={<Link to="../Stats" />}> <TrendingUpIcon/> </MenuItem>
                <MenuItem component={<Link to="../Settings" />}> <SettingsIcon/> </MenuItem> 
            </Menu>
         </Sidebar>
    );
}

export default ProSidebar;

