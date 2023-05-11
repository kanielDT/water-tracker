import { Box, Text, InfoIcon, ArrowDownIcon, ArrowUpIcon } from "native-base"

export default function Goals({ goal, setGoal }) {
    return (
        <Box height={100} width="100%" alignItems="center" justifyContent="center" >
            <Text color="blue.300" fontSize="lg">
                <ArrowUpIcon color="blue.100" onPress={() => setGoal(goal + 500)} />
                <InfoIcon color="blue.300" mr={2} />
                Water target: {goal} ml
                <ArrowDownIcon color="blue.100" onPress={() => setGoal(goal + 500)} />
            </Text>
        </Box>
    )
}