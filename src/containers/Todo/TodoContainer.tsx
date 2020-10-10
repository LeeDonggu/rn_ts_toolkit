import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import {TodoItem, TodoList} from '../../components/Todo';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo} from '../../modules/todo/todoSlice';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});

export interface ITodoContainer {}

export const TodoContainer = ({}: ITodoContainer) => {
  const [todoText, setTodoText] = useState<string>('');
  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch(addTodo(todoText));
  };

  const handleChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ): void => {
    setTodoText(e.nativeEvent.text);
  };

  return (
    <SafeAreaView style={styles.Container}>
      <TodoList />
      <TodoItem onChange={handleChange} />
    </SafeAreaView>
  );
};
