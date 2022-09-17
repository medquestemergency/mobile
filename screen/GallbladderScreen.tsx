import {SafeAreaView, Text, View} from "react-native";
import {Card, Button} from "@rneui/themed";
import {StyleSheet} from "react-native";
import useNavigateToPainWorsenDeepBreathScreen from "../hooks/navigate/useNavigateToPainWorsenDeepBreathScreen";
import useQuestionCallback from "../hooks/useQuestionCallback";
import {appendGallbladder} from "../services/questionApiSlice";

export default () => {
    const onPress = useQuestionCallback(
        useNavigateToPainWorsenDeepBreathScreen(),
        appendGallbladder
    );

    return <SafeAreaView style={{flex: 1}}>
        <Card>
            <Card.Title>Does your pain get worse after eating or does your upper abdomen hurt if you push on it?</Card.Title>
            <Button onPress={() => onPress("Yes")} style={styles.button}>Yes</Button>
            <Button onPress={() => onPress("No")} style={styles.button}>No</Button>
        </Card>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 6,
        margin: 5,
    }
});
