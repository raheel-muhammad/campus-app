export const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "16px",
    width: { xs: "100%", sm: "50%" },
  },
  border: {
    display: "flex",
    border: "20px solid #B99AFF",
    borderImage: "linear-gradient(to right, #b99aff, #69477d) 1",
    borderImageSlice: 1,
    height: "869px",
    overflow: "auto",
  },
  image: {
    width: "50%",
    display: { xs: "none", sm: "block", md: "block" },
  },
  rightSide: {
    display: "flex",
    flexDirection: "column",
  },
  ForgotPassword: {
    fontWeight: "700",
  },
  paragraph: {
    marginBottom: "10px",
    whiteSpace: "",
    fontWeight: "600",
    fontSize: "16px",
    fontStyle: "italic",
  },
  email: {
    marginBottom: 5,
  },
  paragraphDiv: {
    marginTop: "20px",
  },
  paragraphTwo: {
    mr: 2,
    marginTop: "10px",
    color: "darkgrey",
  },
  paragraphThree: {
    mr: 2,
    marginTop: "10px",
    color: "#7433ff",
    textDecoration: "underline",
    cursor: "pointer",
  },
};
