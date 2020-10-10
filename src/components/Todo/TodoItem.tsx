import React from 'react';
import {
  TouchableOpacity,
  View,
  TextInput,
  Text,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TodoInput: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    flexGrow: 1,
    flex: 1,
  },
  TodoAddButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
});

export interface ITodoItem {
  onPress?: () => void;
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}

export const TodoItem = ({onPress, onChange}: ITodoItem) => {
  return (
    <View style={styles.Container}>
      <TextInput style={styles.TodoInput} onChange={onChange} />
      <TouchableOpacity style={styles.TodoAddButton} onPress={onPress}>
        <Text>등록</Text>
      </TouchableOpacity>
    </View>
  );
};
