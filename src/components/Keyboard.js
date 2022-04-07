import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import onDelete from '../utils/ToDelete';
import keysClicked from '../utils/OnKeyPress';
import wasClicked from '../utils/KeysClicked';

function Keyboard (props) {

    function figureEvent (lastEvent) {
        console.log('Figure event', lastEvent)
        // Handle backspace
        if (lastEvent === 'BACKSPACE') {
           
            const new_sum = props.summary
            const del = onDelete(props.currentWord)
            console.log('In backspace', del)
            new_sum[props.trial] = del
            props.setSummary(new_sum)
            props.setWord(del)
        }
        // Handle enter
        // Not implemented - TO DO?

        // Handle other characters
        else {
            const dataBack = keysClicked(props.currentWord, lastEvent)
            
            if (dataBack===false) {
                props.setSummary(props.summary)
            }
            else  {
                const new_sum = props.summary
                new_sum[props.trial] = dataBack
                props.setSummary(new_sum)
                props.setWord(dataBack)
            }   
        }
    }

    const handleClick = (event) => {
        figureEvent(event.target.firstChild.data)
    }
    
    const isPressed = {true:"contained",false:"outlined"}
    
    return (
    
        <Box sx={{paddingY:2, display: 'flex', flexDirection: 'column', alignItems: 'center', '& > *': { m: 1}, backgroundColor:'#1a1a1a'}}>
        <ButtonGroup  variant="outlined" size='large' sx={{ borderColor: 'white' }}>
            <Button  onClick={handleClick} sx={{marginX:0}} variant={isPressed[wasClicked(props.trial, props.summary, "Q")]}>Q</Button>
            <Button  onClick={handleClick} sx={{marginX:0}} variant={isPressed[wasClicked(props.trial, props.summary, "W")]}>W</Button>
            <Button  onClick={handleClick} sx={{marginX:0}} variant={isPressed[wasClicked(props.trial, props.summary, "E")]}>E</Button>
            <Button  onClick={handleClick} sx={{marginX:0}} variant={isPressed[wasClicked(props.trial, props.summary, "R")]}>R</Button>
            <Button  onClick={handleClick} sx={{marginX:0}} variant={isPressed[wasClicked(props.trial, props.summary, "T")]}>T</Button>
            <Button  onClick={handleClick} sx={{marginX:0}} variant={isPressed[wasClicked(props.trial, props.summary, "Y")]}>Y</Button>
            <Button  onClick={handleClick} sx={{marginX:0}} variant={isPressed[wasClicked(props.trial, props.summary, "U")]}>U</Button>
            <Button  onClick={handleClick} sx={{marginX:0}} variant={isPressed[wasClicked(props.trial, props.summary, "I")]}>I</Button>
            <Button  onClick={handleClick} sx={{marginX:0}} variant={isPressed[wasClicked(props.trial, props.summary, "O")]}>O</Button>
            <Button  onClick={handleClick} sx={{marginX:0}} variant={isPressed[wasClicked(props.trial, props.summary, "P")]}>P</Button>
        </ButtonGroup>
        <ButtonGroup variant="outlined" size='large' color='primary'>
            <Button  onClick={handleClick} variant={isPressed[wasClicked(props.trial, props.summary, "A")]}>A</Button>
            <Button  onClick={handleClick} variant={isPressed[wasClicked(props.trial, props.summary, "S")]}>S</Button>
            <Button  onClick={handleClick} variant={isPressed[wasClicked(props.trial, props.summary, "D")]}>D</Button>
            <Button  onClick={handleClick} variant={isPressed[wasClicked(props.trial, props.summary, "F")]}>F</Button>
            <Button  onClick={handleClick} variant={isPressed[wasClicked(props.trial, props.summary, "G")]}>G</Button>
            <Button  onClick={handleClick} variant={isPressed[wasClicked(props.trial, props.summary, "H")]}>H</Button>
            <Button  onClick={handleClick} variant={isPressed[wasClicked(props.trial, props.summary, "J")]}>J</Button>
            <Button  onClick={handleClick} variant={isPressed[wasClicked(props.trial, props.summary, "K")]}>K</Button>
            <Button  onClick={handleClick} variant={isPressed[wasClicked(props.trial, props.summary, "L")]}>L</Button>
        </ButtonGroup>
        <ButtonGroup variant="outlined" size='large' color='primary'>
            {/* <Button  onClick={handleClick} variant="outlined">ENTER</Button> */}
            <Button  onClick={handleClick} variant={isPressed[wasClicked(props.trial, props.summary, "Z")]}>Z</Button>
            <Button  onClick={handleClick} variant={isPressed[wasClicked(props.trial, props.summary, "X")]}>X</Button>
            <Button  onClick={handleClick} variant={isPressed[wasClicked(props.trial, props.summary, "C")]}>C</Button>
            <Button  onClick={handleClick} variant={isPressed[wasClicked(props.trial, props.summary, "V")]}>V</Button>
            <Button  onClick={handleClick} variant={isPressed[wasClicked(props.trial, props.summary, "B")]}>B</Button>
            <Button  onClick={handleClick} variant={isPressed[wasClicked(props.trial, props.summary, "N")]}>N</Button>
            <Button  onClick={handleClick} variant={isPressed[wasClicked(props.trial, props.summary, "M")]}>M</Button>
            <Button  onClick={handleClick} variant="outlined">BACKSPACE</Button>
        </ButtonGroup>
        </Box>

    )
}

export default Keyboard;