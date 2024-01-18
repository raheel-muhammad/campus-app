const initialState = {
  userData: {},
  allUsers: [],
  companyJobs: [],
  allJobs: [],
  appliedStudents: [],
};
const loginUser = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_DATA":
      return { ...state, userData: action.payload };
    case "GET_ALL_USER_DATA":
      return { ...state, allUsers: action.payload };
    case "GET_COMPANY_DATA":
      return { ...state, companyJobs: action.payload };
    case "GET_ALL_JOBS":
      return { ...state, allJobs: action.payload };
    case "GET_APPLIED_STUDENTS":
      return { ...state, appliedStudents: action.payload };
    case "LOG_OUT_USER":
      return initialState;
    default:
      return state;
  }
};
export default loginUser;
