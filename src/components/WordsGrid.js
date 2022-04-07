import { Grid, Divider} from '@mui/material';
import { Box } from '@mui/system';
import Keyboard from './Keyboard';
import GridRow from './GridRow';

function WordsGrid (props) {
    
    return (

      <Box sx={{marginY:10, backgroundColor:'#40434d'}}> 
        <Divider sx={{color:"", marginY:2}}/>
        <Grid container spacing={2} sx={{marginBottom:2}}>
          <GridRow letters={props.summary[1]} hiddenWord={props.hiddenWord} trial={props.trial} placeholder={1}/>
          <GridRow letters={props.summary[2]} hiddenWord={props.hiddenWord} trial={props.trial} placeholder={2}/>
          <GridRow letters={props.summary[3]} hiddenWord={props.hiddenWord} trial={props.trial} placeholder={3}/>
          <GridRow letters={props.summary[4]} hiddenWord={props.hiddenWord} trial={props.trial} placeholder={4}/>
          <GridRow letters={props.summary[5]} hiddenWord={props.hiddenWord} trial={props.trial} placeholder={5}/>
          <GridRow letters={props.summary[6]} hiddenWord={props.hiddenWord} trial={props.trial} placeholder={6}/>
        </Grid>
        
        <Keyboard currentWord={props.word}
                  setWord={props.setWord}
                  setSummary={props.setSummary}
                  summary={props.summary}
                  trial={props.trial}
                  />
      </Box>
    )
}

export default WordsGrid;