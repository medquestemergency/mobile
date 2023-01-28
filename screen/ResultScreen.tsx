import {SafeAreaView, Text, TextInput, View} from "react-native";
import {Card, Button} from "@rneui/themed";
import {StyleSheet} from "react-native";

import useQuestionCallback from "../hooks/useQuestionCallback";
import {useEffect, useState} from "react";
import useNavigateToPainLocatedScreen from "../hooks/navigate/useNavigateToPainLocatedScreen";
import {useAppSelector} from "../app/hooks";
import {RootState} from "../app/store";

export default () => {
    const myData = useAppSelector((state: RootState) => state);
    useEffect(()=>{console.log(myData,"DASDASDASDASDASDA")},[myData])

    return <SafeAreaView style={{flex: 1}}>
        <Card>
            <Card.Title>RESULTS PAGE</Card.Title>
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
