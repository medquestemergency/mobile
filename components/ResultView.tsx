import {FormState} from "../services/questionApiSlice";
import {Card} from "@rneui/themed";
import {View, Text} from "react-native";

export default ({name,formState}: { name:string,formState: FormState<any, any> }) => (
    <Card>
        <View>
            <Text>Name: {name}</Text>
            <Text>Answer: {formState.answer}</Text>
            <Text>Result {formState.result}</Text>
        </View>
    </Card>
)