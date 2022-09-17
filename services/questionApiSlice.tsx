import {createSlice, PayloadAction} from "@reduxjs/toolkit";
// https://stackoverflow.com/questions/71154190/mutate-state-with-dynamic-keys-in-createslice-method
interface FormState<T> {
    answer: T;
}

export interface RootFormState {
    painLocated: FormState<string>;
    painLength: FormState<string>;
    cadHx: FormState<string>;
    traumaticInjury: FormState<string>;
    gallbladder: FormState<string>;
    painWorsenDeepBreath: FormState<string>;
    feverOrCough: FormState<string>;
    coumadin: FormState<string>;
}

const initialState: RootFormState = {
    painLocated: { answer: '' },
    painLength: { answer: '' },
    cadHx: { answer: '' },
    traumaticInjury: { answer: '' },
    gallbladder: {  answer: '' },
    painWorsenDeepBreath:{ answer: '' },
    feverOrCough: { answer: '' },
    coumadin: { answer: '' }
};

type ValueOf<T> = T[keyof T];

const questionSlice = createSlice({
    name: "question",
    initialState,
    reducers: {
        updateAnswer: (
            state,
            action: PayloadAction<{ id: keyof RootFormState; answer: ValueOf<RootFormState>['answer'] }>,
        ) => {
            const { id, answer } = action.payload;
            state[id].answer = answer;
            console.log(state,"THE STATE OF AFFAIRS")
        },

    },
});


export const {
    updateAnswer
} = questionSlice.actions;

export default questionSlice.reducer;

