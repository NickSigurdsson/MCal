import { Grid, Box, Typography, Avatar, Button } from '@mui/material';


function Profilebox () {
    return (
        <div style={{ marginBottom: '50px', marginLeft: '40px' }}>
            <Box border={1} borderColor="grey.300" boxShadow={3} p={2} borderRadius={4} width={600}>
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={4}>
                        <Avatar alt="Profile Picture" src="/path-to-your-image.jpg" style={{ width: 100, height: 100 }} />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="h5" gutterBottom>
                            Jeremy
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            Age: 21
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            Email: jeremy@gmail.com
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            Phone: +1234567890
                        </Typography>
                        <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                            Edit Profile
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Profilebox;
