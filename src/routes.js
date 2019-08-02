import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';

import Receita from './pages/Receita';
import Despesas from './pages/Despesas';
import Main from './pages/Main';
import Login from './pages/Login';

const Routes = createAppContainer(createSwitchNavigator({
        Login,
        Main    
}));

export default Routes;


/*
const AppNavigator = createStackNavigator(
    {
        Main: Main,
        Receita: Receita,
        Despesas: Despesas
    },
    {
        initialRouteName: "Main",
        /*
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    }
);
export default createAppContainer(AppNavigator);
*/

/*
const TabNavigator = createBottomTabNavigator({
    Home: Main,
    SecondScreen: Second,
  });
  
export default createAppContainer(TabNavigator);
*/