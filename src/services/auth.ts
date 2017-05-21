import firebase from "firebase";
import {User} from "../classes/User";

export class AuthService {
      userInformation = {
            isAuthenticated: false,
            uid: ""
      }

      uid: string;

      signUp(email: string, password: string) {
            return firebase.auth().createUserWithEmailAndPassword(email, password);
      }

      registerUser(user: User) {
            return firebase.database().ref('users/' + user.userId).set({
                  uid: user.userId,
                  name: user.name,
                  lastName: user.lastName,
                  documentType: user.documentType,
                  document: user.document,
                  email: user.email,
                  password: user.password,
                  profile_picture: user.imageUrl
            });
      }

      getUsers() {
            return firebase.database().ref('users/').set({
                  username: name,
            });
      }

      signIn(email: string, password: string) {
            return firebase.auth().signInWithEmailAndPassword(email, password);
      }

      getActiveUserId(){
            return this.uid;
      }

      logOut() {
            firebase.auth().signOut();
      }
}