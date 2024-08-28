import React from 'react';
import { Button, TextField, Container, Typography, Grid, Paper, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function MainPage() {
    return (
        <Container maxWidth="md" style={{ marginTop: '50px' }}>
            <Box display="flex" justifyContent="flex-end" mb={2}>
                <Button color="inherit" component={Link} to="/about" sx={{ marginRight: 2 }}>
                    About
                </Button>
                <Button color="inherit" component={Link} to="/hotels">
                    Hotels
                </Button>
            </Box>
            <Typography variant="h3" align="center" gutterBottom>
                Travel With <span style={{ color: 'orange' }}>Booking</span>
            </Typography>
            <Paper elevation={3} style={{ padding: '20px', marginTop: '30px' }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={3}>
                        <TextField label="Destination" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <TextField
                            label="Check in"
                            type="date"
                            variant="outlined"
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <TextField
                            label="Check out"
                            type="date"
                            variant="outlined"
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <TextField label="Adults" type="number" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <TextField label="Children" type="number" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={12} md={1}>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ height: '100%' }}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}

export default MainPage;
