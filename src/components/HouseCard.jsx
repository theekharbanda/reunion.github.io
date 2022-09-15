import React from "react";
import { Card, Typography, CardContent, CardMedia, CardActions, Button, Divider, IconButton } from "@mui/material";
import image from "../data/image.jpg";
import BedRoundedIcon from '@mui/icons-material/BedRounded';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import CropRoundedIcon from '@mui/icons-material/CropRounded';
import { BathroomOutlined } from "@mui/icons-material";

export default function HouseCard() {
    return (
        <>
            <Card className="Card" sx={{ maxWidth: 280 }}>
                <CardMedia
                    component="img"
                    height="180"
                    image={image}
                    alt="green iguana"
                />
                <CardContent >
                    <Typography style={{ fontFamily: "Poppins" }} gutterBottom variant="h5" component="div">
                        $2095<span style={{ fontSize: '13px', fontWeight: '600', color: 'grey' }}>/month</span>
                    </Typography>
                    <Typography style={{ fontFamily: "Poppins" }} gutterBottom variant="h6" component="div">
                        Beverly SpringFields
                    </Typography>
                    <Typography style={{ fontFamily: "Poppins" }} variant="body2" color="text.secondary">
                        F-605,Kamla Nagar,Agra
                    </Typography>
                </CardContent>
                <Divider />
                <CardActions style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <BedRoundedIcon style={{ fontSize: '0.9rem' }}/>
                    <Typography style={{ fontFamily: "Poppins" }} variant="caption" color="text.secondary">3 Beds
                    </Typography>
                    <Typography style={{ fontFamily: "Poppins" }} variant="caption" color="text.secondary">
                        <BathroomOutlined style={{ fontSize: '0.75rem' }} />
                        2 Bathrooms
                    </Typography>
                    <Typography style={{ fontFamily: "Poppins" }} variant="caption" color="text.secondary">
                        <CropRoundedIcon style={{ fontSize: '0.75rem' }} />
                        5*7.5 m<sup>2</sup>
                    </Typography>
                </CardActions>
            </Card>
        </>
    );
}