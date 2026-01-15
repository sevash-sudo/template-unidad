import { Box, Button, Grid, Typography } from "@mui/material";
import Logo from '@assets/Logo.png'
import ItemImg from '@assets/Carrusel1.png'

export const InfoGeneralUno = () => {

    return (
        <Box sx={{ display: 'flex', padding: '5rem', backgroundColor: 'white', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
            <Box
                component={'img'}
                src={Logo}
                sx={{ width: '14rem', marginInline: 'auto' }}
            />
            <Typography variant="h4" color="secondary" textAlign={'justify'} marginInline={'auto'}>
                NOMBRE DE LA SECRETARÍA NOMBRE DE LA SECRETARÍA
            </Typography>

            <Grid container width={'100%'} spacing={2} >
                <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', gap: '1rem' }}>
                    <Box
                        src={ItemImg}
                        component={'img'}
                        sx={{
                            height: '10rem',
                            width: '10rem',
                            objectFit: 'cover',
                            borderRadius: '.5rem'
                        }} />
                    <Box>
                        <Typography color="primary" variant="h5">
                            Misión
                        </Typography>
                        <Typography fontSize={'15px'} textAlign={'justify'}>
                            Lorem ipsum dolor sit amet consectetur. Adipiscing amet pharetra lectus at congue eget. Tristique vel elementum purus fermentum est purus turpis a interdum. In vitae bibendum pretium placerat imperdiet nam. Aenean parturient non sed nisi. Donec nibh.
                        </Typography>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', gap: '1rem' }} >
                    <Box
                        src={ItemImg}
                        component={'img'}
                        sx={{
                            height: '10rem',
                            width: '10rem',
                            objectFit: 'cover',
                            borderRadius: '.5rem'
                        }} />
                    <Box>
                        <Typography color="primary" variant="h5">
                            Visión
                        </Typography>
                        <Typography fontSize={'15px'} textAlign={'justify'}>
                            Lorem ipsum dolor sit amet consectetur. Adipiscing amet pharetra lectus at congue eget. Tristique vel elementum purus fermentum est purus turpis a interdum. In vitae bibendum pretium placerat imperdiet nam. Aenean parturient non sed nisi. Donec nibh.
                        </Typography>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', gap: '1rem' }}>
                    <Box
                        src={ItemImg}
                        component={'img'}
                        sx={{
                            height: '10rem',
                            width: '10rem',
                            objectFit: 'cover',
                            borderRadius: '.5rem'
                        }} />
                    <Box>
                        <Typography color="primary" variant="h5">
                            Funciones
                        </Typography>
                        <Typography fontSize={'15px'} textAlign={'justify'}>
                            Lorem ipsum dolor sit amet consectetur. Adipiscing amet pharetra lectus at congue eget. Tristique vel elementum purus fermentum est purus turpis a interdum. In vitae bibendum pretium placerat imperdiet nam. Aenean parturient non sed nisi. Donec nibh.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}