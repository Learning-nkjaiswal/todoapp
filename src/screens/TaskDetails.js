import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StatusBar,
} from 'react-native';

const TaskDetails = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <Text>TaskDetails</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default TaskDetails;
