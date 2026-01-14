import { Box, Typography, Grid, Avatar, Button, IconButton, Card, CardMedia, CardContent } from "@mui/material";
import { InputBusqueda } from "@components"
import ItemIMg from '@assets/Carrusel1.png'
import Logo from '@assets/Logo.png'

import LaunchIcon from '@mui/icons-material/Launch';

export const NoticiasTres = () => {
    return (
        <Box sx={{
            backgroundColor: 'white', width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '2rem'
        }}>
            <Typography variant="h5" color="secondary" textAlign={'center'}>ÚLTIMAS NOTICIAS</Typography>

            <Box sx={{
                width: { xs: '100%', md: '80%' },
                position: 'relative', marginInline: 'auto'
            }}>
                <Box
                    component={'img'}
                    src={ItemIMg}
                    sx={{ width: '100%', maxHeight: '35rem', objectFit: 'cover', borderRadius: { xs: 0, md: '.5rem' } }}
                />

                <Box sx={{
                    position: 'absolute',
                    backgroundColor: 'primary.main',
                    top: '50%',
                    right: 0,
                    transform: 'translateY(-50%)',
                    padding: '1.5rem', color: 'white',
                    width: { xs: '90%', sm: '50%', md: '40%' },
                    display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'start'
                }}>
                    <Typography fontWeight={'bold'} >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac molestie felis.
                    </Typography>
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac molestie felis. Nullam accumsan quam at neque dignissim, id scelerisque eros dapibus. Etiam convallis ultrices nibh vitae viverra.
                    </Typography>
                    <Button color="secondary" variant="outlined" sx={{ borderRadius: '1rem' }}>
                        Seguir leyendo
                    </Button>
                </Box>
            </Box>

            <Box sx={{
                width: { xs: '100%', md: '80%' },

                marginInline: 'auto'
            }}>
                <Grid container spacing={2}>
                    {[1, 2, 3, 4, 5, 6].map(item => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <Card sx={{ width: { xs: '90%', md: '100%' }, maxWidth: '100%', borderRadius: '10px', marginInline: 'auto' }}>
                                <CardMedia
                                    sx={{ height: '16rem' }}
                                    image={ItemIMg}
                                />
                                <CardContent sx={{ display: 'flex', alignItems: 'start', flexDirection: 'column', gap: '1rem', borderColor: 'primary.main', borderStyle: 'solid', borderWidth: '2px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
                                    <Typography variant="h6" color="primary" fontWeight={'bold'}>
                                        Título de la nota
                                    </Typography>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac molestie felis. Nullam accumsan quam at neque dignissim, id scelerisque eros dapibus.
                                    </Typography>
                                    <Button color="secondary" variant="outlined" sx={{ borderRadius: '1rem' }}>
                                        Seguir leyendo
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Box sx={{ display: 'flex', }}>
                <Button variant="outlined" color="secondary" sx={{ marginInline: 'auto' }}>
                    Ver todas la noticias
                </Button>
            </Box>
        </Box>

    );
}