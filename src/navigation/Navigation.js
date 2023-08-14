import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../src/Home";
import TodoCreate from "../src/TodoCreate";

const stack=createNativeStackNavigator();

const Navigation = () => {
  return (
   <NavigationContainer>
<stack.Navigator>
    <stack.Screen
    name="Home"
    component={Home}
    />
<stack.Screen
    name="TodoCreate"
    component={TodoCreate}
    />
</stack.Navigator>
   </NavigationContainer>
  )
}

export default Navigation