import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

class Ride {
  constructor(driverId, riderId, pickupLocation, dropoffLocation, status) {
    this.driverId = driverId;
    this.riderId = riderId;
    this.pickupLocation = pickupLocation;
    this.dropoffLocation = dropoffLocation;
    this.status = status;
  }

  static async createRide(driverId, riderId, pickupLocation, dropoffLocation, status) {
    const rideDocRef = await firestore.collection('rides').add({
      driverId,
      riderId,
      pickupLocation,
      dropoffLocation,
      status,
    });
    return rideDocRef.id;
  }
}

export default Ride;
