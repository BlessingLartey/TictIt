import { createSlice } from '@reduxjs/toolkit';

const loadTasks = () => JSON.parse(localStorage.getItem('tasks')) || [];
const saveTasks = (tasks) => localStorage.setItem('tasks', JSON.stringify(tasks));

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: loadTasks(),
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      saveTasks(state);
    },
    deleteTask: (state, action) => {
      const newState = state.filter(task => task.id !== action.payload);
      saveTasks(newState);
      return newState;
    },
    toggleDone: (state, action) => {
      const newState = state.map(task => task.id === action.payload ? {...task, done: !task.done} : task);
      saveTasks(newState);
      return newState;
    },
  },
});

export const { addTask, deleteTask, toggleDone } = tasksSlice.actions;
export default tasksSlice.reducer;
