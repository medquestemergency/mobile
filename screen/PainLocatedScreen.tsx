import {Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {Card, Button} from "@rneui/themed";
import {StyleSheet} from "react-native";
import useNavigateToPainLengthScreen from "../hooks/navigate/useNavigateToPainLengthScreen";
import useQuestionCallback from "../hooks/useQuestionCallback";
import {ImageAssets} from "../assets/ImageAssets";

export default () => {

    const onPress = useQuestionCallback(
        useNavigateToPainLengthScreen(),
        'painLocated'
    )

    return <SafeAreaView style={{flex: 1}}>
        <ScrollView>
            <Card>
                <Card.Title>Where is your pain located?</Card.Title>
                <TouchableOpacity onPress={() => onPress("Left Chest")}>
                    <Image source={ImageAssets.leftChestPain}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onPress("Right Chest")}>
                    <Image source={ImageAssets.rightChestPain}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => onPress("Substernal")}>
                    <Image source={ImageAssets.rightChestPain}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onPress("Epigastric")}>
                    <Image source={ImageAssets.epigastricPain}/>
                </TouchableOpacity>
            </Card>
        </ScrollView>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 6,
        margin: 5,
    }
});
