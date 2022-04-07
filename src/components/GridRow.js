import CustomPaper from './CustomPaper'
import { Grid } from '@mui/material';
import checkPosition from '../utils/CheckPosition';

function GridRow(props){

    return (
      <Grid container item xs={10} sm={10} columns={10} spacing={2} sx={{display:'flex', justifyContent: 'center'}}>  
        <Grid item  sx={{minWidth:60, minHeight:60, maxHeight:60}}>
        <CustomPaper letter={props.letters.first} outcome={checkPosition(props.hiddenWord, props.letters.first, 0, props.trial, props.placeholder, props.letters)}/>
        </Grid>
        <Grid item sx={{minWidth:60, minHeight:60, maxHeight:60}}>
        <CustomPaper letter={props.letters.second} outcome={checkPosition(props.hiddenWord, props.letters.second, 1, props.trial, props.placeholder, props.letters)}/>
        </Grid>
        <Grid item  sx={{minWidth:60, minHeight:60, maxHeight:60}}>
        <CustomPaper letter={props.letters.third} outcome={checkPosition(props.hiddenWord, props.letters.third, 2, props.trial, props.placeholder, props.letters)}/>
        </Grid>
        <Grid item  sx={{minWidth:60, minHeight:60, maxHeight:60}}>
        <CustomPaper letter={props.letters.fourth} outcome={checkPosition(props.hiddenWord, props.letters.fourth, 3, props.trial, props.placeholder, props.letters)}/>
        </Grid>
        <Grid item sx={{minWidth:60, minHeight:60}}>
        <CustomPaper letter={props.letters.fifth} outcome={checkPosition(props.hiddenWord, props.letters.fifth, 4, props.trial, props.placeholder, props.letters)}/>
        </Grid>
      </Grid>  
    )
  }

  export default GridRow