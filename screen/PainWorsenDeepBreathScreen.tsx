import {SafeAreaView, Text, View} from "react-native";
import {Card, Button} from "@rneui/themed";
import {StyleSheet} from "react-native";
import useNavigateToFeverOrCoughScreen from "../hooks/navigate/useNavigateToFeverOrCoughScreen";
import useQuestionCallback from "../hooks/useQuestionCallback";

export default () => {

    const onPress = useQuestionCallback(
        useNavigateToFeverOrCoughScreen(),
        'painWorsenDeepBreath'
    );

    return <SafeAreaView style={{flex: 1}}>
        <Card>
            <Card.Title>Does your pain get worse if you take a deep breath?</Card.Title>
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
