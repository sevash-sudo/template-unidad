import { Box, Typography } from "@mui/material";
import { 
    NavMain, 
    CarrouselUno, CarrouselDos, CarrouselTres, 
    InfoGeneralUno, InfoGeneralDos,InfoGeneralTres, 
    NoticiasUno
} from '@components'

export const Inicio = () => {
    return (
        <Box>
            <NavMain />
            <CarrouselTres />
            <InfoGeneralTres/>
            <NoticiasUno/>
        </Box>
    );
}