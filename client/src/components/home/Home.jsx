import { Box, Grid } from '@mui/material';

// components
import Banner from '../banner/Banner';
import Categories from './Categories';
import Posts from './post/Posts';

const Home = () => {
    return (
        <>
            <Banner />

            {/* Main content area using Flexbox */}
            <Box display="flex" p={2} sx={{ width: '100%' }}>
                
                {/* Left: Categories sidebar */}
                <Box
                    sx={{
                        position: 'sticky',
                        top: 0,
                        height: '100vh', // Sticky sidebar full viewport height
                        p: 2,
                        m: 2,
                        flex: 'none',
                        borderRadius: 1,
                        boxShadow: 2, // Optional shadow for better visual separation
                    }}
                >
                    <Grid item xs={12} sm={3} md={2}>
                        <Categories />
                    </Grid>
                </Box>

                {/* Right: Posts area */}
                <Box
                    sx={{
                        flex: 1,
                        p: 3, // Padding around posts content
                        m: 2, // Margin for space between sidebar and posts
                    }}
                >
                    <Grid container spacing={4}>
                        <Posts />
                    </Grid>
                </Box>
            </Box>
        </>
    );
};

export default Home;
