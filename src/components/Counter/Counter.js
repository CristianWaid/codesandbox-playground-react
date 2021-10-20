import { useReducer, useState } from "react";
import { Grid, Button, Paper, Switch, Snackbar } from "@material-ui/core";
import { counterReducer, counterActions } from "./counterReducer";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, {
    count: 0,
    negativeNumbers: false
  });
  const [wasReseted, setWasReseted] = useState(false);

  const handleResetClick = () => {
    dispatch({ type: counterActions.RESET });
    setWasReseted(true);
  };

  const handleClose = () => {
    setWasReseted(false);
  };

  return (
    <Paper elevation={12}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <h2>{state.count}</h2>
        </Grid>
        <Grid item>
          <Button
            variant={"contained"}
            color={"primary"}
            onClick={() => dispatch({ type: counterActions.DECREMENT })}
          >
            -
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant={"contained"}
            color={"primary"}
            onClick={() => dispatch({ type: counterActions.INCREMENT })}
          >
            +
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant={"outlined"}
            disabled={state.count === 0}
            color="secondary"
            onClick={handleResetClick}
          >
            Reset
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Switch
            checked={state.negativeNumbers}
            onChange={() =>
              dispatch({ type: counterActions.TOGGLENEGATIVENUMBERS })
            }
            label="enable negative numbers"
            color="secondary"
          />
        </Grid>
      </Grid>
      <Snackbar open={wasReseted} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Counter was reseted
        </Alert>
      </Snackbar>
    </Paper>
  );
};
