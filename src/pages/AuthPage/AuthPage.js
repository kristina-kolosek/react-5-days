import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { 
  saveToken,
  loginUser 
} from '../../reducers/AuthReducer/actions'
import { Redirect } from 'react-router-dom';

export class AuthPage extends Component {
  constructor(props) {
    super()

    this.state = {
      token: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.loginUser(this.state.token)

    this.setState({
      token: ''
    })
  }

  render() {
    if(this.props.isAuthenticated) {
      return <Redirect
        to='/'
      />
    }

    return (
      <div>
        <h1>CircleCI</h1>
        
        <form onSubmit={this.handleSubmit}>
          <input 
            name="token"
            onChange={this.handleChange}
            placeholder='Enter API token...' 
          />
          <input 
            type='submit' 
            placeholder='Submit' 
            value="Save token" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    saveToken,
    loginUser
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(AuthPage)