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
import Task from '../components/Task';

const HomeScreen = (props) => {

  const user = props.route.params.user;
  const [data, setData] = useState([]);
  const [promptVisibility, setPromptVisibility] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [taskPromptVisibility, setTaskPromptVisibility] = useState(false);
  const [selectedTaskGroup, setSelectedTaskGroup] = useState(undefined);

  const fetchTaskGroups = () => {
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
    fetchTaskGroups();
  }, []);

  const fetchTaskInTheGroup = (id) => {
    Api.getTaskInTaskGroups(user, id)
    .then((responseTask) => {
      setTasks(responseTask);
    })
    .catch(() => ToastAndroid.show('Unable to fetch Task', ToastAndroid.LONG));
  }

  const onDropDownValueSelect = (text, index) => {
    if(data[index].id === 'add_new') {
      setPromptVisibility(true);
    } else {
      setSelectedTaskGroup(data[index]);
      fetchTaskInTheGroup(data[index].id);
    }
  }

  const createNewGroup = (newTaskGroupName) => {
    Api.createTaskGroups(user, newTaskGroupName)
    .then(() => {
      fetchTaskGroups();
      ToastAndroid.show('Successfully Created Task Group', ToastAndroid.SHORT)
    })
    .catch(() => ToastAndroid.show('Unable to Create New Group', ToastAndroid.LONG));
    setPromptVisibility(false);
  }

  const addNewTask = () => {
    setTaskPromptVisibility(true);
  }

  const createNewTask = (taskName) => {
    console.log(taskName);
    Api.createNewTaskInTaskGroups(user, selectedTaskGroup.id, taskName)
    .then(() => {
      fetchTaskInTheGroup(selectedTaskGroup.id);
      ToastAndroid.show('Successfully Created Task', ToastAndroid.SHORT);
      setTaskPromptVisibility(false);
    })
    .catch(() => ToastAndroid.show('Unable to Create New Task', ToastAndroid.LONG));
  }

  const getTaskComponent = (tasks) => {
    const taskComponent = [];
    tasks.forEach(task => {
      taskComponent.push(<Task {...task} markAsDone={markAsDone}/>);
    })
    return taskComponent;
  }

  const markAsDone = (taskId) => {
    Api.markTaskAsCompleted(user, selectedTaskGroup.id, taskId)
    .then(() => {
      fetchTaskInTheGroup(selectedTaskGroup.id);
      ToastAndroid.show('Successfully Marked Task as completed', ToastAndroid.SHORT);
    })
    .catch(() => ToastAndroid.show('Unable to Marked Task as completed', ToastAndroid.LONG))
  }

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <Dropdown data={data} onChangeText={onDropDownValueSelect}/>
          <Text style={{fontWeight: 'bold', alignSelf : 'center'}}>Welcome {props.route.params.user} !</Text>
          {tasks.length === 0 && <Text style={{alignSelf : 'center'}}>No Task Present in Current Task Group</Text>}
          <Button title="Add New Task" onPress={addNewTask}/>
          <View style={{marginTop: 10}}>
            {getTaskComponent(tasks)}
          </View>
        </ScrollView>
      </SafeAreaView>
      <Prompt
        visible={promptVisibility}
        title="New Task Group"
        placeholder="Enter New Task Group Name"
        onCancel={() => setPromptVisibility(false)}
        onSubmit={createNewGroup}
      />
      <Prompt
        visible={taskPromptVisibility}
        title="New Task"
        placeholder="Enter New Task Name"
        onCancel={() => setTaskPromptVisibility(false)}
        onSubmit={createNewTask}
      />
    </>
  );
};

export default HomeScreen;