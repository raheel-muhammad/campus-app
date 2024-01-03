export const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "16px",
    alignItems: "center",
    width: { xs: "100%", sm: "50%" },
  },
  border: {
    display: "flex",
    border: "20px solid #B99AFF",
    borderImage: "linear-gradient(to right, #b99aff,  #69477d) 1",
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
    width: "70%",
  },
  signIn: {
    fontWeight: "700",
    marginBottom: 2.5,
  },
  email: {
    marginBottom: 2.5,
  },
  password: {
    marginBottom: 2.5,
  },
  forgotPassword: {
    display: "flex",
    flexDirection: "row",
    letterSpacing: "space-between",
    marginBottom: 5,
    width: { xs: "200px", sm: "100%" },
  },
  paragraph: {
    mr: 2,
    marginTop: "10px",
    color: "darkgrey",
    textDecoration: "underline",
    cursor: "pointer",
  },
  paragraphDiv: {
    marginTop: "20px",
    width: { xs: "200px", sm: "100%" },
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
