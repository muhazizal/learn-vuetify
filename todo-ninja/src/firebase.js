import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
	apiKey: 'AIzaSyCysItnowDsRoKqmLLvLfxM6FAuMUqv3ng',
	authDomain: 'todo-ninja-edd29.firebaseapp.com',
	databaseURL: 'https://todo-ninja-edd29.firebaseio.com',
	projectId: 'todo-ninja-edd29',
	storageBucket: 'todo-ninja-edd29.appspot.com',
	messagingSenderId: '150024821162',
	appId: '1:150024821162:web:748261161bcc7b7a3af3d3',
	measurementId: 'G-CG5MXWMBCZ',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const db = firebase.firestore();

export default db;
