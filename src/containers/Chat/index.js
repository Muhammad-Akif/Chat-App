import React, { Component } from 'react'
import {connect} from 'react-redux';

class Chat extends Component {
    render() {
    const userData = this.props.user;
    console.log(' Full Data ==> ', this.props);

        return (
            <div>
                <img src={userData.profile}  alt='' />
                <h3>{userData.name} Lets Begin!</h3>
                <div>
                    <div>
                        <h3>Users:</h3>
                        <ol>
                            {this.props.users.map((data, index) => {return <li key={index}><img src={data.profile} width="20" alt=''/>{data.name}<button>chat</button></li>})}
                        </ol>   
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        user: state.CurrentUser,
        users: state.users,
    }

)

// const mapDispatchToProps = (dispatch) => ({
//     dbData: () => dispatch(dbData()),
// })
    
export default connect(
mapStateToProps,
null)(Chat);