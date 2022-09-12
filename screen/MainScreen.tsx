import {SafeAreaView, Text, View} from "react-native";
import {Card, Button} from "@rneui/themed";
import {StyleSheet} from "react-native";

export default () => {
    return <SafeAreaView style={{flex: 1}}>
        <Card>
            <Card.Title>Where is your pain located?</Card.Title>
            <Button style={styles.button}>Left Chest</Button>
            <Button style={styles.button}>Right Chest</Button>
            <Button style={styles.button}>Substernal</Button>
            <Button style={styles.button}>Epigastric</Button>
        </Card>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 6,
        margin: 5,
    }
});
