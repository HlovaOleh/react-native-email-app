import React, {useState, useLayoutEffect} from 'react';
import {Text, View, Button, TouchableOpacity, Alert} from 'react-native';
import {TextInput, Title} from 'react-native-paper';
import BackIcon from '../../assets/images/svgs/BackIcon';

import {styles} from './styles';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.screenContent}>
      <View style={styles.btn}>
        <Button
          title="Forward"
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
