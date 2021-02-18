import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#7986CB', // MD Amber 500
  primaryDark: '#303F9F', // MD Brown 300
  primaryLight: '#E8EAF6', // MD Amber 200
  outline: '#BDBDBD' // MD Gray 400
}

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },
    topView: {
      flex: 0.3,
      alignItems: 'center',
      justifyContent: 'flex-end',
      width: '100%',
    },
      logoImage: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        height: '50%',
        resizeMode: 'contain',
      },
    middleView: {
      flex: 0.4,
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: '100%',
      // backgroundColor: 'lightgreen'
    },
      inputRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 15,
        // backgroundColor:"lightblue"
      },
        inputLabel: {
          flex: 0.3,
          justifyContent: 'flex-end',
          paddingRight: 5,
          textAlign: 'right',
          fontSize: 10
        },
        inputText: {
          flex: 0.5,
          borderColor: colors.outline,
          paddingLeft: 5,
          borderBottomWidth: 1,
          fontSize: 18,
        },
      bottomView: {
        flex: 0.2,
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        paddingBottom: 60,
        justifyContent:"space-between",

      },
        buttonContainer: {
          width: 150,
          height: 50,
          borderColor: 'black',
          flexDirection: "row",
          borderRadius: 40,
          borderWidth: 1,
          alignItems: 'center',
          justifyContent:"center",
          backgroundColor: '#87ed80',
          shadowOpacity: 1,
          shadowRadius: 0,
          shadowOffset: { width: 2, height: 5 },
          margin: "auto"
        },
        buttonContainer2: {
          width: 170,
          height: 50,
          borderColor: 'black',
          flexDirection: "row",
          borderRadius: 40,
          borderWidth: 1,
          alignItems: 'center',
          justifyContent:"center",
          backgroundColor: 'pink',
          shadowOpacity: 1,
          shadowRadius: 0,
          shadowOffset: { width: 2, height: 5 },
          margin: "auto"
        },

          buttonText: {
            textAlign: 'center',
            fontSize: 18,
            color: 'black',
            fontWeight:"bold",
          }
});

export const homeStyles = StyleSheet.create({
  main: {
    backgroundColor: "white"
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 100,
    paddingBottom: 120,
  },
  button: {
    width: 150,
    height: 50,
    borderColor: 'black',
    flexDirection: "row",
    borderRadius: 30,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'navy',
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowOffset: { width: 2, height: 5 }
  },
  buttonText: {
    color: 'white',
    fontWeight: "bold"
  },
  addContainer:{
    justifyContent:"center",
    alignItems:"center",
    paddingTop: 40
  },
  addButtonText: {
    color: 'black',
    fontWeight: "bold",
    fontSize:15
  },
  addExerciseButton: {
    width: 100,
    height: 50,
    borderColor: 'black',
    flexDirection: "row",
    borderRadius: 30,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent:"center",
    backgroundColor: 'lightgreen',
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowOffset: { width: 2, height: 5 }
  },
  listItemContainerBody:{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      borderRadius:100,
      zIndex: 3, // works on ios
      backgroundColor:'white'
  },
  listItemTextContainer: {
      padding: 15,
      flex: 0.8,
      flexDirection: 'row',
      borderRadius:20,
      justifyContent: "space-between",
      alignItems:"center",
  },
  exerciseNameContainer: {
    // backgroundColor:"red",
    flex: 1 
  },

  listItemText: {
    fontSize: 18,
  },
  repsContainer: {
    flexDirection:"column",
    // backgroundColor:"lightblue",
    alignItems:"center"
  },
  listItemText2: {
        paddingRight: 10,
        fontSize: 18,

  },
  repText:{

  },
  //uche
  listItemButtonContainer: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingRight:20,
    // backgroundColor:"green",
    margin:"auto"
  },
  corpusContainer: {
    margin: 20,
    borderRadius: 10,
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowOffset: { width: 2, height: 5 },
    backgroundColor:"white",
    borderColor:"black",
    borderWidth:1,
    zIndex: 2, // works on ios
  },
  listTitleBody:{
    padding: 10,
    justifyContent:"center",
    alignItems: "center",
    borderRadius:30,
    borderColor:"black"
  },
  listTitleText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  beholdItemContainerBody: {
  }
});