import React, { Component } from 'react'

class Header extends Component {
    render() {
        console.log(this.props);
        return (
            <header>
                <h1>Cat Tinder</h1>
                <h3>Welcome {this.props.user.name}</h3>
            </header>
        );
    }
}

export default Header;

// function myfunc(x, y) {
//     return x + y
// }
//
// myfunc(5, 8)
