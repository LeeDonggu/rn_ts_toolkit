import React from 'react';
import {
  TouchableOpacity,
  View,
  TextInput,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  Container: {
    height: 50,
    padding: 10,
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export interface ITodoList {
  data?: any;
}

export const TodoList = ({data}: ITodoList) => {
  return (
    <>
      {data &&
        data.map((item: any, index: number) => {
          return (
            <View style={styles.Container} key={`TodoList-${index}`}>
              <Text>{item.name}</Text>
            </View>
          );
        })}
    </>
  );
};
