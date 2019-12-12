import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

//Nossas páginas
import Login from './pages/Login'
import Register from './pages/Register'
import Perfil from './pages/Perfil'
import Friends from './pages/Friends'
import AddFriends from './pages/AddFriends'
import Conversations from './pages/Conversations'
import Chat from './pages/chat'

const routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Register,
        Perfil,
        Friends,
        AddFriends,
        Conversations,
        Chat
    },{
        initialRouteName: 'Chat' //Altera a tela para você editar sem precisar mudar as rotas
    
    })
)

export default routes