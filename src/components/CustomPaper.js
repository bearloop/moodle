import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

function CustomPaper(props) {

    const Item = styled(Paper)(({ theme }) => ({
        
        color: '#ffffff',
        backgroundColor: '#1a1a1a',
        height: 55,
        fontWeight:900,
        fontSize:25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        verticalAlign: "middle",
        maxWidth:"110px",
        minWidth:"55px",
        border: '10px',
        borderColor: '#ffffff'
      }));
//   console.log(letter)
  const colorOutcome = {'success':'#0fa641','base':'#1a1a1a','notQuite':'#d1a754'}

  return (
    <Item elevation={10} className='outline' sx={{backgroundColor: colorOutcome[props.outcome]}}> 
        {props.letter}
    </Item> 
    
  );
}
export default CustomPaper;