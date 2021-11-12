import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  Button,
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <Button
            title="Go to Task Details"
            onPress={() =>
              navigation.navigate('TaskDetails', { id: 'Jane' })
            }
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
