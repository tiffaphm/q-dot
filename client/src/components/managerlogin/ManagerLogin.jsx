import React from 'react';

class ManagerLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  updateInputFields(event, field) {
    if (field === 'email') {
      this.setState({
        email: event.target.value
      });
    } else {
      this.setState({
        password: event.target.value
      });
    }
  }

  submitHandler(event) {
    event.preventDefault();
    console.log(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className='container'>
        <form className='form-signin' onSubmit={this.submitHandler.bind(this)}>
          <h2 className='form-signin-heading'>Please sign in</h2>
          <label className='sr-only'>Email address</label>
          <input
            value={this.state.email}
            type='email'
            className='form-control'
            placeholder='Email address'
            required autoFocus
            onChange={(e) => this.updateInputFields(e, 'email')}
          />
          <label className='sr-only'>Password</label>
          <input
            value={this.state.password}
            type='password'
            className='form-control'
            placeholder='Password'
            required
            onChange={(e) => this.updateInputFields(e, 'password')}
          />
          <button className='btn btn-lg btn-primary btn-block' type='submit'>Sign in</button>
        </form>
      </div>
    );
  }
}

export default ManagerLogin;
