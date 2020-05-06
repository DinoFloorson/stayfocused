import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [addTask, setAddTask] = useState(false);

  function toggleModal() {
    setIsShowing(!isShowing);
  }

  function toggleAddTask() {
    setAddTask(!addTask);
  }
  return {
    isShowing,
    toggleModal,
    toggleAddTask,
    addTask,
  };
};

export default useModal;
