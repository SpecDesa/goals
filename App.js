import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from "react-native";
import { useState } from "react";
import _ from 'lodash'

export default function App() {
  const [enteredGoalText, setEnterGoalText] = useState(''); 
  const [goals, setGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnterGoalText(enteredText);
  }
  const addGoalHandler = () => {
    if(enteredGoalText !== ''){

      setGoals(currentCourseGoals => 
        [...currentCourseGoals, 
          {text: _.capitalize(enteredGoalText.trim()), key: Math.random().toString()}]
          );

      setEnterGoalText('');
    }
  }



  return (
    // Default take only space it needs, so fix with flex: 1, and put flex on childrens.
    <View style={styles.appContainer}> 
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Input course goals" onChangeText={goalInputHandler} value={enteredGoalText}/>
        <Button title="Add goal" onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        {/* <ScrollView> // Great for limited amount of data like article
          {goals.map(goal => <View style={styles.goalItem} key={goal}><Text style={styles.goalText}>{goal}</Text></View>)}
        </ScrollView> */}
        <FlatList // Better scroll. Its lazy loading.
          data={goals}
          renderItem={(itemData) => {
            itemData.index;
              return <View style={styles.goalItem}><Text style={styles.goalText}>{itemData.item.text}</Text></View>
              }
            }
            // keyExtractor={item => item.id} // If no real id, can set this. Automatically 

        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex: 1, // takes 1/6 
    padding: 50,
    backgroundColor: "white",
    paddingHorizontal: 16
  },
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
  goalsContainer: {
    flex: 5, // 5/6 size.
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white',
  }, 
  goalText: {
    color: "white"
  }
});
