import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';

import { homeStyles } from './Styles';
import { getDataModel } from './DataModel';
import { FlatList } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.self = this.props.route.params.currentUser;
    this.dataModel = getDataModel();

    this.state = {
      studentList: []
    }
  }
  componentDidMount() {
    this.getInventory();
    this.focusUnsubscribe = this.props.navigation.addListener('focus', this.onFocus);
  }

  componentWillUnmount() {
    this.focusUnsubscribe();
  }
  onFocus = () => {
    if (this.props.route.params.item) {
      const {operation, item} = this.props.route.params;
      if (operation === 'add') {
        this.addItem(item);
      } else if (operation === 'edit') {
        this.updateList(item);
      } 
      console.log("this is student info ", this.props.route.params.item);
    }
    this.props.navigation.setParams({operation: 'none'});
    
  }

  getInventory = async () => {
    // console.log("student list", this.state.studentList);
    // the current users data
    let qSnap = await this.dataModel.getusersRef().doc(this.self.key).collection("students").get();
    qSnap.forEach(qDocSnap => {
      let data = qDocSnap.data();
      data.key = qDocSnap.id;;
      this.state.studentList.push(data);
    })

    this.setState({studentList: this.state.studentList});
  }
  printInventory = () => {
    for (let item in this.state.studentList) {
      console.log("studentList", item);
    }
  }

  addItem = async (item) => {
    if (item) { // false if undefined
      var sublistRef = this.dataModel.getusersRef();
      let info = {name: item.name, age: item.age, school: item.school, session: {date: item.session.date}};
      // if doc exists
      if (this.state.studentList) {
        console.log("user created student list before :)");
        sublistRef = await this.dataModel.getusersRef().doc(item.currentUser.key);
      }
      // create new doc
      else {
        sublistRef = await this.dataModel.getusersRef().doc();
        console.log("new exercise doc");
      }
      
      let itemdata = {students: info};
      var itemRef = await sublistRef.collection("students").add(itemdata);
      itemdata.key = itemRef.id;
      //pushing to sublist in state
      this.state.studentList.push(itemdata);
    }  
    this.setState({studentList: this.state.studentList});
    return this.state.studentList;

  }


  // fix
  updateList = async (item) => {
    //update from db
    let docRef = await this.dataModel.getusersRef().doc(this.self.key).collection("students").doc(item.key);
    await docRef.update({students: {mood: item.students.mood, text: item.text, reps: item.reps}});
    //update and search thelist display
    let {studentList} = this.state;
    let foundIndex = -1;
    for (let idx in studentList) {
      if (studentList[idx].key === item.key) {
        foundIndex = idx;
        break;
      }
    }
    if (foundIndex !== -1) { // silently fail if item not found
      studentList[foundIndex].students.text = item.text;
      studentList[foundIndex].students.reps = item.reps;
    }
    // this.theList = {key: docRef.id, item};
    this.setState({studentList: studentList});
  }


  deleteItem = async (item) => {
    //delete from db
    let docRef = await this.dataModel.getusersRef().doc(this.self.key).collection("students").doc(item.key);
    await docRef.delete();

    //search and delete from thelist display
    let {studentList} = this.state;
    let foundIndex = -1;
    for (let idx in studentList) {
      if (studentList[idx].key === item.key) {
        foundIndex = idx;
        break;
      }
    }
    if (foundIndex !== -1) { // silently fail if item not found
      studentList.splice(foundIndex, 1); // remove one element 
    }
    this.setState({studentList: studentList});
  }

  onDelete = (item) => {
    this.deleteItem(item);
  }

  onEdit = (item) => {
    // item.currentUser = this.self;
    this.props.navigation.navigate("Item", {
      operation: 'edit',
      item: item,
    });
  }


  render() {
    let clickToAdd;
    let studentList = this.state.studentList;
    if (!studentList.length) {
      clickToAdd=
      <View style={{alignItems: "center", backgroundColor:"white"}}>
        <Text style={{fontSize: 20}}>Nothing to display</Text>
        <Text style={{fontSize: 20}}>Click "+" to add more students!</Text>
      </View>
    };
      return (
        <View style = {homeStyles.main}>
            <View style = {homeStyles.corpusContainer}>
              <View style = {homeStyles.listTitleBody}>
                <Text style = {homeStyles.listTitleText}>All Students</Text>
                {clickToAdd}
              </View>
                  <FlatList
                        // filter upon the mood we are currently in
                        data={studentList}
                        // ItemSeparatorComponent={()=>(
                        //   <View style={homeStyles.separator}
                        //   />
                        // )}
                        renderItem={({item})=>{
                          return(
                            <View style={homeStyles.listItemContainerBody}>
                              <View style={homeStyles.listItemTextContainer}> 
                                <View style={homeStyles.listItemButtonContainer}>
                                  <Ionicons name= "close-outline"
                                    size={24} 
                                    color={"red"}
                                    onPress={()=>{this.onDelete(item)}} />
                                </View>
                                <View style = {homeStyles.exerciseNameContainer}>
                                  <Text style={homeStyles.listItemText}
                                    onPress = {()=>{this.onEdit(item)}} >
                                    
                                  </Text> 
                                </View>
                                <View style = {homeStyles.repsContainer}>
                                  <Text style={homeStyles.listItemText2}
                                    onPress = {()=>{this.onEdit(item)}} >
                                    
                                  </Text> 
                                </View>
                              </View>
                            </View>
                          );
                        }}
                      />
              </View>
            <View style = {homeStyles.addContainer}>
                  <TouchableOpacity 
                      style = {homeStyles.addExerciseButton}
                      onPress={()=>{
                        this.props.navigation.navigate("Item", {
                          operation: "add",
                          mood: this.mood,
                          currentUser: this.self
                        });
                      }} >
                      <Text style = {homeStyles.addButtonText}>+</Text>
                  </TouchableOpacity>
            </View>

              <View style={homeStyles.buttonContainer}>
                  <TouchableOpacity 
                      style={homeStyles.button}
                      onPress={this.onGenerate}>
                      <Text style={homeStyles.buttonText}>Generate</Text>
                  </TouchableOpacity>
              </View>
        </View>
      )
  }
}