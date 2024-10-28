import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen, UserScreen } from "@/pages";
import Icon from "react-native-vector-icons/MaterialIcons";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="HOME"
          component={HomeScreen}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="ORDER"
          component={UserScreen}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Icon name="shopping-cart" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="SAVED"
          component={UserScreen}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Icon name="favorite-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="PROFILE"
          component={UserScreen}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Icon name="account-circle" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="HELP"
          component={UserScreen}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Icon name="help" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
