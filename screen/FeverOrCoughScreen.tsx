import {SafeAreaView, Text, View} from "react-native";
import {Card, Button} from "@rneui/themed";
import {StyleSheet} from "react-native";
import useNavigateToMenuTabNavigation from "../hooks/navigate/useNavigateToPainLengthScreen";
import useNavigateToGallbladderScreen from "../hooks/navigate/useNavigateToGallbladderScreen";
import useNavigateToCAD_HxScreen from "../hooks/navigate/useNavigateToCAD_HxScreen";
import useNavigateToCoumadinScreen from "../hooks/navigate/useNavigateToCoumadinScreen";

export default () => {
    const navigate = useNavigateToCoumadinScreen();
    return <SafeAreaView style={{flex: 1}}>
        <Card>
            <Card.Title>Have you had a fever or cough?</Card.Title>
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
