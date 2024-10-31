import { Image, View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useState } from "react";

export const OrderScreen = ({ navigation }: any) => {
  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [exp, setExp] = useState('');
  const [cvv, setCvv] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <ThemedView style={styles.titleContainer}>
        <View style={styles.map}>
          <Image
            source={require("@/assets/images/map.png")}
            style={styles.image}
          />
          <Image
            source={require("@/assets/images/loc.png")}
            style={styles.location}
          />
        </View>

        <View style={styles.form}>
          <View style={styles.formRow}>
            <Text style={styles.label}>Address:</Text>
            <View style={styles.inputBox}>
              <TextInput
                value={address}
                onChangeText={(value) => { setAddress(value); }}
                placeholder="Enter address here"
                style={styles.input}
              />
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.row}>
              <Text style={styles.label}>Card Info:</Text>
              <TextInput
                value={cardNumber}
                onChangeText={(value) => { setCardNumber(value); }}
                maxLength={15}
                placeholder="**** **** **** ****"
                style={styles.input}
              />
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Expired:</Text>
              <TextInput
                value={exp}
                onChangeText={(value) => { setExp(value); }}
                maxLength={7}
                placeholder="**/****"
                style={{ ...styles.input, width: 'auto', marginRight: 20}}
              />
              <Text style={styles.label}>CVV:</Text>
              <TextInput
                value={cvv}
                maxLength={3}
                onChangeText={(value) => { setCvv(value); }}
                placeholder="***"
                style={styles.input}
              />
            </View>
            <View style={{ ...styles.formRow, justifyContent: 'space-between'}}>
              <Text style={styles.label}>Total:</Text>
              <TextInput
                value={amount}
                onChangeText={(value) => { setAmount(value); }}
                maxLength={15}
                placeholder="**.**"
                style={styles.input}
              />
            </View>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button} onPress={() => console.log('Button pressed')}>
              <Text style={styles.buttonText}>PAY</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ThemedView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%', // Adjust the width as needed
    height: '100%', // Adjust the height as needed
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
  },
  content: {
    flex: 1, // Take up remaining space
  },
  map: {
    position: 'relative',
    width: "80%",
    height: 250,
    borderWidth: 1,
    justifyContent: "center",
    marginTop: 10
  },
  form: {
    borderRadius: 15,
    width: "90%",
    justifyContent: "center",
    // backgroundColor: "#",
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
  card: {
    marginTop: 8,
    marginBottom: 8,
  },
  inputBox: {
    width: '70%',
    height: 30,
    borderRadius: 20,
    backgroundColor: '#D1D1D1',
    paddingLeft: 10,
    paddingRight: 10
  },
  input: {
    width: '100%',
    height: '100%',
  },
  label: {
    fontSize: 20,
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
  location: {
    position: 'absolute',
    left: 100,
    width: 30,
    height: 30
  }
});
