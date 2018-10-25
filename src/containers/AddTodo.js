import React, { Component } from "react";
import { View, TextInput, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";
import { addTodo } from "../actions/index";

class AddTodo extends Component {
  state = {
    text: ""
  };

  addTodo = text => {
    //update redux store
    this.props.dispatch(addTodo(text));
    this.setState({
      text: ""
    });
  };
  render() {
    return (
      <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
        <TextInput
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
          placeholder="Eg. Create a new Video"
          style={{
            flexDirection: "row",
            borderWidth: 1,
            borderColor: "#f2f2e1",
            backgroundColor: "#eaeaea",
            height: 50,
            flex: 1,
            padding: 5
          }}
        />
        <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
          <View
            style={{
              height: 50,
              backgroundColor: "#eaeaea",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Image
              style={{ width: 30, height: 30, padding: 5 }}
              source={require("../../assets/Plus_symbol.png")}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default connect()(AddTodo);
