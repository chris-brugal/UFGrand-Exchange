import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button, requirePropFactory } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { IconButton, InputBase, MenuItem, Menu } from '@material-ui/core';
import { useSelector } from 'react-redux';
import useStyles from './styles';
import logo from './favicon.ico';
// import posts from '../Posts/Posts';

const NavBar = () => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
            <MenuItem onClick={handleMenuClose}>Log Out</MenuItem>
        </Menu>
    );

    return (
        <AppBar position="sticky">
            <Toolbar>
                <IconButton
                    edge="start"
                    // className={classes.menuButton}
                    // color="inherit"
                    // aria-label="open drawer"
                >
                    <img src={logo} width='40' onclick='() => {
                        window.scrollTo(0,0)
                    }'/>
                </IconButton>
                <Typography className={classes.title} variant="h6" noWrap>
                    Grand Exchange
                    </Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Find Classes"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {

                                // posts.forEach((post) => {
                                //     if (post.courseNumber === classes.inputInput) {

                                //     }
                                // })
                            }
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>

    )
};

export default NavBar; 