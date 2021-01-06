import React, { Component } from 'react'
import {connect} from 'react-redux';

class Chat extends Component {
    state = {
        chat_user: {},
        chat: [],
        message: ''
    }
    render() {
        const chat = (data) => {
            console.log('data ==> ',data)
            this.setState({
                chat_user: data,
            })
            console.log('state data ==> ',this.state.chat_user)
        }
        const send = () => {
            this.state.chat.push({message: this.state.message})
            this.setState({
                chat : this.state.chat, 
                message: ''
            })
        }
        const userData = this.props.user;
        return (
            <div>
                <img src={userData.profile}  alt='' />
                <h3>{userData.name} Lets Begin!</h3>
                <div style={{ display: 'flex'}}>
                    <div style={{width: '300px',backgroundColor: 'grey'}}> 
                        <h3>Users:</h3>
                        <ol>
                            {this.props.users.map((data, index) => {return data.uid !== userData.uid ? 
                            <li key={index}><img src={data.profile} width="20" alt=''/>{data.name}
                            <button onClick={() => chat(data)}>chat</button></li>:null
                            })}
                        </ol>   
                    </div>
                    <div style={{width: '300px',backgroundColor: 'yellow'}}> 
                        {Object.keys(this.state.chat_user).length ?
                        <div>
                            <h3>Chat</h3>
                            <img src={this.state.chat_user.profile} width="20" alt=''/>{this.state.chat_user.name}
                            {this.state.chat.map((v,i)=>{return<li key={i}>{v.message}</li>})}
                            <input type="text" value={this.state.message} onChange={(e) => this.setState({message: e.target.value})} placeholder="Enter your Message"/>
                            <button onClick={() => send()}>Send</button>
                        </div>
                        :
                        <h4>No user</h4>
                        }
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