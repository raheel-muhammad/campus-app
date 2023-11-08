export const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    alignItems: "center",
    padding: "16px",
    width: { xs: "100%", sm: "50%" },
  },
  border: {
    display: "flex",
    border: "50px solid #B99AFF",
    borderImage: "linear-gradient(to right, #b99aff,  #69477d) 1",
    borderImageSlice: 1,
    height: "869px",
    overflow: "auto",
  },
  image: {
    width: "50%",
    height: "100%",
    display: { xs: "none", sm: "block", md: "block" },
  },
  rightSide: {
    display: "flex",
    flexDirection: "column",
  },
  signIn: {
    fontWeight: "700",
    marginBottom: 5,
  },
  email: {
    marginBottom: 5,
  },
  password: {
    marginBottom: 5,
  },
  forgotPassword: {
    display: "flex",
    flexDirection: "row",
    letterSpacing: "space-between",
    marginBottom: 5,
  },
  paragraph: {
    mr: 2,
    marginTop: "10px",
    color: "darkgrey",
    textDecoration: "underline",
  },
  button: {
    borderRadius: 50,
    backgroundColor: "#7433FF",
    width: "50%",
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
    color: "black",
    textDecoration: "underline",
  },
};
