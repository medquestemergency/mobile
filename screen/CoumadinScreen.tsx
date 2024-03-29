import {SafeAreaView, Text, View} from "react-native";
import {Card, Button} from "@rneui/themed";
import {StyleSheet} from "react-native";
import useQuestionCallback from "../hooks/useQuestionCallback";
import useNavigateToResultScreen from "../hooks/navigate/useNavigateToResultScreen";
export default () => {

    const onPress = useQuestionCallback(
        useNavigateToResultScreen(),
        'coumadin'
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
