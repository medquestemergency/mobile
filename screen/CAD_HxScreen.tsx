import {SafeAreaView} from "react-native";
import {Card, Button} from "@rneui/themed";
import {StyleSheet} from "react-native";
import useNavigateToTraumaticInjuryScreen from "../hooks/navigate/useNavigateToTraumaticInjuryScreen";
import useQuestionCallback from "../hooks/useQuestionCallback";

export default () => {
    const onPress = useQuestionCallback(
        useNavigateToTraumaticInjuryScreen(),
        'cadHx'
    )

    return <SafeAreaView style={{flex: 1}}>
        <Card>
            <Card.Title>Do you have any family history in 1st degree relatives of coronary artery disease (diagnosed at
                age 65 or younger)?</Card.Title>
            <Button onPress={() => onPress("Yes")} style={styles.button}>Yes</Button>
            <Button onPress={() => onPress("No")} style={styles.button}>No</Button>
        </Card>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 6,
        margin: 5,
    }
});
