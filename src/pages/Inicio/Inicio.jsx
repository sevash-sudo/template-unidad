import { Box, Typography } from "@mui/material";
import { CarrouselUno ,CarrouselDos,NavMain} from '@components'

export const Inicio = () => {
    return (
        <Box>
            <NavMain/>
            <CarrouselUno />
            <CarrouselDos />
            
        </Box>
    );
}