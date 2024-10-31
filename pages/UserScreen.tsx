import { Image, View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useState } from "react";

export const UserScreen = ({ navigation }: any) => {
  const [username, setUsername] = useState('JAME98');
  const [firstName, setFirstName] = useState('JAME');
  const [lastName, setLastName] = useState('RED');
  const [email, setEmail] = useState('JAME98@GMAIL.COM');
  const [password, setPassword] = useState('HELLOWORLD');

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">SIGN UP</ThemedText>

        <View style={styles.profile}>
          <View style={styles.row}>
            {/* Image on the left */}
            <View style={styles.imgBg}>
              <Image
                source={require("@/assets/images/user.png")}
                style={styles.image}
              />
            </View>

            {/* Content on the right */}
            <View style={styles.content}>
              <Text style={styles.default}>USERNAME: JAME98</Text>
              <Text style={styles.default}>EMAIL: JAME98@GMAIL.COM</Text>
            </View>
          </View>
        </View>

        <View style={styles.form}>
          <View style={styles.formRow}>
            <Text style={styles.label}>USERNAME</Text>
            <View style={styles.inputBox}>
              <TextInput
                value={username}
                onChangeText={(value) => { setUsername(value); }}
                placeholder="Enter text here"
                style={styles.input}
              />
            </View>
          </View>
          <View style={styles.formRow}>
            <Text style={styles.label}>FIRST NAME</Text>
            <View style={styles.inputBox}>
              <TextInput
                value={firstName}
                onChangeText={(value) => { setFirstName(value); }}
                placeholder="First name"
                style={styles.input}
              />
            </View>
          </View>
          <View style={styles.formRow}>
            <Text style={styles.label}>LAST NAME</Text>
            <View style={styles.inputBox}>
              <TextInput
                value={lastName}
                onChangeText={(value) => { setLastName(value); }}
                placeholder="Last name"
                style={styles.input}
              />
            </View>
          </View>
          <View style={styles.formRow}>
            <Text style={styles.label}>EMAIL</Text>
            <View style={styles.inputBox}>
              <TextInput
                value={email}
                onChangeText={(value) => { setEmail(value); }}
                placeholder="Email"
                style={styles.input}
              />
            </View>
          </View>
          <View style={styles.formRow}>
            <Text style={styles.label}>PASSWORD</Text>
            <View style={styles.inputBox}>
              <TextInput
                textContentType="password"
                value={password}
                onChangeText={(value) => { setPassword(value); }}
                placeholder="Password"
                style={styles.input}
              />
            </View>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button} onPress={() => console.log('Button pressed')}>
              <Text style={styles.buttonText}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ThemedView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
    borderRadius: 10,
  },
  imgBg: {
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
    borderRadius: 300,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 30,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  formRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    justifyContent: "space-between"
  },
  content: {
    flex: 1, // Take up remaining space
  },
  profile: {
    borderRadius: 30,
    width: "90%",
    height: 150,
    borderWidth: 1,
    justifyContent: "center",
    backgroundColor: "#0323141A",
    marginTop: 10
  },
  form: {
    borderRadius: 15,
    width: "90%",
    justifyContent: "center",
    backgroundColor: "#D1D1D1",
    padding: 10,
    marginTop: 30,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    width: "100%",
    backgroundColor: "rgb(242, 242, 242)",
    marginTop: 50
  },
  default: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 8,
    marginBottom: 8,
    color: '#000'
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 8,
    marginBottom: 8,
  },
  inputBox: {
    width: 200,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#fff',
    padding: 5
  },
  input: {
    width: '100%',
    height: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: '#000',
    marginRight: 20
  },
  buttonRow: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5
  },
  button: {
    backgroundColor: '#A41212',
    padding: 10,
    borderRadius: 30,
    width: '30%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});
