import { Grid, Box, Typography } from '@mui/material';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import FavoriteIcon from '@mui/icons-material/Favorite';


function QuickInfo () {
    return (
        <div style={{
            flex: 1,
            display: 1,
            marginTop: '50px',
            marginLeft: '40px'
        }}>
            <Grid container spacing={15}>
                <Grid item xs={2}>
                    <Box sx={{ borderRadius: '10px', bgcolor: '#35937F', width: 200, height: 200, boxShadow: 5 }}>
                        <Typography variant="body1" sx={{ padding: '10px', color: 'white' }}>
                            <DirectionsRunIcon />
                            Steps
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <Box sx={{ borderRadius: '10px', bgcolor: '#ED7415', width: 200, height: 200, boxShadow: 5 }}>
                        <Typography variant="body1" sx={{ padding: '10px', color: 'white' }}>
                            <LocalFireDepartmentIcon />
                            Calories
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <Box sx={{ borderRadius: '10px', bgcolor: '#F63ED7', width: 200, height: 200, boxShadow: 5 }}>
                        <Typography variant="body1" sx={{ padding: '10px', color: 'white' }}>
                            <FavoriteIcon />
                            Heart Rate
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default QuickInfo;
