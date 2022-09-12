import {SafeAreaView, Text, View} from "react-native";
import {Card, Button} from "@rneui/themed";
import {StyleSheet} from "react-native";
import useNavigateToMenuTabNavigation from "../hooks/navigate/useNavigateToPainLengthScreen";
import useNavigateToGallbladderScreen from "../hooks/navigate/useNavigateToGallbladderScreen";
import useNavigateToFeverOrCoughScreen from "../hooks/navigate/useNavigateToFeverOrCoughScreen";

export default () => {
    const navigate = useNavigateToFeverOrCoughScreen();
    return <SafeAreaView style={{flex: 1}}>
        <Card>
            <Card.Title>Does your pain get worse if you take a deep breath?</Card.Title>
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
