import { ReplSet } from "mongodb";

export const setUser = user => ({
  type: 'USER_SET_USER',
  user,
});
                                            // setUser('hello') -> {type: 'USER_SET_USER', user: 'hello'}

export const setPassword = password => ({
  type: 'USER_SET_PASSWORD',
  password,
});

export const setReceipts = receipts => ({
  type: 'USER_SET_RECEIPTS',
  receipts,
});

export const setIsLoggedIn = isLoggedIn => ({
  type: 'USER_SET_IS_LOGGED_IN',
  isLoggedIn,
});

export const setLoadingState = loadingState => ({
  type: 'USER_SET_LOADING_STATE',
  loadingState
});

  // Inorder to use thunk we gonna create an action
  export const login = () => (dispatch, getState) => { // it going to return a fucntion that returns a functiion
    console.log('Login Function!');                  //dispatch and getState are parameter, insteda of returning a st object its gonna return a function           
      
      
                        //now redux know something is happening 
   const userName = getState().userReducer.user;
   const pass= getState().userReducer.password;
   
   const url = `/messanger/login?userId=${userName}&password=${pass}`;

fetch(url)
  .then(res => res.json())
  .then(res => {
    console.log(res)
    const receipts = res.recp;
      dispatch(setReceipts(receipts));
    
  })
  .catch(console.log);
};