// src/screens/HomeScreen.js
import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import {
  addTask,
  deleteTask,
  editTask,
  toggleTaskStatus,
} from '../actions/taskActions';

const HomeScreen = ({
  tasks,
  addTask,
  deleteTask,
  editTask,
  toggleTaskStatus,
}) => {
  const handleDeleteTask = taskId => {
    deleteTask(taskId);
  };

  const handleEditTask = task => {
    console.log('Edit task:', task);
  };

  return (
    <View>
      <TaskForm onSubmit={addTask} />
      {tasks && tasks.length > 0 ? (
        <TaskList
          tasks={tasks}
          onToggleTaskStatus={toggleTaskStatus}
          onDeleteTask={handleDeleteTask}
          onEditTask={handleEditTask}
        />
      ) : (
        <Text>No tasks available</Text>
      )}
    </View>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks.tasks,
});

const mapDispatchToProps = {
  addTask,
  deleteTask,
  editTask,
  toggleTaskStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
