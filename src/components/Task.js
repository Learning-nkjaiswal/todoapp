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
            <Text>{props.name}</Text>
            {props.eta && <Text>{props.eta}</Text>}
        </View>
    )
}