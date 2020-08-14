import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  container: {
    backgroundColor: "whitesmoke",
    marginTop: "2vh",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
  },
  backBtn: {
    textDecoration: "none",
  },
  emptyPaper: {
    backgroundColor: "whitesmoke",
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
