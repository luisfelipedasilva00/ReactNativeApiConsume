import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';

// it always have to be first
const Routes = createAppContainer(
  // configure one type of route
  // create visual effects
  createStackNavigator(
    {
      Main,
      User,
    },
    {
      headerTitleAlign: 'center', // align page text
      navigationOptions: {
        headerBackTitleVisible: false, // to not show "back" text in header
      },
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#B22222',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;
