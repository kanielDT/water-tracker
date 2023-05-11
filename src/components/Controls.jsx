import { Box, AddIcon, Text, Button } from "native-base"

export default function Controls({ intake, setIntake }) {
    return (
        <Box width="100%" alignItems="center" justifyContent="center" >
            <Text color="whitesmoke" fontSize="xl">
                <AddIcon color="whitesmoke" />{" "}
                Add a portion of water
            </Text>
            <Box flexDir="row" w="80%" justifyContent="space-around" >
                <Button colorScheme="blue" size="lg" borderRadius={16} pl={6} pr={6}
                    onPress={() => setIntake(intake + 2000)}>
                    One Gallon</Button>
                <Button colorScheme="blue" size="lg" borderRadius={16} pl={6} pr={6}
                    onPress={() => setIntake(intake + 500)}>
                    One Bottle</Button>
            </Box>
            <Button colorScheme="grey" pl={8} pr={8} borderRadius={16} margin={2} onPress={() => setIntake(0)} >
                <Text color="whitesmoke" fontSize="lg" fontWeight="500">Reset</Text>
            </Button>
        </Box>
    )
}