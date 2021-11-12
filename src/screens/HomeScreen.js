import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  Button,
  View,
} from 'react-native';
import * as Api from "../client/todo-client";
import {Dropdown} from 'react-native-material-dropdown-v2';

const HomeScreen = (props) => {

  const user = props.route.params.user;
  const [data, setData] = useState([]);

  useEffect(() => {
    Api.getTaskGroups(user)
    .then(groups => {
      let comboboxData = [];
      groups.forEach(group => {
        comboboxData.push({
          ...group,
          value: group.name
        });
      });
      comboboxData.push({
        value: 'Add New Group',
        id: 'add_new'
      })
      setData(comboboxData);
    })
  }, []);

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <Dropdown data={data}/>
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
