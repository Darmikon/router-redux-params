import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
const ACTION = require('./ducks').ACTION
export reducer from './ducks'

export default connect((state)=>({
    href: state.routingParams.href
}),{
    urlUpdate: ACTION.urlUpdate
})(RouterParams)

class RouterParams extends Component{
    componentDidMount(){
        this.props.urlUpdate({
            params: this.props.params,
            href: window.location.href,
            location: this.props.location
        })
    }

    componentWillReceiveProps(newProps){
        if(newProps.href !== window.location.href){
            this.props.urlUpdate({
                params: newProps.params,
                href: window.location.href,
                location: newProps.location
            })
        }
    }

    render(){
        return (this.props.children)
    }
}
