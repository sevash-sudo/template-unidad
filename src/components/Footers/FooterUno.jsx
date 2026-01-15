import { Typography, Box, Divider, IconButton } from "@mui/material";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
export const FooterUno = () => {
    return (
        <Box sx={{
            display: 'flex',
            backgroundColor: 'white',
            paddingTop: '2rem',
            flexDirection:{xs:'column', md:'row'}

        }}>
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography color="primary" variant="h3">
                    Contacto
                </Typography>

            </Box>
            <Box
                sx={{ width: '3px', backgroundColor: 'primary.main' }}
            />
            <Box sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                padding: '1.5rem'
            }}>
                <Typography color="secondary" variant="h5">Dirección</Typography>
                <Typography>Donec enim nec nec odio a sit. Malesuada egestas leo sed bibendum risus maecenas sed sit ut. Non mattis ultricies venenatis id mi amet donec viverra.</Typography>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3935.3315635757317!2d-98.74101155147025!3d20.121944512301724!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d109e526646a09%3A0xbefeb273f5dbf98c!2sPlaza%20Ju%C3%A1rez!5e0!3m2!1ses!2smx!4v1768437110652!5m2!1ses!2smx" style={{ border: 0, width: '100%', height: '20rem' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <Box>
                    <Typography color="secondary">
                        Correo electrónico
                    </Typography>
                    <Typography>mailnombre@gmail.com</Typography>
                </Box>
                <Box>
                    <Typography color="secondary">
                        Teléfono
                    </Typography>
                    <Typography>771 00 0000</Typography>
                </Box>
                <Box>
                    <Typography color="secondary">
                        Redes Sociales
                    </Typography>
                    

                    <IconButton sx={{}}>
                        <FacebookOutlinedIcon 
                        sx={{width:'3.6rem', height:'3.6rem', color:'primary.main'}}/>
                    </IconButton>
                    <IconButton sx={{backgroundColor:'primary.main', marginRight:'1rem'}}>
                        <XIcon
                        sx={{width:'2rem', height:'2rem', color:'white'}}/>
                    </IconButton>
                    <IconButton sx={{backgroundColor:'primary.main'}}>
                        <InstagramIcon
                        sx={{width:'2rem', height:'2rem', color:'white'}}/>
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
}