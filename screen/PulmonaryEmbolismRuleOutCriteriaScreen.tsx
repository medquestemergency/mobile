import {Dimensions, SafeAreaView, Switch, Text, TouchableOpacity, View} from "react-native";
import {Card, Button} from "@rneui/themed";
import {StyleSheet} from "react-native";
import {useForm, Controller} from 'react-hook-form';
import {useState} from "react";
import {useAppDispatch} from "../app/hooks";
import {updateAnswer} from "../services/pulmonaryEmbolismRuleOutCriteriaSlice";
import useNavigateToFeverOrCoughScreen from "../hooks/navigate/useNavigateToFeverOrCoughScreen";


export type PulmonaryEmbolismRuleOutCriteriaFormData = {
    legEdema: boolean;
    historyOfDVT: boolean;
    vitalSigns: boolean;
    bloodyCough: boolean;
    hormoneTherapy: boolean;
    recentSurgery: boolean;
};


export default () => {
    const [formData, setFormData] = useState<PulmonaryEmbolismRuleOutCriteriaFormData>({
        legEdema: false,
        historyOfDVT: false,
        vitalSigns: false,
        bloodyCough: false,
        hormoneTherapy: false,
        recentSurgery: false
    });
    const {handleSubmit, register} = useForm();
    const dispatch = useAppDispatch();
    const navigate = useNavigateToFeverOrCoughScreen();

    const onSubmit = (data: PulmonaryEmbolismRuleOutCriteriaFormData) => {
        dispatch(updateAnswer({
            formData: formData,
        }));
        navigate();
    };
    const {width, height} = Dimensions.get('window');
    const isTablet = width >= 768;

    const styleForInputContainer = isTablet ? styles.inputTabletContainer : styles.inputPhoneContainer

    return (
        <SafeAreaView style={{flex: 1}}>
            {/*<Card>*/}
                <View style={styles.container}>

                    <View style={styleForInputContainer}>
                        <Text style={styles.inputLabel}>Do you have any unilateral leg edema?</Text>
                        <Switch
                            value={formData.legEdema}
                            onValueChange={value => setFormData({...formData, legEdema: value})}
                        />
                    </View>
                    <View style={styleForInputContainer}>
                        <Text style={styles.inputLabel}>Do you have any personal history of DVT/PE??</Text>
                        <Switch
                            value={formData.historyOfDVT}
                            onValueChange={value => setFormData({...formData, historyOfDVT: value})}
                        />
                    </View>
                    <View style={styleForInputContainer}>
                        <Text style={styles.inputLabel}>Are triage vital signs Heart Rate {">"} 100 or
                            SPO2 {"<"}95%?</Text>
                        <Switch
                            value={formData.vitalSigns}
                            onValueChange={value => setFormData({...formData, vitalSigns: value})}
                        />
                    </View>
                    <View style={styleForInputContainer}>
                        <Text style={styles.inputLabel}>Have you noticed any bloody cough?</Text>
                        <Switch
                            value={formData.bloodyCough}
                            onValueChange={value => setFormData({...formData, bloodyCough: value})}
                        />
                    </View>
                    <View style={styleForInputContainer}>
                        <Text style={styles.inputLabel}>Do you take any hormone therapy including oral
                            contraceptives?</Text>
                        <Switch
                            value={formData.hormoneTherapy}
                            onValueChange={value => setFormData({...formData, hormoneTherapy: value})}
                        />
                    </View>
                    <View style={styleForInputContainer}>
                        <Text style={styles.inputLabel}>Have you had any recent (within 3 months) surgery, air
                            travel {">"} 5 hours, or chemotherapy?</Text>
                        <Switch
                            value={formData.recentSurgery}
                            onValueChange={value => setFormData({...formData, recentSurgery: value})}
                        />
                    </View>
                    <Button onPress={handleSubmit(() => onSubmit(formData))}>Submit</Button>
                </View>
            {/*</Card>*/}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        // justifyContent: "space-between",
        marginTop: 20,
    },
    inputTabletContainer: {
        flexDirection: "row",
        // alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
        width:650,
        marginVertical: 8,

    },
    inputPhoneContainer: {
        // flexDirection: "row",
        alignItems: "center",
        // justifyContent: "space-between",
        marginTop: 10,
        paddingVertical:5
    },
    inputLabel: {
        marginRight: 10,
        textAlign: 'center',
        fontSize: 14,

    },
    submitButton: {
        marginTop: 20
    }
});
