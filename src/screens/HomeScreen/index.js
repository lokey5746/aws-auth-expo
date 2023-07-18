import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { Auth } from "aws-amplify";

const Home = () => {
  const onResendPress = async () => {
    await Auth.signOut();
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.home}>
        <Text style={styles.title}>Home Screen</Text>
      </View> */}
      <CustomButton text="Home Screen" type="SECONDARY" />
      <CustomButton text="Sign Out" onPress={onResendPress} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    padding: 20,
  },
  home: {
    backgroundColor: "#153243",
    padding: 14,
    paddingHorizontal: 30,
    elevation: 5,
    borderRadius: 7,
  },
  title: {
    color: "white",
    fontSize: 16,
  },
});
