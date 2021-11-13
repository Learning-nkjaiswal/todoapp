import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  Button,
  View,
  ToastAndroid,
} from 'react-native';
import * as Api from "../client/todo-client";
import {Dropdown} from 'react-native-material-dropdown-v2';
import Prompt from 'react-native-input-prompt';

const HomeScreen = (props) => {

  const user = props.route.params.user;
  const [data, setData] = useState([]);
  const [promptVisibility, setPromptVisibility] = useState(false);

  const fetchTaskGroups = (user) => {
    Api.getTaskGroups(user)
      .then(groups => {
        let comboBoxData = [];
        groups.forEach(group => {
          comboBoxData.push({
            ...group,
            value: group.name
          });
        });
        comboBoxData.push({
          value: 'Add New Group',
          id: 'add_new'
        });
        setData(comboBoxData);
      })
      .catch(() => ToastAndroid.show('Unable to fetch list of group', ToastAndroid.LONG));
  }  

  useEffect(() => {
    fetchTaskGroups(user);
  }, []);

  const onDropDownValueSelect = (text, index) => {
    if(data[index].id === 'add_new') {
      setPromptVisibility(true);
    } else {

    }
  }

  const createNewGroup = (newTaskGroupName) => {
    Api.createTaskGroups(user, newTaskGroupName)
    .then(() => {
      fetchTaskGroups(user);
      ToastAndroid.show('Successfully Created Task Group', ToastAndroid.SHORT)
    })
    .catch(() => ToastAndroid.show('Unable to Create New Group', ToastAndroid.LONG));
    setPromptVisibility(false);
  }

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <Dropdown data={data} onChangeText={onDropDownValueSelect}/>
          <Text style={{fontWeight: 'bold'}}>Welcome {props.route.params.user} !</Text>
          <Button
            title="Go to Task Details"
            onPress={() =>
              props.navigation.navigate('TaskDetails', { id: 'Jane' })
            }
          />
        </ScrollView>
      </SafeAreaView>
      <Prompt
        visible={promptVisibility}
        title="New Task Group"
        placeholder="Enter New Task Group Name"
        onCancel={() => setPromptVisibility(false)}
        onSubmit={createNewGroup}
      />
    </>
  );
};

export default HomeScreen;