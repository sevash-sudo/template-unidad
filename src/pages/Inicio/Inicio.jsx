import { Box, Typography } from "@mui/material";
import { 
    NavMain, 
    CarrouselUno, CarrouselDos, CarrouselTres, 
    InfoGeneralUno, InfoGeneralDos,InfoGeneralTres, 
    NoticiasUno, NoticiasDos, NoticiasTres,
    BannersUno, BannersDos, BannersTres,
    FooterUno,FooterDos,FooterTres
} from '@components'

export const Inicio = () => {

    return (
        <Box>
            <NavMain />
            <CarrouselTres />            
            <InfoGeneralTres/>            
            <NoticiasUno/>
            <BannersTres/>
            <FooterDos/>
            
        </Box>
    );
}