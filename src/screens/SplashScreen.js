import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StatusBar,
} from 'react-native';

const SplashScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <Text>SplashScreen</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default SplashScreen;
