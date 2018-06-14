import React, {Component} from 'react'
import {connect} from 'react-redux'

import List from './components/List'

class ToDoListWithRedux extends Component {
    state = {
        value: ''
    }
    handleClickBtn = () => {
        if (this.state.value) {
            this.props.addElementToList(this.state.value)
            this.setState({value: ''})
        }
    }
    handleChangeValue = (e) => {
        this.setState({value: e.target.value})
    }
    render () {
        const {value} = this.state
        return (
            <div>
                <input
                    type="text"
                    onChange={this.handleChangeValue}
                    value={value}
                />
                <button
                    onClick={this.handleClickBtn}
                >
                    Add
                </button>
                <List/>
            </div>
        )
    }
}

const mapStateToProps = state => ({

})
const mapActionToProps = dispatch => ({
    addElementToList (value) {
      dispatch({type: 'ADD_ELEMENT', payload: value})
    }
})


export default connect(
    mapStateToProps,
    mapActionToProps
)(ToDoListWithRedux)
