import React, { Component } from 'react' 

export default class ControlledForm extends Component {
    state = {
        name: {
            first: '',
            last: ''
        },
        account: {
            userName: '',
            password: '',

        },
    }
    render() {
        return(
            <form>
                <input />
                <input />
                <input />
                <input />
                <button type="submit">
            </form>
        )
    }
}