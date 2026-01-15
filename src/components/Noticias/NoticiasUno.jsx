import { Box, Typography, Grid, Avatar, Button, IconButton } from "@mui/material";
import { InputBusqueda } from "@components"
import ItemIMg from '@assets/Carrusel1.png'
import Logo from '@assets/Logo.png'
import OPenView from '@assets/OpenView.svg'

export const NoticiasUno = () => {
    return (
        <Box bgcolor={'white'}>
            <Typography variant="h5" color="secondary" textAlign={'center'}>ÚLTIMAS NOTICIAS</Typography>
            <Grid container spacing={2} width={'90%'} marginInline={'auto'} marginBlock={'4rem'}  >
                <Grid size={{ xs: 12, md: 6, lg: 6 }}
                    sx={{
                        display: 'flex', flexWrap: { xs: 'wrap', md: 'nowrap' }, gap: '1rem'
                    }}>
                    <Box
                        component={'img'}
                        src={ItemIMg}
                        sx={{
                            borderRadius: '.5rem',
                            height: '18rem',
                            width: '18rem',
                            objectFit: 'cover',
                            marginInline: { xs: 'auto', md: 0 }
                        }}
                    />
                    <Box sx={{}}>
                        <Typography variant="h5" fontWeight={'bold'} color="textDisabled">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac molestie felis.
                        </Typography>
                        <Typography >
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
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} >
                    {[1, 2, 3].map(item => (
                        <Box sx={{ padding: '.5rem', backgroundColor: '#F0F0F0', borderRadius: '.3rem', display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                            <Box
                                component={'img'}
                                src={ItemIMg}
                                sx={{
                                    borderRadius: '.3rem',
                                    height: '6rem',
                                    width: '6rem',
                                    objectFit: 'cover',
                                    marginInline: { xs: 'auto', md: 0 }
                                }}
                            />
                            <Box>
                                <Typography variant="h6" color="primary">Título de la nota</Typography>
                                <Box sx={{ display: 'flex', alignContent: 'center', gap: '.6rem' }}>
                                    <Typography variant="body2" textAlign={'justify'}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac molestie felis. Nullam accumsan quam at neque dignissim, id scelerisque eros dapibus. Etiam convallis ultrices nibh vitae viverra. neque dignissim, id scelerisque eros dapibus. Etiam convallis ultrices nibh vitae viverra.sddsdsadedwwed
                                    </Typography>
                                    <IconButton>
                                        <Box
                                            src={OPenView}
                                            component={'img'}
                                        />
                                    </IconButton>
                                </Box>
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