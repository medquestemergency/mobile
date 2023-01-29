import {FormState} from "../services/questionApiSlice";
import {Card} from "@rneui/themed";
import {View, Text} from "react-native";
import {PulmonaryEmbolismRuleOutCriteriaFormData} from "../screen/PulmonaryEmbolismRuleOutCriteriaScreen";
const yesNo = (input: boolean): string => input ? "Yes" : "No";

export default ({formData}: { formData: PulmonaryEmbolismRuleOutCriteriaFormData }) => (
    <Card>
        <Card.Title>Pulmonary Embolism Rule Out Criteria</Card.Title>
        <View>
            <Text>Bloody Cough: {yesNo(formData.bloodyCough)}</Text>
            <Text>History of DVT: {yesNo(formData.historyOfDVT)}</Text>
            <Text>Leg Edema: {yesNo(formData.legEdema)}</Text>
            <Text>Hormone Therapy: {yesNo(formData.hormoneTherapy)}</Text>
            <Text>Vital Signs: {yesNo(formData.vitalSigns)}</Text>
            <Text>Recent Surgery: {yesNo(formData.recentSurgery)}</Text>
        </View>
    </Card>
)