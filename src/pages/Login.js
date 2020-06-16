import React from 'react';
import { connect } from 'react-redux';
import {
  setUser,
  setPassword,
  setReceipts,
  setIsLoggedIn,
  setLoadingState,
  login, 
} from '../redux/actions/userActions';
import { Redirect } from 'react-router-dom';

const Login = ({
  user,
  password,
  receipts,
  isLoggedIn,
  loadingState,
  dispatch,
  
}) => {



  

  return (
    <div>
      <h2>NepaL Covid-19 Details</h2>
      <div>
        {/* this is a comment */}
        ProvinceName:
        <input
          value={user}
          placeholder= " Ex-Province1"
          onChange={e => dispatch(setUser(e.target.value))}
        />
      </div>
      <div>
        District:
        <input
          value={password}
          placeholder="Ex-Jhapa"
          onChange={e => dispatch(setPassword(e.target.value))}
        />
      </div>
      <div>
        
        <button onClick={ ()=> dispatch(login())}> Submit</button>
        <div >{receipts.map(txt => <p>{txt}</p>)}</div>    
        {/* <center>
        <table>
         <tbody>
           {
                receipts.map((numList,i) =>(
                   <tr key={i}>
                    {
                      numList.map((num,j)=>
                         <td key={j}>       {num}</td>
                      )
                    }
                   </tr>
                ))
           }
         </tbody>
       </table>
       </center> */}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  // this maps react props to redux state
  return {
    user: state.userReducer.user,
    password: state.userReducer.password,
    receipts: state.userReducer.receipts,
    isLoggedIn: state.userReducer.isLoggedIn,
    loadingState: state.userReducer.loadingState,
  };
};

export default connect(mapStateToProps)(Login);
