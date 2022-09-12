import {SafeAreaView, Text, View} from "react-native";
import {Card, Button} from "@rneui/themed";
import {StyleSheet} from "react-native";
import useNavigateToPainLengthScreen from "../hooks/navigate/useNavigateToPainLengthScreen";

export default () => {

    const navigate = useNavigateToPainLengthScreen();

    return <SafeAreaView style={{flex: 1}}>
        <Card>
            <Card.Title>Where is your pain located?</Card.Title>
            <Button onPress={navigate} style={styles.button}>Left Chest</Button>
            <Button onPress={navigate} style={styles.button}>Right Chest</Button>
            <Button onPress={navigate} style={styles.button}>Substernal</Button>
            <Button onPress={navigate} style={styles.button}>Epigastric</Button>
        </Card>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 6,
        margin: 5,
    }
});
