import * as React from "react";
import {Platform, StatusBar, StyleSheet, View, KeyboardAvoidingView} from "react-native";

import Layout from "../constants/Layout";
import {SafeAreaView} from "react-native-safe-area-context";
import {Container, Root} from "native-base";

export default function SafeView(props) {
  if (Platform.OS === "ios") {
    return (
      <KeyboardAvoidingView behavior="padding" enabled keyboardVerticalOffset={10}
                            style={[styles.container, props.containerStyle]}>
        <SafeAreaView {...props} style={[styles.container, props.style]}>
          <Container {...props} style={[styles.container, props.style]}>
            {props.children}
          </Container>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  } else {
    return (
      <SafeAreaView {...props} style={[styles.container, props.style]}>
        <Container {...props} style={[styles.container, props.style]}>
          {props.children}
        </Container>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
});
