//page to route to different collections

import React, {useEffect, lazy, Suspense} from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchCollectionStart} from '../../redux/shop/shop.actions'
import HomeSpinner from '../../components/homepage-spinner/spinner.component'

const CollectionOverviewContainer = lazy(() => import('../../components/collection-overview/collection-overview.container'))
const CollectionContainer = lazy(() => import('../collection/collection.container'))

const ShopPage = ({fetchCollectionStart, match}) =>{    
    useEffect(() =>{
        fetchCollectionStart()
    }, [fetchCollectionStart])

    return(
        <div className="shop-page">
            <Suspense fallback={<HomeSpinner/>}>
            <Route exact path={`${match.path}`} component={CollectionOverviewContainer}/>
            <Route exact path={`${match.path}/:collectionId`} component={CollectionContainer}/>
            </Suspense>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
})


export default connect(null, mapDispatchToProps)(ShopPage)


