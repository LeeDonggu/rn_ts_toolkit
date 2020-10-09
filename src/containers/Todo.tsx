import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {lists, titles, getFilterLike, setTitle} from '../modules/todo';

import {View, Text, Button} from 'react-native';

import {fetchTodo} from '../modules/todo';

export function Counter() {
  const list = useSelector(lists);
  const title = useSelector(titles);
  const filterLikes = useSelector(getFilterLike);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo({test1: 321, test2: 123}));
  }, [dispatch]);

  return (
    <>
      <Text>{title.name}</Text>
      {filterLikes.map(({id}: {id: string}, index: React.ReactNode) => (
        <View key={id}>
          <Text>
            {id}
            {index}
          </Text>
        </View>
      ))}
      <Button
        title="setTitle"
        onPress={() => dispatch(setTitle({name: 'z', content: 2}))}
      />
    </>
  );
}
