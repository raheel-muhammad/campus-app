export const getUserData = (data) => {
  return {
    type: "GET_USER_DATA",
    payload: data,
  };
};

export const logOutUser = () => {
  return {
    type: "LOG_OUT_USER",
  };
};
export const getAllUserData = (data) => {
  return {
    type: "GET_ALL_USER_DATA",
    payload: data,
  };
};
export const getCompanyData = (data) => {
  return {
    type: "GET_COMPANY_DATA",
    payload: data,
  };
};
export const getAllJobs = (data) => {
  return {
    type: "GET_ALL_JOBS",
    payload: data,
  };
};
