import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import DrawerMenu from './DrawerMenu'

function NavBar(props) {
  
  
  const handleDrawerState = (open) => (event) => {
    console.log('handleDrawerState - before change',props.openDrawer, 'vs', open)
    props.setOpenDrawer(open)
  }

//   function handleDrawerState(open) {
//     function handler() {

//       console.log('handleDrawerState - before change',openDrawer, 'vs', open)
//       setOpenDrawer(open)
//   }
//   return handler
// }

  return (
    <AppBar>
      <Toolbar>
        
        <IconButton size="large" edge="start" color="primary">
          <MenuIcon onClick = {handleDrawerState(true)}/>
        </IconButton>
        
        <Drawer anchor='left' open={props.openDrawer} onClose={handleDrawerState(false)}>
          <DrawerMenu handleKeyPress={props.handleKeyPress}/>
        </Drawer>
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1  }} color='primary'>
            Moodle
        </Typography>

        
      </Toolbar>
    </AppBar>
    )
}

export default NavBar;
