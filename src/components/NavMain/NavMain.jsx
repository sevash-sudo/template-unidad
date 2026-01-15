import { Typography, Box,Button } from "@mui/material";

export const NavMain =()=>{
    return (
        <Box
                component={'nav'}
                sx={{
                    background: (theme) => theme.gradients.primary,
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingInline: '1.5rem',
                    position:'sticky',
                    top:0,
                    zIndex:10
                }}
            >
                <Box>
                    <Typography variant="h5" color="secondary">Titulo</Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <Button sx={{ color: 'white' }} >
                        Item1
                    </Button>
                    <Button sx={{ color: 'white' }} >
                        Item2
                    </Button>
                    <Button sx={{ color: 'white' }} >
                        Item3
                    </Button>
                    <Button sx={{ color: 'white' }} >
                        Item4
                    </Button>
                </Box>
            </Box>
    );
}