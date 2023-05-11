import { NativeBaseProvider, Box, Text } from "native-base";


export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#151926" alignItems="center" justifyContent="center" >
        <Box height={50} width="100%" bg="29313C"  ></Box>

      </Box>
    </NativeBaseProvider>
  )
}
