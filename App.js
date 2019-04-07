import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Login from './pages/welcome/loginform/App';
import Welcome from './pages/welcome/welcome/App';
import Initial from './pages/welcome/initial/initial';
import Register from './pages/welcome/register/RegisterScreen01';
import Register2 from './pages/welcome/register/RegisterScreen02';

import HomePost from './pages/home/homePost/App';
import Notification from'./pages/home/NotificationScreen/NotificationMain';
import HomeActivity from './pages/home/homeActivity/ActivityContainer';

import ExploreTravelPlan from './pages/explore/TravelPlan/ExploreSearchTravelplanMain';
import ExplorePost from './pages/explore/explorePost/App';
import ExploreDestination from './pages/explore/exploreDestination/App';

import ProfileMain from './pages/profile/main/App';
import qna from './pages/profile/qna/QnAContainer';

const MainNavigator = createStackNavigator({
  Login: Login,
  Welcome: Welcome,
  Initial: Initial,
  Register : Register,
  Register2 : Register2,
  
  //Home
  HomePost : HomePost,
  Notification : Notification,
  HomeActivity : HomeActivity,

  //Explore
  ExploreTravelPlan : ExploreTravelPlan,
  ExplorePost : ExplorePost,
  ExploreDestination : ExploreDestination,
  
  //Profile
  ProfileMain : ProfileMain,
  qna : qna
  },
  {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    },
    initialRouteName: "Welcome",
  });


const App = createAppContainer(MainNavigator);

export default App;

const styles = StyleSheet.create({
  container: {
  },
});
