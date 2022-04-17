import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Fade from '@mui/material/Fade';

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
  const time = props.index * 200
  
  // Item
  const item = <Item elevation={10} className='outline' sx={{backgroundColor: colorOutcome[props.outcome], zIndex:100 }}> 
                  {props.letter}
               </Item>
  
  // Suare
  const square = <Fade in={true} appear={true}
                  style={{ transitionDelay: true ? time.toString()+'ms' : '0ms' }}
                  timeout={{ appear:1200, enter: 1200, exit: 1200}} >
                      {item}
                 </Fade>

  return (
    <>      
        {props.animation && (props.trial===props.placeholder+1) && square}
        {!props.animation && (props.trial===props.placeholder+1) && square}
        {(props.trial!==props.placeholder+1) && item}
     </>
  );
}

export default CustomPaper;


  // import "./CustomPaper.css";
  // import { CSSTransition } from "react-transition-group";
  // Empty item
  // const empty = <Item elevation={10} className='outline' sx={{backgroundColor: colorOutcome['base'], zIndex:-1 }}> </Item>
  

  // const front = <CSSTransition
  //                   in={props.animation}
  //                   timeout={250 * props.index}
  //                   classNames="front-face-transition"
  //                 >
  //                   <>
  //                   {item}
  //                   </>
  //                 </CSSTransition>

  // const back =  <CSSTransition
  //                   in={!props.animation}
  //                   timeout={2000 * props.index}
  //                   classNames="back-face-transition"
  //                 ></CSSTransition>