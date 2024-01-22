export const style = {
  profile: {
    width: "100px",
    height: "100px",
    marginBottom: "15px",
    marginTop: "15px",
  },
  buttonDiv: { display: "flex", flexDirection: "row", gap: "40%" },
  button: {
    color: "#fff",
    background: "#7433ff",
    width:{xs:"60%",sm:"60%",md:"30%",lg:"30%"},
    fontWeight: "600",
    textTransform: "lowercase",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#330066",
    },
  },
  btn: {
    color: "#fff",
    background: "#7433ff",
    width: "30%",
    fontWeight: "600",
    textTransform: "lowercase",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#330066",
    },
  },
  profileWrapper: { display: "flex", justifyContent: "center" },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
  },
  profileContainer: {
    display: "flex",
    justifyContent: "center",
  },
};
