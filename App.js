import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, View, BackHandler, LogBox, Keyboard, Text, StyleSheet } from "react-native";
import { useGlobal, useDispatch } from "reactn";

export default function App() {
  const [, setKeyboardVisible] = useGlobal("keyboard");
  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true); // or some other action
    });
    const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false); // or some other action
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  React.useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      Alert.alert(
        "앱종료",
        "앱을 종료하시겠습니까??",
        [
          { text: "취소", onPress: () => {}, style: "cancel" },
          {
            text: "종료",
            onPress: async () => {
              localData.isExit = true;
              BackHandler.exitApp();
            },
          },
        ],
        { cancelable: false }
      );
      return true;
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
