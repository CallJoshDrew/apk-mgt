import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";

function App() {
  const [projectList, setProjectList] = useState([{ project: "Project 1" }]);

  const handleProject = (e, index) => {
    const { name, value } = e.target;
    const list = [...projectList];
    list[index][name] = value;
    setProjectList(list);
    console.log(list);
  };
  const handleProjectAdd = () => {
    setProjectList([...projectList, { project: "" }]);
  };
  const handleProjectRemove = (index) => {
    const list = [...projectList];
    list.splice(index, 1);
    setProjectList(list);
  };

  return (
    <form noValidate autoComplete="off">
      <Grid
        container
        justifyContent="flex-end"
        alignItems="center"
        spacing={2}
        sx={{ padding: "10px 0 30px" }}
      >
        {projectList.map((singleProject, index) => (
          <Grid item xs={12} key={index}>
            <TextField
              placeholder={singleProject.project}
              onInput={(e) => handleProject(e, index)}
              label="New Project"
              variant="outlined"
              fullWidth
              focused
            />

            {projectList.length - 1 === index && projectList.length < 4 && (
              <Button
                type="button"
                onClick={handleProjectAdd}
                className="add-btn"
              >
                <span>Add New Task</span>
              </Button>
            )}
            {projectList.length !== 1 && (
              <Button
                type="button"
                onClick={() => handleProjectRemove(index)}
                className="remove-btn"
              >
                <span>Remove</span>
              </Button>
            )}
          </Grid>
        ))}
      </Grid>

      <Grid container>
        <Grid item xs={12}>Output</Grid>
        {projectList &&
          projectList.map((singleProject, index) => (
            <ul key={index}>
              {singleProject.project && <li>testing1</li>}
            </ul>
          ))}
      </Grid>
    </form>
  );
}

export default App;
