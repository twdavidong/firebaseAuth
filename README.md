# firebaseAuth
Workable Firebase Auth React Native, Firebase V8-9

expo init FirebaseAuth
npm install @react-navigation/native
expo install react-native-screens react-native-safe-area-context
expo install firebase

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>

create screens folder

create loginScreen.js
create homeScreen.js

if extension 
ES7 React/Redux/GraphQL/React-Native snippets
rnfes <--- create all the basic steps

then can type rnfes in homeScreen and then loginScreen
change the View respectively Home Screen and Login Screen

go to app.js
point to Login and LoginScreen          
import LoginScreen from './screens/LoginScreen';
<Stack.Screen name="Login" component={LoginScreen} />
repeat for Home Screen
 <Stack.Screen options= {{headerShown: false}} name="Login" component={LoginScreen} />

App.js
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"    
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={ }
          onChangeText = {text => }
          style={styles.input}
        />
      </View>
    </KeyboardAvoidingView>


do TextInput for password as well


        <TouchableOpacity
          onPress={() => { }}
          style={styles.button}  
        >
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>

do touchableOpacity for Register as well


after setting properties of buttons and texts,

  const [email, setEmail] = useState('')
do likewise for password


create Firebase...

copy and paste firebase to firebase.js

edit firebase.js

activate Authentication at Firebase site, activate email/password

go back to login.js

const handleSignUp = () => {
}

const handleLogin = () => {
}

add listener
