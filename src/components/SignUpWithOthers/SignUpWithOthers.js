import { faFacebookF, faGithub, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

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
        '&:hover':{
            transform:'translateY(-2px)'
        }
    }
}));
const SignUpWithOthers = () => {
    const {brandIcons, root} = useStyles();
    return (
        <div className={root}>  
            <Typography variant="h6">or sign up with</Typography>
            <Grid>
                <FontAwesomeIcon className={brandIcons} icon={faGoogle} />
                <FontAwesomeIcon className={brandIcons} icon={faFacebookF} />
                <FontAwesomeIcon className={brandIcons} icon={faTwitter} />
                <FontAwesomeIcon className={brandIcons} icon={faGithub} />
            </Grid>
        </div>
    );
};

export default SignUpWithOthers;