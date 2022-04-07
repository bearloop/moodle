import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#71737A',//5090D3 40434d
        contrastText: '#fff'
      },
      secondary: {
        main: '#96cbe4',
        contrastText: '#424242'
      },
      background: {
        default: '#1a1a1a',
        paper: '#eaeaef'
      }
    },
    //https://stackoverflow.com/questions/51265838/mui-drawer-set-background-color?rq=1
    components: {
      MuiDrawer:{
        styleOverrides:{
          paper:{
            backgroundColor: '#eaeaef'
          }
        }
      },
      MuiAppBar:{
        styleOverrides:{
          colorPrimary:{
            backgroundColor: '#1a1a1a'
          }
        }
      }
    }
  })

export default theme;