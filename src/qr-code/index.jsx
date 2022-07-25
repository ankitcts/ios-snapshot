import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import QrCodeIcon from '@material-ui/icons/';

import Alert from '@mui/material/Alert';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Generator} from './generator.jsx';
import { observer } from "mobx-react" 

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export  const SignIn =  observer((props) => {
  const classes = useStyles();

  let Message = null
  if(props.showNotification)  {
    Message = <Alert >{`Post Call Received: ${JSON.stringify(props.notificationMessage)}`}</Alert>
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {Message}
        <Avatar className={classes.avatar}>
        </Avatar>
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={props.onSubscriptionClick}
            disabled={props.isEnabled}
          >
            <span>Subscribe To Post Api Updates </span>
          </Button>
        <Typography component="h1" variant="h5">
          Enter QR Code Generator Value
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="enter-text-value"
            label="QR Code Generator Value"
            name="url-value"
            autoComplete="url-value"
            autoFocus
            value={props.value}
            onChange={(e)=>props.onChange(e.target.value)}
          />
         
          {/* <If condition={props.available}> */}
              <Generator value={props.qrCode}/>
          {/* </If> */}
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
  );
});