import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const TodoList = ({ todos, toggleTodo }) => (
  <View style={{ padding: 20 }}>
    {todos.map(todo => (
      <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
        <Text
          style={{
            fontSize: 24,
            textDecorationLine: todo.completed ? "line-through" : "none",
            marginBottom: 5
          }}
        >
          {todo.text}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);
export default TodoList;
