import { Autocomplete, Button, Divider, IconButton, InputBase, Paper, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";


export const InputBusqueda = () => {
    return (
        <Paper component={'form'} elevation={3}
            sx={{  display: 'flex', alignItems: 'center', width:{sm:'100%',md:'50%'}  }}>
            <IconButton sx={{ p: '10px' }} aria-label="menu">
                <SearchIcon />
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Buscar"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <SelectStand/>

            <Button variant="contained">
                Buscar
            </Button>
        </Paper>
    );
}

const SelectStand = () => {
    const [selectUnidad, setSelectUnidad] = useState("");
    const MenuSelect = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 }
    ];

    return (
        <select value={selectUnidad}  style={{
            
            height:'100%'
        }}>
            <option value={""}> Selecciona Secretaría</option>
            {MenuSelect.map((item,index) => (
                <option key={`opciones${index}`} value={item.year}>
                    {item.label}
                </option>
            ))}
        </select>
    );
}
const SelectUnidad = () => {

    return (
        <Autocomplete
            disablePortal
            options={[
                { label: 'The Shawshank Redemption', year: 1994 },
                { label: 'The Godfather', year: 1972 },
                { label: 'The Godfather: Part II', year: 1974 },
                { label: 'The Dark Knight', year: 2008 },
                { label: '12 Angry Men', year: 1957 }
            ]}
            renderInput={(params) => <TextField variant="standard" sx={{ width: '20rem' }} {...params} label="Unidad Administrativa" />}
        />
    );
}