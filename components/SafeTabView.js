import * as React from "react";
import {Platform, StatusBar, StyleSheet, View, KeyboardAvoidingView} from "react-native";

import Layout from "../constants/Layout";
import {initialWindowSafeAreaInsets, SafeAreaView} from "react-native-safe-area-context";
import {Container, Root} from "native-base";
import {NToast} from "./StyledPopup";

export default function SafeTabView(props) {
  if (Platform.OS === "ios") {
    const insets = initialWindowSafeAreaInsets;

    return (
      <KeyboardAvoidingView behavior="padding" enabled keyboardVerticalOffset={10}
                            style={[styles.container, props.containerStyle]}>
        <View style={{flex: 1, paddingTop: insets.top}}>
          <Container {...props} style={[styles.container, props.style]}>
            {props.children}
          </Container>
        </View>
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
