import {Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {Card, Button, useTheme} from "@rneui/themed";
import {StyleSheet, Dimensions} from "react-native";
import useNavigateToPainLengthScreen from "../hooks/navigate/useNavigateToPainLengthScreen";
import useQuestionCallback from "../hooks/useQuestionCallback";
import {ImageAssets} from "../assets/ImageAssets";

export default () => {

    const {width, height} = Dimensions.get('window');
    const isTablet = width >= 768;

    const onPress = useQuestionCallback(
        useNavigateToPainLengthScreen(),
        'painLocated'
    )


    const theme = useTheme();
    return <SafeAreaView style={{backgroundColor: theme.theme.colors.primary, flex: 1}}>
        <ScrollView>
            <Card containerStyle={{borderRadius:30}}>
                <Card.Title>Where is your pain located?</Card.Title>
                <View style={{alignItems:"center"}}>
                    <View style={isTablet ? styles.tabletScreen : styles.phoneScreen}>
                        <TouchableOpacity onPress={() => onPress("Left Chest")}>
                            <Image style={{width:350}} source={ImageAssets.leftChestPain}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onPress("Right Chest")}>
                            <Image style={{width:350}}  source={ImageAssets.rightChestPain}/>
                        </TouchableOpacity>
                    </View>
                    <View style={isTablet ? styles.tabletScreen : styles.phoneScreen}>
                        <TouchableOpacity onPress={() => onPress("Substernal")}>
                            <Image style={{width:350}}  source={ImageAssets.rightChestPain}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onPress("Epigastric")}>
                            <Image style={{width:350}} source={ImageAssets.epigastricPain}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </Card>
        </ScrollView>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 6,
        margin: 5,
    },
    tabletScreen: {
        flexDirection: "row",
    },
    phoneScreen: {
        flexDirection: "column"
    }
});
