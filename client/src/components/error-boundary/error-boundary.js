import React, { Component } from 'react'
import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from './error-boundary.styles'

class ErrorBoundary extends Component{
    state = {
        hasErrored: false
    }

    static getDerivedStateFromError(error) {
        //do something
        return { hasErrored: true }
    }

    componentDidCatch(error, info){
        console.log("Error : ",error)
    }

    render() {
        return this.state.hasErrored ? 
            <ErrorImageOverlay>
                <ErrorImageContainer imageUrl="https://i.imgur.com/O0DCcQy.png"/>
                <ErrorImageText>Sorry, our page was too hot to handle -_-' <br/>We'll cool it down</ErrorImageText>
            </ErrorImageOverlay> :
            this.props.children
    }
}

export default ErrorBoundary