import {AppRegistry, View, Text} from 'react-native';
import React from 'react';

/** * You"ll actually want to import the AppClip in a way similar to
 * what index.js does, maybe from a new AppClip.js file.
 */
const AppClip = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#BFEFFF',
    }}>
    <Text
      style={{
        fontSize: 26,
        color: '#204080',
      }}>
      Hello React Native App Clip
    </Text>
  </View>
);

AppRegistry.registerComponent('rnPOcAppClip', () => AppClip);
