import React, {Component} from 'react'

import './styles.css'
import {Link} from 'react-router-dom'
import Loader from '../../components/Loader'

class BlogList extends Component {
    state = {
        data: [],
        activeLoader: false
    }
    componentWillMount () {
        this.setState({activeLoader: true})
    }

    componentDidMount () {
        fetch ('https://codeguida.com/api/v1/posts/?category=programming&o=-moderated_at&limit=24',
            {
                method: 'GET'
            }).then(res => {
                return res.json()
        }).then(response => {
            console.log(response)
            this.setState({
                data: response.results,
                activeLoader: false
            })
        })
    }
    render () {
        const {data} = this.state
        return (
            <div className="ListBlocks">
                {this.state.activeLoader && <Loader/>}
                {
                    data.map((item, index) => {
                        return (
                            <Link
                                to={`/article/${item.id}`}
                                className="ItemBlock"
                                key={index}
                            >
                                {item.title}
                                <img src={item['title_images']['400']} alt=""/>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}

export default BlogList
