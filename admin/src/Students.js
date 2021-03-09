import React from "react";
import Firebase from "firebase";
import config from "./config";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export class Students extends React.Component {
  constructor(props) {
    super(props);
    // Firebase.initializeApp(config.firebase);
    if (!Firebase.apps.length) {
      Firebase.initializeApp(config);
   }else {
      Firebase.app(); // if already initialized, use that one
   }
    this.usersRef = Firebase.firestore().collection('mentors');
    this.mentors = [];
    console.log("helloo mentors", this.mentors)
    this.getmentors();
    this.students = [];
    this.state = {
      developers: []
    };

  }

  componentDidMount() {
    console.log("umm tf is this called?", this.students);

    // this.getUserData();
    console.log("umm tf is this called?", this.students);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState !== this.state) {
  //     this.getUserData();
  //   }
  // }
  getmentors = async () => {
    // let ref = this.usersRef.get();
    let querySnap = await this.usersRef.get();
    querySnap.forEach(qDocSnap => {
        let key = qDocSnap.id;
        let data = qDocSnap.data();
        data.key = key;
        this.mentors.push(data);
    });
  }

  writeUserData = async (name, school, session, mentor) => {
    var sublistRef = this.usersRef;
    let thementor = this.mentors.filter(name => name.displayName == mentor);
    console.log("wtftttt", thementor[0].key)
    let newUser = {
      name: name,
      school: school,
      session: session,
      mentor: mentor
    }
    console.log("students", this.students)
    // if doc exists
    // if (this.state.developers) {
    //   console.log("mentor has a student list before :)");
    //   sublistRef = await this.usersRef.doc(thementor.key);
    // }
    // create new doc
    // else {
      sublistRef = await this.usersRef.doc(thementor[0].key);
      console.log("new student doc", thementor.key);
    // }

    console.log("hello mentor writeuserdata", thementor)
    let newUserDocRef = await sublistRef.collection("students").add(newUser);
    let key = newUserDocRef.id;
    newUser.key = key;
    // this.students.push(newUser);
    this.setState({developers: newUser});
    console.log(newUserDocRef);
  };

  getUserData = async () => {
    // let ref = this.usersRef.get();
    let querySnap = await this.usersRef.get();
    querySnap.forEach(qDocSnap => {
      let key = qDocSnap.id;
      let data = qDocSnap.data();
      data.key = key;
      this.students.push(data);
      this.setState({developers: data});
    })
    console.log("getuser data", this.students);

    // ref.on("value", snapshot => {
    //   const state = snapshot.val();
    //   this.setState(state);
    // });
  };

  handleSubmit = event => {
    event.preventDefault();
    let name = this.refs.name.value;
    let school = this.refs.school.value;
    let session = this.refs.session.value;
    let mentor = this.refs.mentor.value;
    let uid = this.refs.uid.value;

    if (uid && name && school) {
      // const { developers } = this.state;
      const devIndex = this.students.findIndex(data => {
        return data.uid === uid;
      });
      this.students[devIndex].name = name;
      this.students[devIndex].school = school;
      this.students[devIndex].session = session;
      this.students[devIndex].mentor = mentor;
      this.setState({ developers: this.students });
    } else if (name && school) {
      const uid = new Date().getTime().toString();
      this.writeUserData(name, school, session, mentor, uid);
      console.log("submitted", name, school, session, mentor, uid);
      // const { developers } = this.state;
      // this.students.push({ uid, name, role });
      // this.setState({ developers: this.students });
    }

    this.refs.name.value = "";
    this.refs.school.value = "";
    this.refs.session.value = "";
    this.refs.mentor.value = "";
    this.refs.uid.value = "";


  };

  removeData = developer => {
    const { developers } = this.state;
    const newState = developers.filter(data => {
      return data.uid !== developer.uid;
    });
    this.setState({ developers: newState });
  };

  updateData = developer => {
    this.refs.uid.value = developer.uid;
    this.refs.name.value = developer.name;
    this.refs.role.value = developer.role;
  };

  render() {
    const { developers } = this.state;
    console.log("hello render", developers);
    return (
     
      <React.Fragment>
        
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h1>Add a Student</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              {this.students.map(developer => (
                <>
                <div
                //key not needed with react.fragment
                  key={developer.uid}
                  className="card float-left"
                  style={{ width: "18rem", marginRight: "1rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{developer.name}</h5>
                    <h5 className="card-title">{developer.school}</h5>
                    <h5 className="card-title">{developer.session}</h5>
                    <p className="card-text">{developer.mentor}</p>
                    <button
                      onClick={() => this.removeData(developer)}
                      className="btn btn-link"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => this.updateData(developer)}
                      className="btn btn-link"
                    >
                      Edit
                    </button>
                  </div>
                </div>
                </>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <h1>Add new team member here</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                  <input type="hidden" ref="uid" />
                  <div className="form-group col-md-6">
                    <label>Name</label>
                    <input
                      type="text"
                      ref="name"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>School</label>
                    <input
                      type="text"
                      ref="school"
                      className="form-control"
                      placeholder="Session"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Session</label>
                    <input
                      type="text"
                      ref="session"
                      className="form-control"
                      placeholder="Session"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Mentor</label>
                    <input
                      type="text"
                      ref="mentor"
                      className="form-control"
                      placeholder="Mentor"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <h3>
                Tutorial{" "}
                <a href="https://sebhastian.com/react-firebase-real-time-database-guide">
                  here
                </a>
              </h3>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}


//export default App;
