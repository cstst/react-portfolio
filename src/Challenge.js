import React, { Component } from 'react';

export default class Parent extends Component {
    
    state = {
    	boom: {
            updateMe: {},
            someOtherShizznozz: {
                banana: "superBanana"
            }
        }
    }
  
    handleForm = (childState) => {
        this.setState({
            boom: {
                ...this.state.boom,
                updateMe: childState
            }
        })
    }
  
    render() {
        return (
            <React.Fragment>
                <Child tellParentToDoSomeShit={this.handleForm} />
                {Object.keys(this.state.boom.updateMe).map(key => 
                    <p>{`key: ${key}, value: ${this.state.boom.updateMe[key]}`}</p>
                )}
            </React.Fragment>              
        )
    }
}


class Child extends Component {

    state = {
        boom: {
            babyState: {
                uno: null,
                dos: null,
                tres: null
            },
            someOtherShizznozz: {
                banana: "superBanana"
            }
        }
    }

    updateState = (e) => {
        const { name, value } = e.target
        this.setState({
            boom: {
                babyState: {
                    ...this.state.boom.babyState,
                    [name]: value,
                }
            }
        })
    } 
    
    updateParentState = (e) => {
        e.preventDefault()
        const { babyState } = this.state.boom
        if (Object.keys(babyState).every(key => babyState[key] !== null)) {
            this.props.tellParentToDoSomeShit(babyState)
        } else {
            alert("Complete every field!")
        }
    }
  
    render() {
        return ( 
            <form onSubmit={this.updateParentState}>
                <input
                    name="uno"
                    placeholder="one"
                    value={this.state.boom.babyState.uno}
                    onChange={this.updateState}
                />
                <input
                    name="dos"  
                    placeholder="two"  
                    value={this.state.boom.babyState.dos}
                    onChange={this.updateState}
                />
                <input
                    name="tres"
                    placeholder="three"
                    value={this.state.boom.babyState.tres}
                    onChange={this.updateState}
                />
                <button type="submit">
                    Submit
                </button>
            </form>
        )
    }
}







