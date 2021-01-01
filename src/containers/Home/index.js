import React from 'react';
import {connect} from 'react-redux';
import { dbData , facebookLogin } from '../../store/action';


class Home extends React.Component{
  componentDidMount() {
    this.props.dbData()
  }
  render(){
    return(
      <div>
        <h1>Home</h1>
        <button onClick={()=>this.props.facebookLogin(this.props.history)}>Facebook Login</button>
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => ({
facebookLogin: (history) => dispatch(facebookLogin(history)),
dbData: () => dispatch(dbData()),
})

export default connect(
null,
  mapDispatchToProps)(Home);