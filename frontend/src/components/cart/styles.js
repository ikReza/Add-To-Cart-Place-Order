import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "2%",
    paddingRight: "2%",
  },
  deleteBtn: {
    color: "#C3073F",
    textTransform: "none",
  },
  productAdd: {
    height: "56vh",
    overflow: "auto",
  },
  bottomNav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "2%",
    paddingRight: "2%",
  },
  modal: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "2%",
  },
});
