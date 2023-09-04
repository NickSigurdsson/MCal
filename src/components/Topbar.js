import { Box, Typography } from '@mui/material';


function Topbar () {
    return (
        <div style={{
            paddingTop: '20px',
            paddingLeft: '40px',
        }}>
            <Typography variant="h5">
                <Box>Hello Admin</Box>
            </Typography>
            <Typography variant="h3">
                <Box sx={{ fontWeight: 'bold'}}>Welcome Back!</Box>
            </Typography>
        </div>
    );
}

export default Topbar;