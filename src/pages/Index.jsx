import React, { useState } from "react";
import { Box, Heading, Input, Button, List, ListItem, ListIcon, IconButton, Flex, Text } from "@chakra-ui/react";
import { FaPlus, FaCheck, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = () => {
    if (todoItem.trim() !== "") {
      setTodoList([...todoList, { text: todoItem, completed: false }]);
      setTodoItem("");
    }
  };

  const handleToggleComplete = (index) => {
    const updatedList = [...todoList];
    updatedList[index].completed = !updatedList[index].completed;
    setTodoList(updatedList);
  };

  const handleRemoveTodo = (index) => {
    const updatedList = [...todoList];
    updatedList.splice(index, 1);
    setTodoList(updatedList);
  };

  return (
    <Box maxWidth="400px" margin="auto" mt={8}>
      <Heading mb={4}>Todo App</Heading>
      <Flex mb={4}>
        <Input value={todoItem} onChange={(e) => setTodoItem(e.target.value)} placeholder="Enter a todo item" mr={2} />
        <IconButton icon={<FaPlus />} onClick={handleAddTodo} aria-label="Add todo" />
      </Flex>
      <List spacing={2}>
        {todoList.map((todo, index) => (
          <ListItem key={index} display="flex" alignItems="center" justifyContent="space-between" p={2} borderWidth={1} borderRadius="md">
            <Text as={todo.completed ? "del" : "span"}>{todo.text}</Text>
            <Flex>
              <IconButton icon={<FaCheck />} onClick={() => handleToggleComplete(index)} aria-label="Mark as completed" mr={2} />
              <IconButton icon={<FaTrash />} onClick={() => handleRemoveTodo(index)} aria-label="Remove todo" />
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;
