import React, { Fragment, Suspense } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import routes from '../routes'


const loading = (
  <div className="lds-circle">
    <div></div>
  </div>
)

const AppContainer = () => {
  return(
    <Fragment>
      <Suspense fallback={loading}>
        <Switch>
          {
            routes.map(( route, index ) => {
              return (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => <route.component {...props } />}
                  />                 
              )
            })
          }
          <Redirect from='/' to="dashboard" />
        </Switch>
      </Suspense>
    </Fragment>
  )
}

export default React.memo(AppContainer)