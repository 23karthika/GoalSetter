import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View , ScrollView , FlatList } from 'react-native';
import GoalItem from './GoalItem';
import GoalInput from './GoalInput';


export default function App() {
   
  const [goals,setGoals]=useState([])
  const [isModalVisible,setIsModalVisibile] = useState(false);

  function addGoalHandler(goalText){
     setGoals((currentGoals) => [...currentGoals,goalText])
  }

  function deleteItem(index)
  {
    console.log('delete'+index);
    const newGoals = goals.filter((el,i) => i!=index )
    setGoals(newGoals);
  }

  function startAddGoalHandler()
  {
      setIsModalVisibile(true);
  }

  function closeGoalHandler()
  {
      setIsModalVisibile(false);
  }

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appcontainer}>
      <Button title='Add New Goal' color="#A070D6" onPress={startAddGoalHandler}/>
      <GoalInput onClose={closeGoalHandler} visible={isModalVisible} onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
      <FlatList 
          data= {goals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item} onDelete={()=> deleteItem(itemData.index)} />
          }
        }
      />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appcontainer:{
    paddingTop: 50,
    paddingHorizontal:16,
    flex: 1,
    backgroundColor:'#1A0037'
   },
   goalsContainer:{
     flex:4
   }
});
