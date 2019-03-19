import React, { Component } from 'react'

import queryString from 'query-string'

class Course extends Component {

    state = {
        title: ''
    }

    loadState() {
        const values = queryString.parse(this.props.location.search)
        if (this.state.title !== values.title) {
            this.setState({title: values.title})
        }
    }
    
    componentDidUpdate() {
        this.loadState()
    }

    componentDidMount() {
        this.loadState()
    }

    render () {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        )
    }
}

export default Course