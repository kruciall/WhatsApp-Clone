import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/navigation';
import { Amplify, Auth, API, graphqlOperation } from 'aws-amplify'
import awsconfig from './src/aws-exports'
import { withAuthenticator } from "aws-amplify-react-native";
import { useEffect } from 'react';
import { getUser} from './src/graphql/queries';
import { createUser } from './src/graphql/mutations';


Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

 function App() {

  useEffect(() => {
    const syncUser = async () => {
      // get Auth User
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
  
      // query the database using Auth user id (sub)
      const userData = await API.graphql(graphqlOperation(getUser, { id: authUser.attributes.sub }));

      if (userData.data.getUser) {
        console.log("User already exists in DB")
        return;
      }
      // if there is no users in database, create one for the user
      const newUser = {
        id: authUser.attributes.sub,
        name: authUser.attributes.phone_number,
        status: "Hey, I am using WhatsApp",
      };
      //send to graphQL API database
      await API.graphql(graphqlOperation(createUser, { input: newUser}))
    }
    syncUser();
  }, [])
  
  return (
    <View style={styles.container}>
      <Navigator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
    
  },
});

export default withAuthenticator(App);