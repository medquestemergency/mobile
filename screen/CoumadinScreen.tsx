import {SafeAreaView, Text, View} from "react-native";
import {Card, Button} from "@rneui/themed";
import {StyleSheet} from "react-native";
import useNavigateToMainScreen from "../hooks/navigate/useNavigateToMainScreen";
import useQuestionCallback from "../hooks/useQuestionCallback";
import {appendCoumadin} from "../services/questionApiSlice";
export default () => {
    //todo use navigate to thank you screen
    const onPress = useQuestionCallback(
        useNavigateToMainScreen(),
        appendCoumadin
    );
    return <SafeAreaView style={{flex: 1}}>
        <Card>
            <Card.Title>Do you take Coumadin?</Card.Title>
            <Button onPress={()=>onPress("Yes")} style={styles.button}>Yes</Button>
            <Button onPress={()=>onPress("No")} style={styles.button}>No</Button>
        </Card>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 6,
        margin: 5,
    }
});
