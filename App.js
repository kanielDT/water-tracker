import { useState, useEffect } from "react";
import { NativeBaseProvider, Box, Toast } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage"
import Title from "./src/components/Title";
import Goals from "./src/components/Goals";
import Tracker from "./src/components/Tracker";
import Controls from "./src/components/Controls";



export default function App() {

  const [intake, setIntake] = useState(0)
  const [goal, setGoal] = useState(4000)
  const getPreviousIntake = async () => {
    const value = await AsyncStorage.getItem("previousIntake")
    if (value) {
      setIntake(JSON.parse(value))
    }
  }

  const setPreviousIntake = async () => {
    if (intake) {
      await AsyncStorage.setItem("@storagekey", JSON.stringify(intake))
    }
  }

  useEffect(() => {
    getPreviousIntake()
  }, [])

  useEffect(() => {
    if (intake >= goal) {
      Toast.show({
        title: "Good job!",
        description: "you're done for the day.",
        bg: "blue.400",
        w: 350,
        h: 60,
        p: 16

      })
    }
  }, [intake])

  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#151926" alignItems="center" >
        <Box height={50} width="100%" bg="29313C"  ></Box>
        <Title />
        <Goals goal={goal} setGoal={setGoal} />
        <Tracker intake={intake} goal={goal} setIntake={setIntake} />
        <Controls intake={intake} setIntake={setIntake} />
      </Box>
    </NativeBaseProvider>
  )
}
