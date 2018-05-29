import Firebase from 'firebase';
 let config = {
    apiKey: "AIzaSyDHqYeMC_1qjBXiS1tWET5LAgNll1lBe2A",
    authDomain: "recirate-8076f.firebaseio.com",
    databaseURL: "https://recirate-8076f.firebaseio.com/",
    projectId: "recirate-8076f"
  };
let app = Firebase.initializeApp(config);
export const db = app.database();