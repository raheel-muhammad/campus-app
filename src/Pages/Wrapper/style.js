export const style = {
  drawer: {
    display: "flex",
    flexDirection: "row",
    background: "aliceblue",
  },
  drawerItems: {
    background: "#7433FF",
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    position: "fixed",
    width: {
      xs: "220px",
      sm: "220px",
      md: "220px",
      lg: "220px",
      xl: "250px",
    },
    display: { xs: "none", sm: "block" },
    height: {
      xs: "100%",
      sm: "100%",
      md: "100%",
      lg: "100%",
    },
    cursor: "pointer",
  },
  icon: {
    color: "#fff",
    fontSize: "40px",
    paddingLeft: "90px",
    paddingTop: "20px",
  },
  heading: {
    color: "#fff",
    fontWeight: "400",
    paddingLeft: "60px",
    paddingBottom: "30px",
  },
  itemNames: {
    height: 75,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    color: "#fff",
    fontWeight: "600",
    paddingLeft: "30px",
    gap: "15px",
  },
  Container: {
    width: "100%",
    marginLeft: { xs: "10px", sm: "10px", md: "10px", lg: "80px" },
  },
  subContainer: {
    background: "#7433FF",
    height: 70,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: "30px",
    position: "fixed",
    zIndex: "1",
    marginLeft: { xs: "0px", sm: "250px" },
    width: {
      xs: "93%",
      sm: "64%",
      md: "73%",
      lg: "75%",
      xl: "81%",
    },
  },
  dashboard: {
    color: "#fff",
    fontWeight: "600",
    paddingTop: "15px",
    paddingLeft: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dashboardItems: {
    paddingRight: "50px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  profile: { marginTop: "100px", marginLeft: { xs: "0px", sm: "250px" } },
};