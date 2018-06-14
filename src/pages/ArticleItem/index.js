import React, {Component} from 'react'
import {articleItem} from '../../api/article.js'
import './styles.css'

class ArticleItem extends Component {
    state = {
        data: {}
    }
    componentDidMount() {
        const {match: {params}} = this.props
        articleItem(params.id)
            .then(res => {
                return res.json()
            })
            .then(res => {
                this.setState({data: res})
            })
    }
    render () {
        const {data} = this.state
        return (
            <div>
                <img src={data['full_page_image']} alt=""/>
                <h1>{data['title']}</h1>
                <p>{data['short_description']}</p>
            </div>
        )
    }
}

export default ArticleItem
