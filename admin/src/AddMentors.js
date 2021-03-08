import React from "react";
import Firebase from "firebase";
import config from "./config";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export class AddMentors extends React.Component {
  constructor(props) {
    super(props);
    // Firebase.initializeApp(config.firebase);
    if (!Firebase.apps.length) {
      Firebase.initializeApp(config);
   }else {
      Firebase.app(); // if already initialized, use that one
   }
    this.usersRef = Firebase.firestore().collection('admins');
    this.mentors = []
    this.state = {
      developers: []
    };

  }

  componentDidMount() {
    console.log("umm tf is this called?", this.mentors);

    this.getUserData();
    console.log("umm tf is this called?", this.mentors);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState !== this.state) {
  //     this.getUserData();
  //   }
  // }

  writeUserData = async (uid, name, role) => {
    let newUser = {
      uid: uid,
      name: name,
      role: role
    }
    let newUserDocRef = await this.usersRef.add(newUser);
    // this.usersRef
    //   .add(this.state);
    let key = newUserDocRef.id;
    newUser.key = key;
    this.mentors.push(newUser);
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
      this.mentors.push(data);
      this.setState({developers: data});
    })
    console.log("getuser data", this.mentors);

    // ref.on("value", snapshot => {
    //   const state = snapshot.val();
    //   this.setState(state);
    // });
  };

  handleSubmit = event => {
    event.preventDefault();
    let name = this.refs.name.value;
    let role = this.refs.role.value;
    let uid = this.refs.uid.value;

    if (uid && name && role) {
      // const { developers } = this.state;
      const devIndex = this.mentors.findIndex(data => {
        return data.uid === uid;
      });
      this.mentors[devIndex].name = name;
      this.mentors[devIndex].role = role;
      this.setState({ developers: this.mentors });
    } else if (name && role) {
      const uid = new Date().getTime().toString();
      this.writeUserData(uid, name, role);
      console.log("submitted", uid, name, role);
      // const { developers } = this.state;
      // this.mentors.push({ uid, name, role });
      // this.setState({ developers: this.mentors });
    }

    this.refs.name.value = "";
    this.refs.role.value = "";
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
              <h1>Add a mentor</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              {this.mentors.map(developer => (
                <>
                <div
                //key not needed with react.fragment
                  key={developer.uid}
                  className="card float-left"
                  style={{ width: "18rem", marginRight: "1rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{developer.name}</h5>
                    <p className="card-text">{developer.role}</p>
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
                    <label>Role</label>
                    <input
                      type="text"
                      ref="role"
                      className="form-control"
                      placeholder="Role"
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
