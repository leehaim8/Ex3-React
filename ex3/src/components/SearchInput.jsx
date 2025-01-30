import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchInput(props) {
    const [searchInput, setSearchInput] = useState('');

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchInput(value);
        props.onSearch(value);
    };

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
            marginLeft: "50px"
        }
    }

    return (
        <TextField
            label="Search by car name"
            variant="outlined"
            value={searchInput}
            onChange={handleSearch}
            sx={searchCarInput}
            slotProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={() => props.onSearch(searchInput)}>
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
}

export default SearchInput;
