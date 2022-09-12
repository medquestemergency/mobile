import {SafeAreaView, Text, View} from "react-native";
import {Card, Button} from "@rneui/themed";
import {StyleSheet} from "react-native";
import useNavigateToMenuTabNavigation from "../hooks/navigate/useNavigateToPainLengthScreen";
import useNavigateToPainWorsenDeepBreathScreen from "../hooks/navigate/useNavigateToPainWorsenDeepBreathScreen";

export default () => {
    const navigate = useNavigateToPainWorsenDeepBreathScreen();

    return <SafeAreaView style={{flex: 1}}>
        <Card>
            <Card.Title>Does your pain get worse after eating or does your upper abdomen hurt if you push on it?</Card.Title>
            <Button onPress={navigate} style={styles.button}>Yes</Button>
            <Button onPress={navigate} style={styles.button}>No</Button>
        </Card>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 6,
        margin: 5,
    }
});
