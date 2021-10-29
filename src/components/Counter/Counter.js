import { Button, Grid, Paper, ButtonGroup } from "@material-ui/core";
import { useReducer } from "react";
import "./style.css";

export const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className={"counter"}>
      <Paper elevation={24}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className={"counter-display"}>
              <h2>{state.count}</h2>
            </div>
          </Grid>
          <Grid item xs={12}>
            <ButtonGroup>
              <Button
                onClick={() => dispatch({ type: COUNTER_ACTION.DECREMENT })}
                disabled={state.count === 0}
              >
                -
              </Button>
              <Button
                onClick={() => dispatch({ type: COUNTER_ACTION.INCREMENT })}
              >
                +
              </Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={() => dispatch({ type: COUNTER_ACTION.RESET })}
              variant={"outlined"}
              color={"secondary"}
              disabled={state.count === 0}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case COUNTER_ACTION.INCREMENT:
      return { ...state, count: state.count + 1 };
    case COUNTER_ACTION.DECREMENT:
      return { ...state, count: state.count - 1 };
    case COUNTER_ACTION.RESET:
      return { ...state, count: 0 };
    default:
      throw new Error("smth went wrong");
  }
};

export const COUNTER_ACTION = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET"
};
