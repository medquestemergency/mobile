import {SafeAreaView, Text, View} from "react-native";
import {Card, Button} from "@rneui/themed";
import {StyleSheet} from "react-native";
import useNavigateToGallbladderScreen from "../hooks/navigate/useNavigateToGallbladderScreen";
import useQuestionCallback from "../hooks/useQuestionCallback";

export default () => {

    const onPress = useQuestionCallback(
        useNavigateToGallbladderScreen(),
        'traumaticInjury'
    );

    return <SafeAreaView style={{flex: 1}}>
        <Card>
            <Card.Title>Did your pain start after a traumatic injury?</Card.Title>
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
