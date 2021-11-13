import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';

const TaskDetails = (props) => {

  const user = props.route.params.user;
  const taskGroupId = props.route.params.taskGroupId;
  const taskId = props.route.params.taskId;
  const task = props.route.params.task;

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={{padding: 15}}>
            <Text style={{fontSize: 30}}>{task.name}</Text>
            <Text >{task.eta ? task.eta : "No ETA"}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default TaskDetails;
