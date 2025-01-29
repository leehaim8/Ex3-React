import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchInput() {
    const [query, setQuery] = useState('');

    const searchCarInput = {
        "& .MuiOutlinedInput-root": {
            borderRadius: "70px",
            border: "1px solid rgba(195, 212, 233, 0.40)",
        },
        "& .MuiInputLabel-root": {},
        width: "492px",
        marginLeft: "190px",
        "@media (max-width: 1420px)": {
            width: "300px",
            marginLeft: "100px"
        },
        "@media (max-width: 670px)": {
            width: "220px",
            marginLeft : "50px"
        }
    }

    const handleSearch = () => {
        console.log('Searching for car name:', query);
    };

    return (
        <TextField
            label="Search by car name"
            variant="outlined"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            sx={searchCarInput}
            slotProps={{
                input: {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleSearch}>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                },
            }}
        />
    );
}

export default SearchInput;
