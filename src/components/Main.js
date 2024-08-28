import React from 'react';
import { Button, TextField, Container, Typography, Paper, Box } from '@mui/material';
import { Link } from 'react-router-dom';


function MainPage() {
    return (
        <Container maxWidth="md" sx={{ marginTop: '50px' }}>
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
            <Paper elevation={3} sx={{ padding: '20px', marginTop: '30px' }}>
                <Box display="flex" flexDirection="column" alignItems="stretch" gap={3}>
                    <TextField label="Destination" variant="outlined" fullWidth />
                    <Box display="flex" justifyContent="space-between" gap={2}>
                        <TextField
                            label="Check in"
                            type="date"
                            variant="outlined"
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                        />
                        <TextField
                            label="Check out"
                            type="date"
                            variant="outlined"
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                        />
                    </Box>
                    <Box display="flex" justifyContent="space-between" gap={2}>
                        <TextField label="Adults" type="number" variant="outlined" fullWidth />
                        <TextField label="Children" type="number" variant="outlined" fullWidth />
                    </Box>
                    <Box display="flex" justifyContent="flex-end">
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ minWidth: '120px', height: '56px' }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
}

export default MainPage;
