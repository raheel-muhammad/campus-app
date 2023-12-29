const initialState = {
  userData: {},
  allUsers: [],
  allCompanies: [],
  allJobs: [],
};
const loginUser = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_DATA":
      return { ...state, userData: action.payload };
    case "GET_ALL_USER_DATA":
      return { ...state, allUsers: action.payload };
    case "GET_COMPANY_DATA":
      return { ...state, allCompanies: action.payload };
    case "GET_ALL_JOBS":
      return { ...state, allJobs: action.payload };
    case "LOG_OUT_USER":
      return initialState;
    default:
      return state;
  }
};
export default loginUser;
