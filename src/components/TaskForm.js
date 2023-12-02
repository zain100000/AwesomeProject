// src/components/TaskForm.js
import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';

const TaskForm = ({onSubmit}) => {
  const [task, setTask] = useState('');

  const handleSubmit = () => {
    if (task.trim() !== '') {
      onSubmit({title: task, completed: false});
      setTask('');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter task"
        value={task}
        onChangeText={text => setTask(text)}
      />
      <Button title="Add Task" onPress={handleSubmit} />
    </View>
  );
};

export default TaskForm;
