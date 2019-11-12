import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

//Nossas páginas
import Login from './pages/Login'
import Register from './pages/Register'
import Perfil from './pages/Perfil'
import Friends from './pages/Friends'
import AddFriends from './pages/AddFriends'

const routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Register,
        Perfil,
        Friends,
        AddFriends
    },{
        initialRouteName: 'AddFriends' //Altera a tela para você editar sem precisar mudar as rotas
    
    })
)

export default routes