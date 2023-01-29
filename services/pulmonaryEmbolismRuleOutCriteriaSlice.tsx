import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PulmonaryEmbolismRuleOutCriteriaFormData} from "../screen/PulmonaryEmbolismRuleOutCriteriaScreen";
import {FormState} from "./questionApiSlice";

export interface PulmonaryEmbolismRuleOutCriteriaRootFormState {
    pulmonaryEmbolismRuleOutCriteria: FormState<PulmonaryEmbolismRuleOutCriteriaFormData, string>;
}

const initialState: PulmonaryEmbolismRuleOutCriteriaRootFormState = {
    pulmonaryEmbolismRuleOutCriteria: {
        answer: {
            legEdema: false,
            historyOfDVT: false,
            vitalSigns: false,
            bloodyCough: false,
            hormoneTherapy: false,
            recentSurgery: false
        }, result: ''
    },
};


const pulmonaryEmbolismRuleOutCriteriaSlice = createSlice({
    name: "pulmonaryEmbolismRuleOutCriteria",
    initialState,
    reducers: {
        updateAnswer: (
            state,
            action: PayloadAction<{formData: PulmonaryEmbolismRuleOutCriteriaFormData}>,
        ) => {
            const {formData} = action.payload;
            state.pulmonaryEmbolismRuleOutCriteria.answer = formData;
            state.pulmonaryEmbolismRuleOutCriteria.result = "";
            console.log("MADE IT111", state.pulmonaryEmbolismRuleOutCriteria );
        },

    },
});


export const {
    updateAnswer
} = pulmonaryEmbolismRuleOutCriteriaSlice.actions;

export default pulmonaryEmbolismRuleOutCriteriaSlice.reducer;

