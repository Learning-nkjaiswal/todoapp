import React, {useState, useEffect} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {

  const [username, setUsername] = useState(undefined);

  const onLoginPress = () => {
    AsyncStorage.setItem('user', username);
    navigation.navigate("Home", {user: username});
  };

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if(user) {
        navigation.navigate("Home", {user});
      }
    });
  }, [])

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <Text style={{fontWeight: 'bold'}}>Enter Your Name:</Text>
          <TextInput placeholder='Name' onChangeText={(val) => setUsername(val)}></TextInput>
          <Button onPress={onLoginPress} title={'Login'}/>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default LoginScreen;
