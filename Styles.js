import { StyleSheet, Dimensions } from 'react-native';
// import { Dimensions } from 'react-native';

export const colors = {
  primary: '#2643BE', // WF Blue
  primaryDark: '#303F9F', // MD Brown 300
  primaryLight: '#E8EAF6', // MD Amber 200
  outline: '#BDBDBD' // MD Gray 400
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
          width: 144,
          height: 42,
          borderColor: 'black',
          flexDirection: "row",
          borderRadius: 10,
          // borderWidth: 1,
          alignItems: 'center',
          justifyContent:"center",
          backgroundColor: '#2643BE',
          // shadowOpacity: 1,
          // shadowRadius: 0,
          shadowOffset: { width: 2, height: 5 },
          margin: "auto"
        },
        buttonContainer2: {
          width: 144,
          height: 42,
          borderColor: 'black',
          flexDirection: "row",
          borderRadius: 10,
          // borderWidth: 1,s
          alignItems: 'center',
          justifyContent:"center",
          backgroundColor: '#2643BE',
          // shadowOpacity: 1,
          // shadowRadius: 0,
          shadowOffset: { width: 2, height: 5 },
          margin: "auto"
        },

          buttonText: {
            textAlign: 'center',
            fontSize: 18,
            color: 'white',
            fontWeight:"bold",
          }
});

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'yellow',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },
  headerContainer: {
    flex: 0.1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    padding: 10,
    paddingLeft: 25,
    // backgroundColor: "#BDC6EB",
    height: windowHeight / 1.7,
    
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start', // this turns out to be important!
    padding: 15,
    // backgroundColor: 'pink',
    width: "100%",
  },
  headerText: {
    fontSize: 50,
    fontWeight: "500",
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
    margin: 20,
    borderRadius: 10,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    backgroundColor:"white"
  },
  textContainerNoList: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 200,
    paddingBottom: 200,
  },
  textBold: {
    fontSize: 15,
    fontWeight:"bold",
    color: "#272727"
  },
  textRegular: {
    paddingLeft: 10,
    fontSize: 15,
    fontWeight: "400",
    alignSelf: "flex-start"
  },
  nameText: {
    // paddingLeft: 10,
    fontSize: 20,
    fontWeight: "500",
    alignSelf: "flex-start",
    paddingBottom: 10,
    color: "#272727"
  },
  list: {
    flex: 1,
    borderLeftWidth: 3,
    borderLeftColor: colors.primary,
    borderColor: "black",
    borderRadius: 2,
    backgroundColor:"white",
    padding: 10,
    paddingLeft: 15,
    margin: 10,
    paddingBottom: 10,
    // width: "95%",
    shadowOpacity: .2,
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 5 }
  },

  textRow: {
    flexDirection: "row"
  },

  textColumn: {
    flexDirection: "column"
  },
  textRowTop: {
    flexDirection: "row",
  },
  deleteContainer:{
    left: 220
  },
  exlistItem: {
    fontWeight: "400"
  },
  exlistContainer: {
    padding: 5
  }
});