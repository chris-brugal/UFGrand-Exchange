import { makeStyles } from '@material-ui/core/styles';
//import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

// const theme = createMuiTheme({ 
//   palette: { 
//     primary: {
//       main: '#576490'
//     }
//   } 
// })


export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
  Button: {
    primary: "#ffffff"
  },
}));