import {SafeAreaView, Text, View} from "react-native";
import {Card, Button} from "@rneui/themed";
import {StyleSheet} from "react-native";
import useNavigateToCoumadinScreen from "../hooks/navigate/useNavigateToCoumadinScreen";
import useQuestionCallback from "../hooks/useQuestionCallback";
import {appendFeverOrCough} from "../services/questionApiSlice";

export default () => {
    const onPress = useQuestionCallback(
        useNavigateToCoumadinScreen(),
        appendFeverOrCough
    );
    return <SafeAreaView style={{flex: 1}}>
        <Card>
            <Card.Title>Have you had a fever or cough?</Card.Title>
            <Button onPress={()=> onPress("Yes")} style={styles.button}>Yes</Button>
            <Button onPress={()=> onPress("No")} style={styles.button}>No</Button>
        </Card>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 6,
        margin: 5,
    }
});
