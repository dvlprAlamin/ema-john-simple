import { Box, Typography } from '@material-ui/core';
import React from 'react';

const Footer = () => {
    return (
      <Box my={3}>
          <Typography variant="body2" color="textSecondary" align="center">
            Copyright &copy; Ema John mini
            {' '}{new Date().getFullYear()} all right reserved.
        </Typography>
      </Box>  
    );
};

export default Footer;