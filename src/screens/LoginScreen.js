import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StatusBar,
} from 'react-native';

const LoginScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <Text>LoginScreen</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default LoginScreen;
