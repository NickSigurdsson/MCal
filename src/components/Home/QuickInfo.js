import { Grid, Box, Typography } from '@mui/material';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import FavoriteIcon from '@mui/icons-material/Favorite';


function QuickInfo () {
    return (
        <div style={{
            flex: 1,
            display: 1,
            marginTop: '20px',
            marginLeft: '40px'
        }}>
            <Grid container spacing={60}>
                <Grid item xs={2}>
                    <Box sx={{ borderRadius: '10px', bgcolor: '#35937F', width: 300, height: 120, boxShadow: 5 }}>
                        <Typography variant="body1" sx={{ padding: '10px', color: 'white' }}>
                            <DirectionsRunIcon />
                            Steps
                        </Typography>
                        <Typography 
                            variant="h4" 
                            sx={{ 
                                padding: '10px', 
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                marginTop: '-10px'
                            }}
                        >
                            10,000
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <Box sx={{ borderRadius: '10px', bgcolor: '#ED7415', width: 300, height: 120, boxShadow: 5 }}>
                        <Typography variant="body1" sx={{ padding: '10px', color: 'white' }}>
                            <LocalFireDepartmentIcon />
                            Calories
                        </Typography>
                        <Typography 
                            variant="h4" 
                            sx={{ 
                                padding: '10px', 
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                marginTop: '-10px'
                            }}
                        >
                            3,500
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <Box sx={{ borderRadius: '10px', bgcolor: '#F63ED7', width: 300, height: 120, boxShadow: 5 }}>
                        <Typography variant="body1" sx={{ padding: '10px', color: 'white' }}>
                            <FavoriteIcon />
                            Heart Rate (bpm)
                        </Typography>
                        <Typography 
                            variant="h4" 
                            sx={{ 
                                padding: '10px', 
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                marginTop: '-10px'
                            }}
                        >
                            100
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default QuickInfo;
