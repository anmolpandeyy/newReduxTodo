import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
  <View style={{ padding: 20 }}>
    {todos.map(todo => (
      <View key={todo.id} style={{ flexDirection: "row", width: "100%" }}>
        <TouchableOpacity
          style={{ width: "90%" }}
          onPress={() => toggleTodo(todo.id)}
        >
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
        <TouchableOpacity
          style={{ width: "10%" }}
          onPress={() => deleteTodo(todo.id)}
        >
          <Text style={{ fontSize: 24, color: "#797777" }}>X</Text>
        </TouchableOpacity>
      </View>
    ))}
  </View>
);
export default TodoList;
