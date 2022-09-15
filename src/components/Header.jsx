import { AppBar,Container,Divider,Toolbar,Typography,IconButton,Button } from "@mui/material";
import { Box } from "@mui/system";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import DraftsRoundedIcon from '@mui/icons-material/DraftsRounded';
import React from "react";


function Header (){
    return(
        <div>
            <Box >
                <AppBar position="fixed" className="Nav">
                    <Toolbar>
                    <div style={{flexGrow:1,display:'flex',alignItems:'center'}}><DraftsRoundedIcon sx={{color:'purple'}}/>
                    <h3 style={{color:'black'}}>Estatery</h3>
                    </div>      
                            <Button active className="Navbutton" >Rent</Button>
                            <Button className="Navbutton" >Buy</Button>
                            <Button className="Navbutton" >Sell</Button>
                            <Button className="Navbutton" >Manage Property
                            <KeyboardArrowDownRoundedIcon/>
                                </Button>
                            <Button className="Navbutton">Resources
                                <KeyboardArrowDownRoundedIcon/>
                            </Button>    
                        <div style={{flexGrow:6,display:'flex',justifyContent:"flex-end"}}>
                        <Button variant="outlined" sx={{right:20}}>Login</Button>
                        <Button variant ="contained">Sign up</Button>
                        </div>

                    </Toolbar>
                    <Divider/>
                </AppBar>
            </Box>

        </div>
    );
}
export default Header;