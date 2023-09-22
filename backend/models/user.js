import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

class User {
  constructor(uid, name, email, role) {
    this.uid = uid;
    this.name = name;
    this.email = email;
    this.role = role;
  }

  static async getUser(uid) {
    const userDoc = await firestore.collection('users').doc(uid).get();
    if (userDoc.exists) {
      const userData = userDoc.data();
      return new User(uid, userData.name, userData.email, userData.role);
    } else {
      return null;
    }
  }

  static async createUser(uid, name, email, role) {
    await firestore.collection('users').doc(uid).set({
      name,
      email,
      role,
    });
    return new User(uid, name, email, role);
  }
}

export default User;
