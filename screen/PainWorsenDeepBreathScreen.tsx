import {SafeAreaView, Text, View} from "react-native";
import {Card, Button} from "@rneui/themed";
import {StyleSheet} from "react-native";
import useNavigateToFeverOrCoughScreen from "../hooks/navigate/useNavigateToFeverOrCoughScreen";
import useQuestionCallback from "../hooks/useQuestionCallback";
import useNavigateToPulmonaryEmbolismRuleOutCriteriaScreen
    from "../hooks/navigate/useNavigateToPulmonaryEmbolismRuleOutCriteriaScreen";

export default () => {

    const onPressYes = useQuestionCallback(
        useNavigateToPulmonaryEmbolismRuleOutCriteriaScreen(),
        'painWorsenDeepBreath'
    );
    const onPressNo = useQuestionCallback(
        useNavigateToFeverOrCoughScreen(),
        'painWorsenDeepBreath'
    );

    return <SafeAreaView style={{flex: 1}}>
        <Card>
            <Card.Title>Does your pain get worse if you take a deep breath?</Card.Title>
            <Button onPress={()=>onPressYes("Yes")} style={styles.button}>Yes</Button>
            <Button onPress={()=>onPressNo("No")} style={styles.button}>No</Button>
        </Card>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 6,
        margin: 5,
    }
});
