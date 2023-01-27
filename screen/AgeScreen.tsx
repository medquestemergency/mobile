import {SafeAreaView, Text, TextInput, View} from "react-native";
import {Card, Button} from "@rneui/themed";
import {StyleSheet} from "react-native";
import useNavigateToPainLengthScreen from "../hooks/navigate/useNavigateToPainLengthScreen";
import useQuestionCallback from "../hooks/useQuestionCallback";
import {useState} from "react";

export default () => {

    const onPress = useQuestionCallback(
        useNavigateToPainLengthScreen(),
        'age'
    )
    const [inputValue, setInputValue] = useState<string>('');

    const handleChange = (value: string) => {
        const numericValue = value.replace(/[^0-9]/g, '');
        setInputValue(numericValue);
    };


    return <SafeAreaView style={{flex: 1}}>
        <Card>
            <Card.Title>Age</Card.Title>
            <TextInput
                style={styles.input}
                value={inputValue}
                onChangeText={handleChange}
                keyboardType="numeric"
            />
            <Button onPress={()=>onPress(inputValue)} style={styles.button}>Submit</Button>
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
