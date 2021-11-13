import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  Button,
  View,
  ToastAndroid,
} from 'react-native';

export default Task = (props) => {
    return (
        <View style={{borderWidth: 1, backgroundColor: '#AAA', padding: 10, margin: 3}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
                <View>
                    <Text>{props.name}</Text>
                    {props.eta && <Text>{props.eta}</Text>}
                </View>
                <View style={{flexDirection: 'row'}}>
                    {!props.completed && <View>
                        <Button title={'Done'} onPress={() => props.markAsDone(props.id)}/>
                    </View>}
                    <Button color='red' title={'Remove'} onPress={() => props.removeTask(props.id)}/>
                </View>
            </View>
        </View>
    )
}