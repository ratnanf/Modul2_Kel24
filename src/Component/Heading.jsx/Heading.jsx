import React, {} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'


const ButtonLink = styled.button
`
    color: white;
     width: 70px;
     height: 30px;
     border:none;
     border:solid 1px white;
     border-radius: 10px;
     background: rgba(255, 255, 255,0);
     font-size: 12px;
     margin: 10px 20px;
     &:hover {
        border:solid 2px black;
        cursor: pointer;
        
      }
`

const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
      
    },
    title: {
      flexGrow: 0.9,
      fontFamily:
          'poppins',
          fontWeight: 50,
    },
  }));


export default function Heading(){
    const classes = useStyles();

    return(
        <div>
            <AppBar style={{ background: '#000' }}>
                <Toolbar >
                    <Typography  className={classes.title}>
                        <b>Kelompok 24</b>
                    </Typography>
                    <ButtonLink>
                            Ratna
                    </ButtonLink>
                    <ButtonLink >
                            Ayu
                    </ButtonLink>
                </Toolbar>
            </AppBar>
        </div>
       
    )
}

