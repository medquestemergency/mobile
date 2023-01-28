import {SafeAreaView, Text, TextInput, View} from "react-native";
import {Card, Button} from "@rneui/themed";
import {StyleSheet} from "react-native";
import {useAppSelector} from "../app/hooks";
import {RootState} from "../app/store";
import ResultView from "../components/ResultView";

export default () => {
    const data = useAppSelector((state: RootState) => state);

    return <SafeAreaView style={{flex: 1}}>
        <Card>
            <Card.Title>RESULTS PAGE</Card.Title>
            {Object.entries(data.question).map(([key, value], index) => <ResultView name={key} formState={value} key={key + index}/>)}
        </Card>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
        button: {
        borderRadius: 6,
        margin: 5,
    }
});
