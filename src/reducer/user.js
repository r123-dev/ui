let initialuser = null;
export const setUser = (state = initialuser, action) => {
  console.log(action.type);
  if (action.type === "user") {
    console.log("rahul mourya");
    return action.payload;
  } else if (action.type === "NULL") {
    return null;
  } else {
    return state;
  }
};
