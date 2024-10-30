import { StyleSheet, View, Text, Image } from "react-native";
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen, UserScreen } from "@/pages";
import Icon from "react-native-vector-icons/MaterialIcons";

const Drawer = createDrawerNavigator();

const CustomDrawer = (props: any) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.navigation}>
      {/* header */}
      <View style={styles.header}>
        <Image
          source={require('@/assets/images/header_bg.png')}
          style={styles.image}
        />
        <View style={styles.profileCircle}>
          <Text style={styles.profileText}>F</Text>
        </View>
        <Text style={styles.text}>Faith Gaiciumia</Text>
      </View>
      {/* end of header */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawer {...props} />}
      >
        <Drawer.Screen
          name="HOME"
          component={HomeScreen}
          options={{
            headerTitleAlign: "center",
            drawerLabel: "HOME",
            headerTitle: "Mark's",
            drawerIcon: ({ focused, color, size }) => (
              <Icon name="home" size={size} color={color} />
            ),
            headerRight: () => (
              <View style={styles.headerRight}>
                <Icon name="person" size={30} color="#000" />
              </View>
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

const styles = StyleSheet.create({
  headerbg: {
    backgroundColor: "#000",
  },
  navigation: {
    paddingTop: 0,
  },
  image: {
    position: 'absolute',
  },
  headerRight: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 40,
    marginRight: 20,
    justifyContent: 'center'
  },
  header: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    padding: 60,
    borderColor: '#000',
    overflow: 'hidden',
  },
  profileCircle: {
    width: 100,
    height: 100,
    backgroundColor: "#12B886",
    borderRadius: 100,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  profileText: {
    color: "#fff",
    fontSize: 42,
  },
  text: {
    marginTop: 15,
    fontSize: 18,
  },
});
