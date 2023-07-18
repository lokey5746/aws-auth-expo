import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Navigation from "./src/navigation";

import { Amplify, Auth } from "aws-amplify";
import awsConfig from "./src/aws-exports";

Amplify.configure({ ...awsConfig, Analytics: { disabled: true } });

const App = () => {
  // Auth.signOut();
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },
});

export default App;
