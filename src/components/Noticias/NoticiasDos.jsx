import { Box, Typography, Grid, Avatar, Button, IconButton } from "@mui/material";
import { InputBusqueda } from "@components"
import ItemIMg from '@assets/Carrusel1.png'
import Logo from '@assets/Logo.png'

import LaunchIcon from '@mui/icons-material/Launch';

export const NoticiasDos = () => {
    return (
        <Box bgcolor={'white'}>
            <Typography variant="h5" color="secondary" textAlign={'center'} marginBottom={'1rem'}>ÚLTIMAS NOTICIAS</Typography>
            <Grid container spacing={0}>
                <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                    <Box
                        component={'img'}
                        sx={{
                            width: '100%',
                            objectFit: 'fill',
                        }}
                        src={ItemIMg}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} padding={6} bgcolor={"#F0F0F0"} >
                    <Typography fontWeight={'bold'} variant="h6" color="textDisabled">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac molestie felis.
                    </Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac molestie felis. Nullam accumsan quam at neque dignissim, id scelerisque eros dapibus. Etiam convallis ultrices nibh vitae viverra.
                    </Typography>
                    <Box sx={{
                        display: 'flex', gap: '1rem',
                        marginBlock: '1rem'
                    }} >
                        <Avatar
                            src={Logo}
                            sx={{ width: '2.5rem', height: '2.5rem', borderColor: 'primary.main', borderWidth: '2px', borderStyle: 'solid' }}
                        />
                        <Box>
                            <Typography color="primary">Nombre Apellido</Typography>
                            <Typography> 13 de Enero 2026</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                        <Button color="secondary" variant="outlined" sx={{ borderRadius: '1rem', marginLeft: 'auto', marginRight: '10px' }}>Seguir Leyendo</Button>
                    </Box>
                </Grid>
                <Grid size={12} bgcolor={'white'}
                    sx={{
                        display: 'flex',
                        overflow: 'auto',
                        gap: '2rem', paddingInline: '4rem'
                    }}
                >
                    {[1, 2, 3, 5, 6, 6].map(item => (
                        <Box sx={{
                            marginBlock: '2rem', position: 'relative', zIndex: 1,
                            '&::before': {
                                content: "' '",
                                position: 'absolute',
                                bottom: 5,
                                width: '100%',
                                height: '90%',
                                backgroundColor: '#00000067',
                                zIndex: 2,
                                overflow: 'hidden',
                                borderRadius: '.6rem'
                            }
                        }}>
                            <Box
                                src={ItemIMg}
                                component={'img'}
                                sx={{
                                    
                                    width: '38rem', height: '18rem', borderRadius: '.6rem',
                                }}
                            />
                            <IconButton sx={{
                                position: 'absolute',
                                top: '1rem',
                                right: '1rem', color: "white",
                                zIndex: 2
                            }}>
                                <LaunchIcon sx={{ width: '2rem', height: '2rem' }} />
                            </IconButton>
                            <Box
                                sx={{
                                    backgroundColor: 'transparent',
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '90%', zIndex: 2, color: 'white', margin: '1rem 2rem'
                                }}>
                                <Typography variant="h6">Título de la nota</Typography>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac molestie felis. Nullam accumsan quam at neque dignissim, id scelerisque eros dapibus.
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex', }}>
                <Button variant="outlined" color="secondary" sx={{ marginInline: 'auto' }}>
                    Ver todas la noticias
                </Button>
            </Box>
        </Box>

    );
}