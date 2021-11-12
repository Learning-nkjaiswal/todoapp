import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
} from 'react-native';

const LoginScreen = ({ navigation }) => {

  const onLoginPress = () => {

  };

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <Text style={{fontWeight: 'bold'}}>Enter Your Name:</Text>
          <TextInput placeholder='Name'></TextInput>
          <Button onPress={onLoginPress} title={'Login'}/>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default LoginScreen;
