// Spinner is an HOC which wrapped a component in it to display the spinner until the component has loaded

import React from 'react'

import HomeSpinner from '../homepage-spinner/spinner.component'

const Spinner = WrappedComponent => ({ isLoading, ...otherProps}) => {
    return isLoading ? <HomeSpinner /> : <WrappedComponent {...otherProps} />
}

export default Spinner