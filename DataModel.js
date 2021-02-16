import firebase from 'firebase';
import '@firebase/firestore';
import '@firebase/storage';
import { firebaseConfig } from './Secrets';

class DataModel {
    constructor() {
      if (firebase.apps.length === 0) { // aka !firebase.apps.length
        firebase.initializeApp(firebaseConfig);
      }
    }




}
let theDataModel = undefined;

export function getDataModel() {
    if (!theDataModel) {
    theDataModel = new DataModel();
    }
    return theDataModel;
}