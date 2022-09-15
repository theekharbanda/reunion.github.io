import { Box, Container, Stack } from "@mui/system";
import { Divider, Grid, TextField, Button, InputLabel, MenuItem, Select, FormControl } from '@mui/material'
import React from "react";
import HouseCard from "./HouseCard";


function Body() {
    return (
        < Container sx={{ marginTop: "10vh" }}>
            <Box sx={{ display: 'flex', marginTop: '5vh', alignItems: 'baseline' }}>
                <h1 style={{ flexGrow: 1 }}>Search properties to rent</h1>
                <TextField size="small" label="Search with Search Bar" variant="outlined" />

            </Box>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                divider={<Divider orientation="vertical" flexItem />}
                sx={{ justifyContent: 'space-between', marginTop: '5vh', flexWrap: 'wrap', boxShadow: '-1px 0px 20px 0px #efe8e8', padding: '10px 10px 10px 20px', borderRadius: '10px' }}

            >
                <div>
                    <h3>Location</h3>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">City</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Area"
                            defaultValue={10}
                            sx={{fontWeight:'700',fontFamily:"poppins"}}
                            >
                            <MenuItem value={10}>Agra</MenuItem>
                            <MenuItem value={20}>Delhi</MenuItem>
                            <MenuItem value={30}>Mumbai</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div>
                    <h3>Price</h3>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Price</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Price"
                            defaultValue={20}
                            sx={{ fontWeight: '700', fontFamily: "poppins" }}
                            >
                            <MenuItem value={10}>1000-2000</MenuItem>
                            <MenuItem value={20}>2000-3000</MenuItem>
                            <MenuItem value={30}>3000-4000</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <h3>When
                        <input type="date" name="" className="dateInp" id="" />
                    </h3>
                </div>

                <div>
                    <h3>Property Type</h3>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Type"
                            defaultValue={10}
                            sx={{ fontWeight: '700', fontFamily: "poppins" }}

                        >
                            <MenuItem value={10}>House</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <Button style={{ fontFamily: "poppins" }} variant="contained">Search</Button>
            </Stack>
            <Box className="houses" sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', overflowY: 'scroll' }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 6 }}>
                    {Array.from(Array(8)).map((_, index) => (
                        <Grid item xs={2} ms={4} >
                            <HouseCard />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
}
export default Body;