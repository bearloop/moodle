import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function PopUp(props) {

  const handleClose = (event, reason) => {
    props.setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>

      <Snackbar
        anchorOrigin={{ horizontal: "middle", vertical: "top"}}
        open={props.open}
        autoHideDuration={3500}
        message={props.message.text}
        onClose={handleClose}
      > 
      
        <Alert  severity={props.message.severity}> {props.message.text} </Alert>

      </Snackbar>

    </Stack>
  );
}
export default PopUp