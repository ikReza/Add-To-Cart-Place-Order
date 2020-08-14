import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  container: {
    height: "5vh",
    width: "100%",
    display: "flex",
  },
  imgCard: {
    height: "5vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 3,
  },
  productImg: {
    height: "5vh",
    width: "auto",
  },
  nameCard: {
    height: "5vh",
    flex: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 10,
  },
  qtyCard: {
    height: "5vh",
    flex: 1,
    fontSize: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  totalPriceCard: {
    height: "5vh",
    flex: 3,
    fontSize: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    color: "#a8180d",
    height: "15px",
    paddingLeft: "5%",
  },
  emptyContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "56vh",
  },
});
