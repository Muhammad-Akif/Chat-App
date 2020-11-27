import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import { set_data } from './store/action';


class App extends React.Component{

  render(){
    console.log("users => ",this.props.users)
    return(
      <div>
        <button onClick={()=>this.props.set_data()}>set_data</button>
      </div>
    );
  }

}

const mapStateToProps = (state) => (
{
    users: state.users
}
)
const mapDispatchToProps = (dispatch) => ({
set_data: () => dispatch(set_data()),
})

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

export default connect(
mapStateToProps,
mapDispatchToProps)(App);