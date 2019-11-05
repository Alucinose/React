import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

//Nossas páginas
import Login from './pages/Login'
import Register from './pages/Register'
import Perfil from './pages/Perfil'

const routes = createAppContainer(
    createSwitchNavigator({
        Perfil,
        Register,
        Login
    })
)

export default routes