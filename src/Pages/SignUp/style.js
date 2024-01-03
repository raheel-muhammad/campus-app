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
  signInDiv: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: 2.5,
  },
  paragraph: {
    mr: 2,
    marginTop: "8px",
    color: "darkgrey",
  },
  heading: {
    fontWeight: { xs: "400", sm: "700", md: "700", lg: "700" },
    fontSize: { xs: "1.5rem" },
  },
  paragraphTwo: {
    color: "darkgrey",
    marginBottom: { xs: "20px", sm: "20px", md: "20px", lg: "20px" },
    marginTop: { xs: "20px", sm: "20px", md: "20px", lg: "20px" },
  },
  name: {
    marginBottom: 2.5,
  },
  email: {
    marginBottom: 2.5,
  },
  role: {
    marginBottom: 2.5,
  },
  password: {
    marginBottom: 2.5,
  },
  confirm: {
    marginBottom: 2.5,
  },
  buttonTwo: {
    borderRadius: 50,
    backgroundColor: "#7433FF",
    width: "50%",
    padding: "10px",
  },
};
