import React from 'react';
import {  AppBar, Toolbar, Typography } from '@material-ui/core';
import styles from './Header.module.css';
export const Header = () => {
    return (
        <div className={styles.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" className={styles.title}>
                         Covid-19 Tracker 
                    </Typography>
                    {/* <Avatar><img src={logo} alt="Logo" /></Avatar> */}
                    <Typography variant="h6">Saqib Hussain</Typography>
                    
                    <Typography variant="h6">
                        <a href="https://github.com/SaqibHussain06"> Github </a>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
