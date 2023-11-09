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
  signInDiv: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: 5,
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
    marginBottom: { xs: "20px", sm: "40px", md: "40px", lg: "40px" },
    marginTop: { xs: "20px", sm: "40px", md: "40px", lg: "40px" },
  },
  name: {
    marginBottom: 5,
  },
  email: {
    marginBottom: 5,
  },
  role: {
    marginBottom: 5,
  },
  password: {
    marginBottom: 5,
  },
  confirm: {
    marginBottom: 5,
  },
  buttonTwo: {
    borderRadius: 50,
    backgroundColor: "#7433FF",
    width: "50%",
    padding: "10px",
  },
};
