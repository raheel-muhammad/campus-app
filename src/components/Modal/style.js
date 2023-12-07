export const style = {
  Container: {
    position: "absolute",
    top: "50%",
    left: "60%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #7433ff",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "10px",
  },
  button: {
    color: "#fff",
    fontWeight: "600",
    border: "1px solid #7433ff",
    "&:hover": {
      background: "white",
    },
  },
  cancelButton: {
    background: "#CB2B23",
    "&:hover": {
      color: "red",
    },
  },
  confirmButton: {
    background: "#7433ff",
    "&:hover": {
      color: "green",
    },
  },
};
