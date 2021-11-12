import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StatusBar,
} from 'react-native';

const HomeScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <Text>HomeScreen</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
