import {Dimensions, SafeAreaView, Text, TextInput, View} from "react-native";
import {Card, Button, useTheme} from "@rneui/themed";
import {StyleSheet} from "react-native";

import useQuestionCallback from "../hooks/useQuestionCallback";
import {useState} from "react";
import useNavigateToPainLocatedScreen from "../hooks/navigate/useNavigateToPainLocatedScreen";
export default () => {
    const theme = useTheme();

    const onPress = useQuestionCallback(
        useNavigateToPainLocatedScreen(),
        'age'
    )
    const handleSubmit = () => {
        if(inputValue.trim() == "" ) return;
        onPress(inputValue);
    }
    const [inputValue, setInputValue] = useState<string>('');

    const handleChange = (value: string) => {
        const numericValue = value.replace(/[^0-9]/g, '');
        setInputValue(numericValue);
    };
5

    return <SafeAreaView style={[{backgroundColor: theme.theme.colors.primary,flex: 1},styles.container]}>
        <Card containerStyle={{width: 600, borderRadius:30}}>
            <Card.Title>Age</Card.Title>
            <TextInput
                style={styles.input}
                value={inputValue}
                onChangeText={handleChange}
                keyboardType="numeric"
            />
            <Button onPress={handleSubmit} style={styles.button}>Submit</Button>
        </Card>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        alignSelf:"center",
        width:200
    },
        button: {
        borderRadius: 6,
        margin: 5,
            alignSelf:"center",
            width:250
    }
});
