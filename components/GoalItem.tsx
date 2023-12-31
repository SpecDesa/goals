import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import _ from "lodash";


// export const GoalItem = (itemData: ListRenderItemInfo<any>) => {
export const GoalItem = (props: any) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
      {/* <Text style={styles.goalText}>{itemData.item.text}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  goalText: {
    color: "white",
  },
});
