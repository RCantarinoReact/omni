import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Login from './pages/Login'
import List from './pages/List'
import Book from './pages/Booking'


const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        List,
        Book
    })
)

export default Routes;