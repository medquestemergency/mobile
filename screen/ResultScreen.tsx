import {SafeAreaView, Text, TextInput, View} from "react-native";
import {Card, Button} from "@rneui/themed";
import {useAppSelector} from "../app/hooks";
import {RootState} from "../app/store";
import ResultView from "../components/ResultView";
import PulmonaryEmbolismRuleOutCriteriaView from "../components/PulmonaryEmbolismRuleOutCriteriaView";

export default () => {
    const questionData = useAppSelector((state: RootState) => state.question);
    const pulmonaryEmbolismRuleOutCriteriaData = useAppSelector((state: RootState) => state.pulmonaryEmbolismRuleOutCriteria);

    return <SafeAreaView style={{flex: 1}}>
        <Card>
            <Card.Title>RESULTS PAGE</Card.Title>
            {Object.entries(questionData).map(([key, value], index) => <ResultView name={key} formState={value} key={key + index}/>)}
        </Card>
        {
            questionData.painWorsenDeepBreath.answer == "Yes" && <PulmonaryEmbolismRuleOutCriteriaView formData={pulmonaryEmbolismRuleOutCriteriaData.pulmonaryEmbolismRuleOutCriteria.answer} />
        }
    </SafeAreaView>
}
