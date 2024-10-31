import { StyleSheet, View, Text, Image } from "react-native";
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen, UserScreen, OrderScreen } from "@/pages";
import Icon from "react-native-vector-icons/MaterialIcons";

const Drawer = createDrawerNavigator();

const CustomDrawer = (props: any) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.navigation}
    >
      {/* header */}
      <View style={styles.header}>
        <Image
          source={require("@/assets/images/header_bg.png")}
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

const routers: {
  name: string;
  component: any;
  headerTitleAlign?: "center" | "left" | undefined;
  drawerLabel?: string;
  headerTitle?: string;
  headerRight?: any;
  drawerIcon?: any;
}[] = [
  {
    name: "HOME",
    component: HomeScreen,
    headerTitleAlign: "center",
    drawerLabel: "HOME",
    headerTitle: "Mark's",
    headerRight: () => (
      <View style={styles.headerRight}>
        <Icon name="person" size={30} color="#000" />
      </View>
    ),
    drawerIcon: ({ color, size }: any) => (
      <Icon name="home" size={size} color={color} />
    ),
  },
  {
    name: "ORDER",
    component: OrderScreen,
    drawerIcon: ({ color, size }: any) => (
      <Icon name="shopping-cart" size={size} color={color} />
    ),
  },
  {
    name: "SAVED",
    component: UserScreen,
    drawerIcon: ({ color, size }: any) => (
      <Icon name="favorite-outline" size={size} color={color} />
    ),
  },
  {
    name: "PROFILE",
    component: UserScreen,
    drawerIcon: ({ color, size }: any) => (
      <Icon name="account-circle" size={size} color={color} />
    ),
  },
  {
    name: "HELP",
    component: UserScreen,
    drawerIcon: ({ color, size }: any) => (
      <Icon name="help" size={size} color={color} />
    ),
  }
];

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawer {...props} />}
      >
        {routers.map((item, idx) => {
          return (
            <Drawer.Screen
              key={idx}
              name={item.name}
              component={item.component}
              options={{
                headerTitleAlign: item.headerTitleAlign,
                drawerLabel: item.drawerLabel,
                headerTitle: item.headerTitle,
                drawerIcon: item.drawerIcon,
                headerRight: item.headerRight,
              }}
            />
          );
        })}
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
    position: "absolute",
  },
  headerRight: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 40,
    marginRight: 20,
    justifyContent: "center",
  },
  header: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    padding: 60,
    borderColor: "#000",
    overflow: "hidden",
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
