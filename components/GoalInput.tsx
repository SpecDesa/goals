
import {
    Button,
    StyleSheet, TextInput, View,
  } from "react-native";
  import _ from 'lodash'

export const GoalInput = (props: {goalInputHandler: any, enteredGoalText:any, addGoalHandler: any}) => {

    return (
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder="Input course goals" onChangeText={props.goalInputHandler} value={props.enteredGoalText}/>
                <Button title="Add goal" onPress={props.addGoalHandler}/>
            </View>
    )
}



const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row", // Default columnm, and flex is enabled by default..
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalText: {
    color: "white"
  }
  });
  