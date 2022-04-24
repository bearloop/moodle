import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function DrawerMenu(props) {
    const clickedNewGame = (param) => (event) => {
        
        if (param === 'New Game'){
          const adjustedEvent = {'key':'NEW-GAME'}
          props.handleKeyPress(adjustedEvent)
        }
        else if (param === 'About'){
            // DO SOMETHING ELSE
        }

    }
    
    return (
        <Box >
       
            <List>
            {['About', 'New Game'].map((text, index) => (
              <ListItem button key={index} onClick={clickedNewGame(text)}>
                <ListItemText sx={{marginX:8, marginY:2, display:'flex', justifyContent: 'center', alignItems: 'center'}} primary={text}/>
              </ListItem>))}
            </List>
           
        </Box>
    )
}

export default DrawerMenu;