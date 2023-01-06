import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright ' + String.fromCharCode(169) + ' '}
            <Link color="inherit" href="https://https://upload.wikimedia.org/wikipedia/commons/3/38/Jheronimus_Bosch_023.jpg/" target="_blank">
                rock skippers of the deep state
            </Link>{' '}
            {new Date().getFullYear()}.
        </Typography>
    );
}

export default function App() {
    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    rock skippers of the deep state
                </Typography>
                <Copyright />
            </Box>
        </Container>
    );
}