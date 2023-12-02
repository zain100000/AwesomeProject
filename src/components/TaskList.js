// src/components/TaskList.js
import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({tasks, onToggleTaskStatus, onDeleteTask, onEditTask}) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={task =>
        task && task.id ? task.id.toString() : Math.random().toString()
      }
      renderItem={({item}) => (
        <View>
          <TouchableOpacity onPress={() => onToggleTaskStatus(item.id)}>
            <Text
              style={{
                textDecorationLine: item.completed ? 'line-through' : 'none',
              }}>
              {item.title}
            </Text>
          </TouchableOpacity>
          <TaskItem task={item} onDelete={onDeleteTask} onEdit={onEditTask} />
        </View>
      )}
    />
  );
};

export default TaskList;
