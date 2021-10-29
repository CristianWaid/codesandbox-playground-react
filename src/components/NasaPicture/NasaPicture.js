import { Paper } from "@material-ui/core";
import "./style.css";

export const NasaPicture = () => {
  return (
    <div className={"nasa-container"}>
      <Paper elevation={24}>
        <div className={"nasa"}>
          <h2> Here will be the Nasa Picture of the day</h2>
        </div>
      </Paper>
    </div>
  );
};
