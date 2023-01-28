import {SafeAreaView, Text, View} from "react-native";
import {Card, Button} from "@rneui/themed";
import {StyleSheet} from "react-native";
import useQuestionCallback from "../hooks/useQuestionCallback";
import useNavigateToCAD_HxScreen from "../hooks/navigate/useNavigateToCAD_HxScreen";

export default () => {

    const onPress = useQuestionCallback(
        useNavigateToCAD_HxScreen(),
        'painLength'
    )
    return <SafeAreaView style={{flex: 1}}>
        <Card>
            <Card.Title>How long has your pain been present?</Card.Title>
            <Button onPress={() => onPress("Less than 1 day")} style={styles.button}>Less than one day</Button>
            <Button onPress={() => onPress("2-7 days")} style={styles.button}>2-7 days</Button>
            <Button onPress={() => onPress("Greater than a week")} style={styles.button}>Greater than a week</Button>
        </Card>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 6,
        margin: 5,
    }
});
