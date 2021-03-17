import { faFacebookF, faGithub, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { AuthenticationContext, AuthenticationProvider } from '../AuthenticationContext/AuthenticationContext';

const useStyles = makeStyles((theme) => ({
    root:{
        borderTop:'1px solid gray',
        marginTop:15,
        textAlign:'center'
    },
    brandIcons:{
        margin:'10px 25px',
        fontSize:30,
        color:theme.palette.primary.main,
        transition:'.3s linear',
        cursor:'pointer',
        '&:hover':{
            transform:'translateY(-2px)'
        }
    }
}));
const SignUpWithOthers = () => {
    const {googleSignInHandler, fbSignInHandler} = useContext(AuthenticationContext)
    const {brandIcons, root} = useStyles();
    return (
        <div className={root}>  
            <Typography variant="h6">or sign up with</Typography>
            <Grid>
                <FontAwesomeIcon onClick={googleSignInHandler} className={brandIcons} icon={faGoogle} />
                <FontAwesomeIcon onClick={fbSignInHandler} className={brandIcons} icon={faFacebookF} />
                <FontAwesomeIcon className={brandIcons} icon={faTwitter} />
                <FontAwesomeIcon className={brandIcons} icon={faGithub} />
            </Grid>
        </div>
    );
};

export default SignUpWithOthers;