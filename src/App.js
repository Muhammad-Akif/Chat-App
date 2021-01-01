import React from 'react';
import './App.css';
// import {connect} from 'react-redux';
import AppRouter from './config/router'
// import { set_data,facebookLogin } from './store/action';


class App extends React.Component{

  render(){
    // console.log("users => ",this.props.users)
    return(
      <div>
        <h1 className='App'>ChatApp</h1>
        <AppRouter/>
        {/* <button onClick={()=>this.props.facebookLogin()}>Facebook Login</button> */}
        {/* <button onClick={()=>this.props.set_data()}>set_data</button> */}
      </div>
    );
  }

}
export default App;

// const mapStateToProps = (state) => (
// {
//     users: state.users
// }
// )
// const mapDispatchToProps = (dispatch) => ({
// set_data: () => dispatch(set_data()),
// facebookLogin: () => dispatch(facebookLogin()),
// })

// *************if combine reducer**********
// const mapStateToProps = (state) => (
//   {
//     username: state.auth.username,
//     email: "akif@gmail.com",
//     AppName: state.app.AppName
//   }
// )
// const mapDispatchToProps = (dispatch) => ({
//   set_data: (data) => dispatch(set_data(data))
// })

// export default connect(
// mapStateToProps,
// mapDispatchToProps)(App);