import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

export default function App() {
  const userInfo = {
    email: "",
    password: "",
  };
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(userInfo);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(userInfo);
  };
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imag}
          source={require("./images/photoBg.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                marginBottom: isShowKeyboard ? 20 : 100,
                // marginBottom: isShowKeyboard === false ? 100 : 20,
              }}
            >
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Hello again!</Text>
                <Text style={styles.headerTitle}>Welcome back!</Text>
              </View>
              <View>
                <Text style={styles.inputTitle}>Email addres</Text>
                <TextInput
                  style={styles.input}
                  textAlign={"center"}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.email}
                  onChangeText={(value) => {
                    setState((prevState) => ({ ...prevState, email: value }));
                  }}
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={styles.inputTitle}>password</Text>
                <TextInput
                  style={styles.input}
                  textAlign={"center"}
                  secureTextEntry={true}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.password}
                  onChangeText={(value) => {
                    setState((prevState) => ({
                      ...prevState,
                      password: value,
                    }));
                  }}
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.button}
                onPress={keyboardHide}
              >
                <Text style={styles.buttonTitle}>Sign In</Text>
              </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  imag: {
    flex: 1,
    resizeMode: "cover",
    // justifyContent: "center",
    justifyContent: "flex-end",
  },
  form: {
    marginHorizontal: 30,
  },
  header: {
    alignItems: "center",
    marginBottom: 100,
  },
  headerTitle: {
    fontSize: 30,
    color: "#000000",
  },
  inputTitle: {
    color: "#000000",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000000",
    height: 40,
    borderRadius: 7,
    padding: 10,
  },
  button: {
    height: 40,
    borderRadius: 15,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 70,
    ...Platform.select({
      ios: {
        backgroundColor: "transparent",
        borderColor: "#000000",
      },
      android: {
        backgroundColor: "#ECEEE1",
        borderColor: "transparent",
      },
    }),
  },
  buttonTitle: {
    color: "#000000",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
