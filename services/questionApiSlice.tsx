import {createSlice} from "@reduxjs/toolkit";

export interface questionState {
    painLocated: string,
    painLength: string,
    cadHx: string,
    traumaticInjury:string,
    gallbladder:string,
    painWorsenDeepBreath:string,
    feverOrCough:string,
    coumadin:string
}

const initialState: questionState = {
    painLocated: '',
    painLength: '',
    cadHx:'',
    traumaticInjury:'',
    gallbladder:'',
    painWorsenDeepBreath:'',
    feverOrCough:'',
    coumadin:''
};

const questionSlice = createSlice({
    name: "question",
    initialState,
    reducers: {
        appendPainLocation:(state,action) => {
            state.painLocated = action.payload;
        },
        appendPainLength:(state,action) => {
            state.painLength = action.payload;
        },
        appendCAD_HX:(state,action) => {
            state.cadHx = action.payload;
        },
        appendTraumaticInjury:(state,action) => {
            state.traumaticInjury = action.payload;
        },
        appendGallbladder:(state,action) => {
            state.gallbladder = action.payload;
        },
        appendPainWorsenDeepBreath:(state,action) => {
            state.painWorsenDeepBreath = action.payload;
        },
        appendFeverOrCough:(state,action) => {
            state.feverOrCough = action.payload;
        },
        appendCoumadin:(state,action) => {
            state.coumadin = action.payload;
            console.log(state,"coummaa")
        }
    },
});

export const {
    appendPainLocation,
    appendPainLength,
    appendCAD_HX,
    appendTraumaticInjury,
    appendGallbladder,
    appendPainWorsenDeepBreath,
    appendFeverOrCough,
    appendCoumadin
} = questionSlice.actions;

export default questionSlice.reducer;
