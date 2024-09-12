// Define action types
const SET_TOKEN = "SET_TOKEN";
const SET_USER_ID = "SET_USER_ID";
const SET_USER_EXPERTIES = "SET_USER_EXPERTIES";
const SET_USER_NAME = "SET_USER_NAME";
const SET_USER_CONTACT = "SET_USER_CONTACT";
const SET_USER_DESCRIPTION = "SET_USER_DESCRIPTION";
const SET_USER_AMOUNT = "SET_USER_AMOUNT";
const SET_DATE = "SET_DATE";
const SET_USER_TYPE = "SET_USER_TYPE";
const SET_DEPARTMENTS = "SET_DEPARTMENTS";
const SET_BIO = "SET_BIO";

// Action creators
export const setToken = (token) => ({
  type: SET_TOKEN,
  payload: token,
});

export const setUserId = (userId) => ({
  type: SET_USER_ID,
  payload: userId,
});

export const setUserName = (userName) => ({
  type: "SET_USER_NAME",
  payload: userName,
});

export const setExpertise = (userExperties) => ({
  type: "SET_USER_EXPERTIES",
  payload: userExperties,
});

export const setContact = (userContact) => ({
  type: "SET_USER_CONTACT",
  payload: userContact,
});

export const setDescription = (userDescription) => ({
  type: "SET_USER_DESCRIPTION",
  payload: userDescription,
});

export const setAmount = (userAmount) => ({
  type: "SET_USER_AMOUNT",
  payload: userAmount,
});

export const setDate = (setDate) => ({
  type: "SET_DATE",
  payload: setDate,
});

export const setUserType = (setUserType) => ({
  type: "SET_USER_TYPE",
  payload: setUserType,
});

export const setDepartments = (setDepartments) => ({
  type: "SET_DEPARTMENTS",
  payload: setDepartments,
});

export const setBio = (setBio) => ({
  type: "SET_BIO",
  payload: setBio,
});
// Initial state
const initialState = {
  token: null,
  userId: null,
  userName: null,
  userExperties: null,
  userContact: null,
  userDescription: null,
  userAmount: null,
  setDate: null,
  setUserType: null,
  setDepartments: null,
  setBio: null,
};

// Reducer function
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.payload };
    case SET_USER_ID:
      return { ...state, userId: action.payload };
    case SET_USER_NAME:
      return { ...state, userName: action.payload };
    case SET_USER_EXPERTIES:
      return { ...state, userExperties: action.payload };
    case SET_USER_CONTACT:
      return { ...state, userContact: action.payload };
    case SET_USER_DESCRIPTION:
      return { ...state, userDescription: action.payload };
    case SET_USER_AMOUNT:
      return { ...state, userAmount: action.payload };
    case SET_DATE:
      return { ...state, setDate: action.payload };
    case SET_USER_TYPE:
      return { ...state, setUserType: action.payload };
    case SET_DEPARTMENTS:
      return { ...state, setDepartments: action.payload };
    case SET_BIO:
      return { ...state, setBio: action.payload };
    default:
      return state;
  }
};

export default authReducer;
