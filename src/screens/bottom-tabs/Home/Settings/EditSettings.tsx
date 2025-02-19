import type { NavigationProp, NavigationScreens } from "$types/navigation";

import { useContext, useState } from "react";
import {
  Alert,
  Button,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import { updateUserData } from "$api/supabase";
import { maxHeight, maxWeight, minHeight, minWeight } from "$consts/userData";
import { AppContext } from "$context";

import { colors } from "$styles";

import Option from "./Option";

export default function Settings({
  navigation,
  initialData,
}: {
  navigation: NavigationProp;
  initialData: NavigationScreens["Settings"];
}) {
  const { session, setUserData: setContextUserData } = useContext(AppContext);

  const [name, setName] = useState(initialData.name || "");
  const [bday, setBday] = useState<Date | null>(
    new Date(initialData.birthday) || null
  );
  const [gender, setGender] = useState(initialData.gender || "");
  const [weight, setWeight] = useState(initialData.weight?.toString() || "");
  const [height, setHeight] = useState(initialData.height?.toString() || "");

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <Option label="Name" value={name} onChange={setName} type="text" />
      <Option label="Age" value={bday} onChange={setBday} type="date" />
      <Option label="Gender" value={gender} onChange={setGender} type="text" />
      <Option
        label="Weight"
        value={weight?.toString()}
        onChange={setWeight}
        type="number"
      />
      <Option
        label="Height"
        value={height?.toString()}
        onChange={setHeight}
        type="number"
      />

      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => {
          Keyboard.dismiss();

          const weightNum = parseInt(weight);
          const heightNum = parseInt(height);

          if (weightNum < minWeight || weightNum > maxWeight) {
            Alert.alert(
              "Invalid weight",
              `Weight must be between ${minWeight} and ${maxWeight}`
            );
            return;
          }

          if (heightNum < minHeight || heightNum > maxHeight) {
            Alert.alert(
              "Invalid height",
              `Height must be between ${minHeight} and ${maxHeight}`
            );
            return;
          }

          const newUserData = {
            name,
            gender,
            birthday: bday.toString(),
            weight: weightNum,
            height: heightNum,
          };

          // Update the user data in the database
          updateUserData(session, newUserData).then(({ error }) => {
            if (error) {
              console.log(error);
            } else {
              // Update AppContext so that the changes are reflected immediately
              // in all screens and components
              setContextUserData(newUserData);

              navigation.goBack();
            }
          });
        }}
      >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>

      <Button
        title="Go back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonText: {
    color: colors.white.default,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  saveButton: {
    backgroundColor: colors.blue.default,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 8,
    marginTop: 12,
  },
});
