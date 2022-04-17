import CustomPaper from './CustomPaper'
import { Grid } from '@mui/material';
import checkPosition from '../utils/CheckPosition';

function GridRow(props){
    
    return (
      <Grid container item xs={10} sm={10} columns={10} spacing={2} sx={{display:'flex', justifyContent: 'center'}}>  
        <Grid item  sx={{minWidth:60, minHeight:60, maxHeight:60}}>
        <CustomPaper index={1} trial={props.trial} placeholder={props.placeholder} letter={props.letters.first} animation={props.animation} outcome={checkPosition(props.hiddenWord, props.letters.first, 0, props.trial, props.placeholder, props.letters)}/>
        </Grid>
        <Grid item sx={{minWidth:60, minHeight:60, maxHeight:60}}>
        <CustomPaper index={2} trial={props.trial} placeholder={props.placeholder} letter={props.letters.second} animation={props.animation} outcome={checkPosition(props.hiddenWord, props.letters.second, 1, props.trial, props.placeholder, props.letters)}/>
        </Grid>
        <Grid item  sx={{minWidth:60, minHeight:60, maxHeight:60}}>
        <CustomPaper index={3} trial={props.trial} placeholder={props.placeholder} letter={props.letters.third} animation={props.animation} outcome={checkPosition(props.hiddenWord, props.letters.third, 2, props.trial, props.placeholder, props.letters)}/>
        </Grid>
        <Grid item  sx={{minWidth:60, minHeight:60, maxHeight:60}}>
        <CustomPaper index={4} trial={props.trial} placeholder={props.placeholder} letter={props.letters.fourth} animation={props.animation} outcome={checkPosition(props.hiddenWord, props.letters.fourth, 3, props.trial, props.placeholder, props.letters)}/>
        </Grid>
        <Grid item sx={{minWidth:60, minHeight:60}}>
        <CustomPaper index={5} trial={props.trial} placeholder={props.placeholder} letter={props.letters.fifth} animation={props.animation} outcome={checkPosition(props.hiddenWord, props.letters.fifth, 4, props.trial, props.placeholder, props.letters)}/>
        </Grid>
      </Grid>  
    )
  }

  export default GridRow