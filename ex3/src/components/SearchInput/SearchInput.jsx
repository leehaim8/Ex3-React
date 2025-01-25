import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './SearchInput.css';

function SearchInput() {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        console.log('Searching for car name:', query);
    };

    return (
        <div className="search_car">
            <TextField
                label="Search by car name"
                variant="outlined"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="search_car_input"
                sx={{
                    "& .MuiOutlinedInput-root": {
                        borderRadius: "70px",
                        border: "1px solid rgba(195, 212, 233, 0.40)",
                    },
                    "& .MuiInputLabel-root": {},
                    width: "492px"
                }}
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
        </div>
    );
}

export default SearchInput;
