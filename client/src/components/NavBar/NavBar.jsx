import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button, requirePropFactory } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { IconButton, InputBase, MenuItem, Menu } from '@material-ui/core';
import { useSelector } from 'react-redux';
import useStyles from './styles';
import logo from './favicon.ico';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
// import posts from '../Posts/Posts';

const NavBar = () => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
    
        history.push('/auth');
    
        setUser(null);
      };

      useEffect(() => {
        const token = user?.token;
    
        if (token) {
          const decodedToken = decode(token);
    
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
      }, [location]);

    const menuId = 'primary-search-account-menu';

    return (
        <AppBar position="sticky">
            <Toolbar>
                <IconButton
                    edge="start"
                    // className={classes.menuButton}
                    // color="inherit"
                    // aria-label="open drawer"
                >
                    <img src={logo} width='40'/>
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
                    <Toolbar className={classes.toolbar}>
                        {user?.result ? (
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                        </div>
                        ) : (
                        <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                        )}
                    </Toolbar>
                </div>
            </Toolbar>
        </AppBar>
    )
};

export default NavBar; 