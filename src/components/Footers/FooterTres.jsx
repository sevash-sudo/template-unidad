import ImgFooter from '@assets/Footer3.png'
import { Box, Typography, IconButton } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

export const FooterTres = () => {
    return (
        <Box sx={{
            position: 'relative',
            zIndex: 1, marginTop: '10rem',
            
        }}>

            <Box
                component={'img'}
                src={ImgFooter}
                sx={{
                    width: '100%',
                    height: '100vh',
                    zIndex: 2
                }} />
            <Box sx={{
                borderRadius: '1rem',
                position: 'absolute',                
                top: '50%',
                right:'5%',
                backgroundColor: 'white',
                padding: '1rem 2rem',
                transform: 'translateY(-50%)',
                width:{sm:'90%', md:'30%'}
            }}>
                <Typography variant='h4' color='primary'>Contacto</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
                    <Box>
                        <Typography color='secondary'>Correo electrónico</Typography>
                        <Typography>mailnombre@gmail.com</Typography>
                    </Box>
                    <Box>
                        <Typography color='secondary'>Teléfono</Typography>
                        <Typography>771 00 0000</Typography>
                    </Box>
                </Box>

                <Box >
                    <Typography color="secondary" alignSelf={'center'}>
                        Redes Sociales
                    </Typography>
                    <IconButton sx={{ margin: 0, padding: 0 }}>
                        <FacebookOutlinedIcon
                            sx={{ width: '3.6rem', height: '3.6rem', color: 'primary.main' }} />
                    </IconButton>
                    <IconButton sx={{ backgroundColor: 'primary.main', marginTop: '.2rem', marginRight: '.5rem' }}>
                        <XIcon
                            sx={{ width: '2rem', height: '2rem', color: 'white' }} />
                    </IconButton>
                    <IconButton sx={{ backgroundColor: 'primary.main', marginTop: '.2rem' }}>
                        <InstagramIcon
                            sx={{ width: '2rem', height: '2rem', color: 'white' }} />
                    </IconButton>
                </Box>
                <Box sx={{ display: 'flex',flexDirection:'column' }}>
                    <Typography color="secondary" variant="h5">Dirección</Typography>
                    <Typography>Donec enim nec nec odio a sit. Malesuada egestas leo sed bibendum risus maecenas sed sit ut. Non mattis ultricies venenatis id mi amet donec viverra.</Typography>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3935.3315635757317!2d-98.74101155147025!3d20.121944512301724!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d109e526646a09%3A0xbefeb273f5dbf98c!2sPlaza%20Ju%C3%A1rez!5e0!3m2!1ses!2smx!4v1768437110652!5m2!1ses!2smx" style={{ border: 0, width: '100%', height: '20rem' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Box>
            </Box>
        </Box>
    );
}

