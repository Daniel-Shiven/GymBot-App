import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors } from "$styles";

import Button from "$components/Button";
import ScreenHeader from "$components/ScreenHeader";
import ExerciseSelectionScreen from "./ExerciseSelection";
import ReviewWorkoutContainer from "./ReviewWorkoutContainer";

import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";

export default function CompleteDesignContainer({ route, navigation }) {
  const { exercisesToDisplay } = route.params;
  const [typedText, setTypedText] = useState("");
  const [goalText] = useState("Select your exercises!");
  const [showModal, setShowModal] = useState(false);

  const [selectedExercises, setSelectedExercises] = useState([]);

  return (
    <>
      {!showModal && (
        <>
          <ScreenHeader title="Workouts" />
          <View style={styles.container}>
            <View style={styles.chatContainer}>
              <LinearGradient
                colors={[colors.blue.default, colors.blue.lighter]} // Lighter blue gradient colors
                start={[0, 0.5]}
                end={[1, 0.5]}
                style={styles.chatBox}
              >
                <Image
                  source={require("$assets/circleicon.png")}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    borderWidth: 1,
                    borderColor: colors.white.default,
                    marginRight: 10,
                  }}
                />
                <Text style={styles.chatText}>{goalText}</Text>
              </LinearGradient>
            </View>

            <ExerciseSelectionScreen
              setSelectedExercises={setSelectedExercises}
              selectedExercises={selectedExercises}
              exercisesToDisplay={exercisesToDisplay}
            />
            <Button
              text="Continue"
              size="medium"
              style={{ position: "absolute", bottom: 10, width: "80%" }}
              onPress={() => setShowModal(!showModal)}
            />
          </View>
        </>
      )}

      {showModal && (
        <ReviewWorkoutContainer
          setShowModal={setShowModal}
          selectedExercises={selectedExercises}
          navigation={navigation}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey.lightest,
  },
  button: {
    alignSelf: "center",
    position: "absolute",
    bottom: 5,
    width: "90%",
    backgroundColor: colors.blue.default,
    borderRadius: 8,
    shadowColor: colors.black.default,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  text: {
    alignSelf: "center",
    fontSize: 24,
    paddingVertical: 10,
    color: colors.grey.lighter,
    fontWeight: "bold",
  },
  chatContainer: {
    alignItems: "center",
    margin: 15,
    marginBottom: 10,
  },
  chatBox: {
    backgroundColor: colors.white.default,
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  chatText: {
    flex: 1, // Allow text to wrap within the available space
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white.default,
  },
  container2: {
    position: "absolute",
    width: "100%",
    left: "5%",
    top: "17%",
    zIndex: 1,
  },
  button2: {
    backgroundColor: colors.blue.lighter, // Change the background color to your preferred color
    padding: 15,
    borderRadius: 28,
    width: "90%",
    shadowColor: colors.black.default,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    alignItems: "center",
  },
  buttonText: {
    color: colors.white.default, // Change the text color to your preferred color
    fontSize: 20,
    fontWeight: "bold",
  },
});
