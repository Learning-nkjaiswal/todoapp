import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  Button,
} from 'react-native';

const HomeScreen = (props) => {

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <Text style={{fontWeight: 'bold'}}>Welcome {props.route.params.user} !</Text>
          <Button
            title="Go to Task Details"
            onPress={() =>
              props.navigation.navigate('TaskDetails', { id: 'Jane' })
            }
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
