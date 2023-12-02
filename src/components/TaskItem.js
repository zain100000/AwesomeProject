// src/components/TaskItem.js
import React from 'react';
import {View, Button} from 'react-native';

const TaskItem = ({task, onDelete, onEdit}) => {
  return (
    <View>
      <Button title="Delete" onPress={() => onDelete(task.id)} />
      <Button title="Edit" onPress={() => onEdit(task)} />
    </View>
  );
};

export default TaskItem;
