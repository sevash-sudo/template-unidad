import { Box, Typography } from "@mui/material";
import { 
    NavMain, 
    CarrouselUno, CarrouselDos, CarrouselTres, 
    InfoGeneralUno, InfoGeneralDos,InfoGeneralTres, 
    NoticiasUno, NoticiasDos, NoticiasTres
} from '@components'

export const Inicio = () => {
    return (
        <Box>
            <NavMain />

            <CarrouselTres />
            
            <InfoGeneralTres/>
            
            <NoticiasTres/>
            
        </Box>
    );
}