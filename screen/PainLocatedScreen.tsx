import {SafeAreaView, Text, View} from "react-native";
import {Card, Button} from "@rneui/themed";
import {StyleSheet} from "react-native";
import useNavigateToPainLengthScreen from "../hooks/navigate/useNavigateToPainLengthScreen";
import {appendPainLocation} from "../services/questionApiSlice";
import useQuestionCallback from "../hooks/useQuestionCallback";

export default () => {

    const onPress = useQuestionCallback(
        useNavigateToPainLengthScreen(),
        appendPainLocation
    )

    return <SafeAreaView style={{flex: 1}}>
        <Card>
            <Card.Title>Where is your pain located?</Card.Title>
            <Button onPress={() => onPress("Left Chest")} style={styles.button}>Left Chest</Button>
            <Button onPress={() => onPress("Right Chest")} style={styles.button}>Right Chest</Button>
            <Button onPress={() => onPress("Substernal")} style={styles.button}>Substernal</Button>
            <Button onPress={() => onPress("Epigastric")} style={styles.button}>Epigastric</Button>
        </Card>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 6,
        margin: 5,
    }
});
