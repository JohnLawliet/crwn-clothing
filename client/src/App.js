import React, { useEffect, lazy, Suspense } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import {createStructuredSelector} from 'reselect'
import {selectCurrentuser} from './redux/user/user.selector'

import Header from './components/header/header.component'
import {userAuthentication} from './redux/user/user.actions'
import {connect} from 'react-redux'
import {GlobalStyle} from './global.styles'
import HomeSpinner from './components/homepage-spinner/spinner.component'
import ErrorBoundary from './components/error-boundary/error-boundary'
import ContactPage from './pages/contact/contact.component';

const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'))
const HomePage = lazy(() => import('./pages/homepage/homepage.component'))
const ShopPage = lazy(() => import('./pages/shop/shop.component'))
const SignInAndSignUp = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'))


const App = ({ userAuthentication, currentUser }) => {
  useEffect(() => {
    userAuthentication()
  }, [userAuthentication])

  return ( 
    <div>
    <GlobalStyle />
    <Header/>
    <Switch>
      <ErrorBoundary>
      <Suspense fallback={<HomeSpinner/>}>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/contact" component={ContactPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route path="/signin" render={() => 
          currentUser ? 
          (<Redirect to="/" />) : 
          (<SignInAndSignUp />)
        } />
      </Suspense>
      </ErrorBoundary>
    </Switch>    
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  userAuthentication: () => dispatch(userAuthentication())
})


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentuser
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
