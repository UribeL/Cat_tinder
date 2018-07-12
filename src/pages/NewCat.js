import React, { Component } from 'react'

class NewCat extends Component {
    constructor(props){
        super(props)
        this.state = {
            formControl:{
                name: '',
                age: '',
                enjoys: ''
            }
        }
    }
    handleChange(event){
  let { formControl } = this.state
  formControl[event.target.name] = event.target.value
  this.setState({formControl: formControl})
};
    render() {
        return (
                <form action="/">
                    <label id="name">
                        Name: <input type="text" name="name"/>
                    </label>
                    <br/>
                    <label id="age">
                        Age: <input type="text" name="age"/>
                    </label>
                    <br/>
                    <label id="enjoys">
                        Enjoys: <input type="text" name="enjoys"/>
                    </label>
                    <br/>
                    <button id="submit">Create Cat Profile</button>
                    <label id="FormControl"
                      type="text"
                      name="name"
                      onChange={this.handleChange.bind(this)}
                      value={this.state.formControl.name}
                    />
                </form>
        )
    }
}
export default NewCat;
