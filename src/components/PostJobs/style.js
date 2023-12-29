export const style = {
  profileWrapper: { display: "flex", justifyContent: "center" },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "40%",
  },
  buttonDiv: { display: "flex", flexDirection: "row", gap: "40%" },
  button: {
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
  vacancy: {
    fontWeight: "600",
    fontSize: "24px",
    marginBottom: "30px",
  },
};
