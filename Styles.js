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
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },
});