// Utilities imports
import theme from './utils/Theme';
import isValid from './utils/IsValid';
import isValidWord from './utils/IsValidWord'
import PopUp from './utils/PopUp';
import newRandomWord from './utils/NewRandomWord'
import starting_round from './utils/Start'
import onDelete from './utils/ToDelete'
import keysClicked from './utils/OnKeyPress'

// React, CSS and MUI imports
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import {useState} from 'react'
import './App.css';

// Components imports
import WordsGrid from './components/WordsGrid';
import NavBar from './components/NavBar';


function App() {
  // --------------------------------------------------------------------------------------------------------
  // Summary for each round
  const [summary, setSummary] = useState(starting_round())

  // Number for rounds / trials
  const [trial, setTrial] = useState(1)
  
  // Current round word starting with first trial
  const [word, setWord] = useState(summary[trial])
  
  // Randomly select a hidden word
  const [hiddenWord, setHiddenWord] = useState(newRandomWord())//useState('STEER')
//   console.log('Hidden word', hiddenWord)

  // Pop up states
  const [message, setMessage] = useState({'severity':'','text':''})
  const [open, setOpen] = useState(false);
  
  // Open - close drawer states
  const [openDrawer, setOpenDrawer] = useState(false)

  // --------------------------------------------------------------------------------------------------------

  // This function handles keyboard press events and updates the "word" accordingly
  function handleKeyPress (event) {
        // console.log(event)
        const lastEvent = event.key.toUpperCase()
        
        // Handle backspace
        if (lastEvent === 'BACKSPACE') {
            const new_sum = summary
            const del = onDelete(word)
            new_sum[trial] = del
            setSummary(new_sum)
            setWord(del)
        }
        // Handle enter
        else if (lastEvent === 'ENTER') {

            // Update message
            const isl = isValidWord(word, hiddenWord)
            setMessage(isl)
            // console.log(isl)
            
            if (isl['severity']==='success'){
                // console.log('Inside success', isl)
                setHiddenWord( newRandomWord() )
                setTrial(1)
                const new_game = starting_round()
                setSummary(new_game)
                setWord(new_game[1])
            }
            else if (isl['severity']==='warning'){
                // console.log('Inside warning', isl)
                if (trial+1 < 7) {
                    setSummary(summary)
                    setTrial(trial+1)
                    setWord(summary[trial+1])
                }
                else{
                    setHiddenWord( newRandomWord() )
                    setTrial(1)
                    const new_game = starting_round()
                    setSummary(new_game)
                    setWord(new_game[1])
                    setMessage( {'severity': 'error', 'text': 'Tough luck! The hidden word was: '+hiddenWord})
                }
            }
            
            // Open pop up
            setOpen(true)
        
        }
        else if (lastEvent === 'NEW-GAME'){
            
            setMessage({'severity':'info','text':'New game!'})
            setOpen(true)
            setHiddenWord( newRandomWord() )
            setTrial(1)
            const new_game = starting_round()
            setSummary(new_game)
            setWord(new_game[1])
            setOpenDrawer(false)

        }
        // Handle other characters
        else if (isValid(lastEvent)) {
            
            const dataBack = keysClicked(word, lastEvent)

            if (dataBack===false) {
                setSummary(summary)
            }
            else  {
                const new_sum = summary
                new_sum[trial] = dataBack
                setSummary(new_sum)
                setWord(dataBack)
            }      
        }
        // Other
        else {}
  }

  // --------------------------------------------------------------------------------------------------------
  return (
    <div onKeyDown={handleKeyPress} tabIndex="1">
        <ThemeProvider theme={theme}>
        <PopUp open={open}
               setOpen={setOpen}
               message={message}
               />
        <CssBaseline/>
        <NavBar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} handleKeyPress={handleKeyPress}/>
        <WordsGrid word={word}
                   setWord={setWord}
                   summary={summary}
                   setSummary={setSummary}
                   trial={trial}
                   hiddenWord={hiddenWord}/>
        </ThemeProvider>
    </div>
  );
}

export default App;