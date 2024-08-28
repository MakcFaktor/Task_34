import React from 'react';
import { Button, TextField, Container, Typography, Grid } from '@mui/material';

function MainPage() {
    return (
        <Container>
            <Typography variant="h3" gutterBottom>
                Travel With <span style={{ color: 'orange' }}>Booking</span>
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <TextField label="Destination" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} md={2}>
                    <TextField label="Check in" type="date" variant="outlined" fullWidth InputLabelProps={{ shrink: true }} />
                </Grid>
                <Grid item xs={12} md={2}>
                    <TextField label="Check out" type="date" variant="outlined" fullWidth InputLabelProps={{ shrink: true }} />
                </Grid>
                <Grid item xs={12} md={2}>
                    <TextField label="Adults" type="number" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} md={2}>
                    <TextField label="Children" type="number" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} md={1}>
                    <Button variant="contained" color="primary" fullWidth>
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default MainPage;
