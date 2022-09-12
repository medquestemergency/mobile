import {SafeAreaView, Text, View} from "react-native";
import {Card, Button} from "@rneui/themed";
import {StyleSheet} from "react-native";
import useNavigateToMainScreen from "../hooks/navigate/useNavigateToMainScreen";
export default () => {
    const navigate = useNavigateToMainScreen();
    return <SafeAreaView style={{flex: 1}}>
        <Card>
            <Card.Title>Do you take Coumadin?</Card.Title>
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
