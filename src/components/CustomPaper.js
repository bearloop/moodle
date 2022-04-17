import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Zoom from '@mui/material/Zoom';

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
  
  const colorOutcome = {'success':'#0fa641','base':'#1a1a1a','notQuite':'#d1a754'}
  
  // Time (ms)
  const time = props.index * 250
  
  const item = <Item elevation={10} className='outline' sx={{backgroundColor: colorOutcome[props.outcome]}}> 
                  {props.letter}
               </Item>

  const square = <Zoom in={true} style={{ transitionDelay: true ? time.toString()+'ms' : '0ms' }}>
                    {item}
               </Zoom>

  return (
    <>
      {props.animation && (props.trial===props.placeholder+1) && square}
      {!props.animation && (props.trial===props.placeholder+1) && square}
      {(props.trial!=props.placeholder+1) && item}
     </>
  );
}

export default CustomPaper;


   