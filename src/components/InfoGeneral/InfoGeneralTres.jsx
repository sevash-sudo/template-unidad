import { Box, Button, Grid, Typography } from "@mui/material";
import Logo from '@assets/Logo.png'
import Mision from '@assets/MisionIcon.png'
import Vision from '@assets/VisionIcon.png'
import Funciones from '@assets/FuncionesIcon.png'

export const InfoGeneralTres = () => {

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
                <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                        height: '12rem',
                        width: '12rem',
                        borderColor: 'primary.main',
                        borderWidth: '1rem',
                        borderStyle: 'solid',marginInline:'auto'
                    }}>
                        <Box
                            src={Mision}
                            component={'img'}
                            sx={{
                                height: '10rem',
                                width: '10rem',
                                objectFit: 'contain',
                            }} />
                    </Box>
                    <Box>
                        <Typography color="primary" variant="h5" fontWeight={'bold'} textAlign={'center'}>
                            Misión
                        </Typography>
                        <Typography fontSize={'15px'} textAlign={'justify'}>
                            Lorem ipsum dolor sit amet consectetur. Adipiscing amet pharetra lectus at congue eget. Tristique vel elementum purus fermentum est purus turpis a interdum. In vitae bibendum pretium placerat imperdiet nam. Aenean parturient non sed nisi. Donec nibh.
                        </Typography>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', gap: '1rem', flexDirection: 'column' }} >
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                        height: '12rem',
                        width: '12rem',
                        borderColor: 'primary.main',
                        borderWidth: '1rem',
                        borderStyle: 'solid',marginInline:'auto'
                    }}>
                        <Box
                            src={Vision}
                            component={'img'}
                            sx={{
                                height: '10rem',
                                width: '10rem',
                                objectFit: 'contain',


                            }} />
                    </Box>
                    <Box>
                        <Typography color="primary" variant="h5" fontWeight={'bold'} textAlign={'center'}>
                            Visión
                        </Typography>
                        <Typography fontSize={'15px'} textAlign={'justify'} >
                            Lorem ipsum dolor sit amet consectetur. Adipiscing amet pharetra lectus at congue eget. Tristique vel elementum purus fermentum est purus turpis a interdum. In vitae bibendum pretium placerat imperdiet nam. Aenean parturient non sed nisi. Donec nibh.
                        </Typography>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                   
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                        height: '12rem',
                        width: '12rem',
                        borderColor: 'primary.main',
                        borderWidth: '1rem',
                        borderStyle: 'solid',marginInline:'auto'
                    }}>
                    <Box
                        src={Funciones}
                        component={'img'}
                        sx={{
                             height: '10rem',
                                width: '10rem',
                                objectFit: 'contain',
                                
                        }} />
                        </Box>
                    <Box>
                        <Typography color="primary" variant="h5" fontWeight={'bold'} textAlign={'center'}>
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