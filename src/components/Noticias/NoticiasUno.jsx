import { Box, Typography } from "@mui/material";
import { InputBusqueda } from "@components"

export const NoticiasUno = () => {
    return (
        <Box bgcolor={'white'}>
            <Typography variant="h5" color="secondary" textAlign={'center'}>ÚLTIMAS NOTICIAS</Typography>
            <InputBusqueda />
        </Box>
    );
}