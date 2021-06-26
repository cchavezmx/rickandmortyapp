import React from 'react'

const Dashboard = React.lazy(() => import('view/Dashboard'))
const OneCharacterCar = React.lazy(() => import('components/OneCharacterCard'))


const routes = [
  { exact: true, path: "/dashboard", name: 'Dashboard', component: Dashboard },
  { path: "/character/:number", exact: true, name: 'Un personaje', component: OneCharacterCar},
]

export default routes