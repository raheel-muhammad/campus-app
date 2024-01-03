export const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: { xs: "100%", sm: "50%" },
    padding: "16px",
  },
  border: {
    display: "flex",
    border: "20px solid #B99AFF",
    borderImage: "linear-gradient(to right, #b99aff, #69477d) 1",
    borderImageSlice: 1,
    height: "calc(100vh - 40px)",
  },
  image: {
    width: "50%",
    display: { xs: "none", sm: "block", md: "block" },
  },
  rightSide: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
  },
  ForgotPassword: {
    fontWeight: "600",
  },
  paragraph: {
    marginBottom: "10px",
    whiteSpace: "",
    fontWeight: "400",
    fontSize: "12px",
    fontStyle: "italic",
    width: "100%",
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
