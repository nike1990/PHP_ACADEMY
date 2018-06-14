import React, {Component} from 'react'
import {connect} from 'react-redux'

import List from './components/List'

class ToDoList extends Component {
    componentWillMount () {}
    state = {
        list : [],
        value: ''
    }
    submitEditValue = (value, index) => {
        const {list} = this.state
        list[index].editState = false
        list[index].value = value
        this.setState({
            list: [...list]
        })
    }
    changeStatusForEdit = (index) => {
        const {list} = this.state
        list[index].editState = true
        this.setState({
            list: [...list]
        })
    }
    handleClickBtn = () => {
        const {
            list,
            value
        } = this.state
        this.props.addItem(value)
        if (value) {
            this.setState({
                value: '',
                list: [
                    ...list,
                    {
                        value: value,
                        editState: false
                    }
                ]
            })
        }
    }
    handleChangeValue = (e) => {
        this.setState({value: e.target.value})
    }
    render () {
        const {
            value,
            list
        } = this.state
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
                <List
                    editItem={this.changeStatusForEdit}
                    data={list}
                    edit={this.submitEditValue}
                />
            </div>
        )
    }
}
const mapStateToProps = state => ({

})

const mapActionsToProps = dispatch => ({
    addItem (value) {
        dispatch({type: 'ADD_ITEM', payload: value})
    }
})

export default connect(mapStateToProps, mapActionsToProps)(ToDoList)
