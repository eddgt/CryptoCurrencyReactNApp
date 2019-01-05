import React, { Component } from 'react';
import { Button, View, Text, TouchableHighlight, Image } from 'react-native';
import { DrawerNavigator, createDrawerNavigator, createStackNavigator, createAppContainer  } from 'react-navigation'; // Version can be specified in package.json

import { Provider } from 'react-redux';
import  Store from './src/Store';
import { CryptoContainer } from './src/components';

class HeaderNavigationBar extends Component {
  render() {
      return (<View style={{
          height: 70,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center'
      }}>
          <TouchableHighlight style={{ marginLeft: 10, marginTop: 15 }}
              onPress={() => { this.props.navigation.openDrawer(); }}>
              <Image
                  style={{ width: 32, height: 32 }}
                  source={{uri: 'https://png.icons8.com/ios/2x/menu-filled.png'}}
              />
          </TouchableHighlight>
      </View>);
  }
}

class HomeScreen extends Component {

  render() {
      return (<View style={{
          flex: 1,
          flexDirection: 'column',
      }}> 
      <HeaderNavigationBar {...this.props} />
          <View style={{
              flex: 1,
              backgroundColor: '#4885ed',
              alignItems: 'center',
              justifyContent: 'center'
          }}>
              <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'black', alignItems: 'center' }}>  
              Home
              </Text>
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>
              Wellcome to Crypto Currency App
              </Text>              
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>
                  With This app you can check CryptoCurrency anytime
              </Text>
              
          </View>
      </View>);
  }
}

class AboutScreen extends Component {

  render() {
      return (<View style={{
          flex: 1,
          flexDirection: 'column',
      }}> 
      <HeaderNavigationBar {...this.props} />
          <View style={{
              flex: 1,
              backgroundColor: '#4885ef',
              alignItems: 'center',
              justifyContent: 'center'
          }}>        
              <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'black', alignItems: 'center' }}>  
              About
              
              </Text>  
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white', alignItems: 'center' }}>  
                  Author: Osman E. Ulloa Vasquez
              </Text>  
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white', alignItems: 'center' }}>  
                  email: edmundoulloa7@gmail.com
              </Text>  
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white', alignItems: 'center' }}>  
                  phone: (502) 55495570
              </Text>    
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white', alignItems: 'center' }}>      
                  job: Software Developer                  
              </Text>
          </View>
      </View>);
  }

}

class CryptoScreen extends Component {

  render() {
      return (<View style={{
          flex: 1,
          flexDirection: 'column',
      }}> 
      <HeaderNavigationBar {...this.props} />
          <View style={{
              flex: 1,
              backgroundColor: '#4885ed',
              alignItems: 'center',
              justifyContent: 'center'
          }}>
              <Provider store={Store}>
              <View>
              <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'black', alignItems: 'center' }}>  
              Crypto Currency
              </Text>
                <CryptoContainer />        
              </View>
            </Provider>  
              
          </View>
      </View>);
  }

}


const RootStack = createDrawerNavigator(
  {
    Home:{
      screen:HomeScreen
    },
    About:{
      screen:AboutScreen
    },
    CryptoCurrency:{
      screen:CryptoScreen
    }
  },{
      initialRouteName:'Home'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
