import {createSlice, PayloadAction} from "@reduxjs/toolkit";
// https://stackoverflow.com/questions/71154190/mutate-state-with-dynamic-keys-in-createslice-method
interface FormState<T, G = undefined> {
    answer: T;
    result?: G;
}

export interface RootFormState {
    age: FormState<number,string>;
    painLocated: FormState<string,string>;
    painLength: FormState<string,string>;
    cadHx: FormState<string,string>;
    traumaticInjury: FormState<string,string>;
    gallbladder: FormState<string,string>;
    painWorsenDeepBreath: FormState<string,string>;
    feverOrCough: FormState<string,string>;
    coumadin: FormState<string,string>;
}

const initialState: RootFormState = {
    age: { answer: -1 , result:''},
    painLocated: { answer: '', result:''},
    painLength: { answer: '', result:'' },
    cadHx: { answer: '', result:'' },
    traumaticInjury: { answer: '', result:'' },
    gallbladder: {  answer: '', result:'' },
    painWorsenDeepBreath:{ answer: '', result:'' },
    feverOrCough: { answer: '', result:'' },
    coumadin: { answer: '', result:'' }
};

type ValueOf<T> = T[keyof T];

interface AlgorithmInterface {
    state: RootFormState,
    action: PayloadAction<{ id: keyof RootFormState; answer: ValueOf<RootFormState>['answer'] }>
}

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

            state[id].result = algorithmFactory({state,action});
            console.log(state,"THE STATE OF AFFAIRS")
        },

    },
});

const getAge = (state: RootFormState) => state.age.answer;
// const getAnswer = (action: PayloadAction<{ id: keyof RootFormState; answer: ValueOf<RootFormState>['answer'] }>) => action.payload.answer.toString(); //should always be a string test this out later
const getAnswer = (algorithmInterface:AlgorithmInterface) => algorithmInterface.action.payload.answer.toString(); //should always be a string test this out later
// export const selectState = (state: RootFormState) => state;
const noResponse = "Patient responded no.";
const error = "Something Went Wrong";

const algorithmFactory = (algorithmInterface:AlgorithmInterface) => {
    const {id} = algorithmInterface.action.payload;
    switch (id) {
        case 'age':
            return algorithmReturnAnswerAsResult(algorithmInterface);
        case 'painLocated':
            console.log("JFASHFHASCALLED", algorithmInterface)
            return algorithmPainLocated(algorithmInterface);
        case 'painLength':
            return algorithmReturnAnswerAsResult(algorithmInterface);
        case 'cadHx':
            return algorithmCadHX(algorithmInterface);
        case 'gallbladder':
            return algorithmGallbladder(algorithmInterface);
        case 'painWorsenDeepBreath':
            return algorithmPainWorsenDeepBreath(algorithmInterface);
        case 'feverOrCough':
            return algorithmFeverOrCough(algorithmInterface);
        case 'coumadin':
            return algorithmCoumadin(algorithmInterface);
        default:
            return error + " with factory";
    }
}

const algorithmPainLocated = (algorithmInterface:AlgorithmInterface) => {
    const {state, action} = algorithmInterface;
    const age = getAge(state);
    const answer = getAnswer(algorithmInterface);
    console.log("PAINLOCATED", answer)
    if(age >= 35){
        if(answer.includes("Left Chest")) return "CBC, CMP, Trop x 2, ECG, CXR";
        if(answer.includes("Right Chest")) return "CBC, CMP, Trop x 2, ECG, CXR";
        if(answer.includes("Substernal")) return "CBC, CMP, Trop x 2, ECG, CXR, Order Pepcid/maalox";
        if(answer.includes("Epigastric")) return "CBC, CMP, Trop x 2, ECG, CXR, lipase";
    }else{
        if(answer.includes("Left Chest")) return "CXR, ECG";
        if(answer.includes("Right Chest")) return "CXR, ECG";
        if(answer.includes("Substernal")) return "CXR, ECG, Order Pepcid/maalox";
        if(answer.includes("Epigastric")) return "CBC, CMP, CXR, ECG";
    }
    return error;
}

const algorithmReturnAnswerAsResult = (algorithmInterface:AlgorithmInterface) => {
    const {action} = algorithmInterface;
    const answer = getAnswer(algorithmInterface);
    return answer;
}

const algorithmCadHX = (algorithmInterface:AlgorithmInterface) => {
    const {action} = algorithmInterface;
    const answer = getAnswer(algorithmInterface);
    if(answer.includes("Yes")) return "Nitro 0.4 q5 min PRN chest pain x 3";
    else return noResponse;
}

const algorithmGallbladder = (algorithmInterface:AlgorithmInterface) => {
    const { action} = algorithmInterface;
    const answer = getAnswer(algorithmInterface);
    if(answer.includes("Yes")) return "Add on lipase to labs";
    else return noResponse;
}

//TODO: PERC RULE
const algorithmPainWorsenDeepBreath = (algorithmInterface:AlgorithmInterface) => {
    const {state, action} = algorithmInterface;
    const age = getAge(state);
    const answer = getAnswer(algorithmInterface);
    if(age <= 50){
        if(answer.includes("Yes")) return "50 then obtain DDimer, if all negative PE ruled out";
    }
    return "";

}
const algorithmFeverOrCough = (algorithmInterface:AlgorithmInterface) => {
    const {state, action} = algorithmInterface;
    const age = getAge(state);
    const answer = getAnswer(algorithmInterface);
    if(answer.includes("Yes")){
        const result = "Chest X-ray, CBC, CMP, Covid test";
        if(age >= 40) return result + " Cancel troponin if ordered above";
        return result;
    }
    return noResponse;
}

const algorithmCoumadin = (algorithmInterface:AlgorithmInterface) => {
    const {state, action} = algorithmInterface;
    const age = getAge(state);
    const answer = getAnswer(algorithmInterface);
    if(answer.includes("Yes")) return "If obtaining labs, add Pt/INR";

}


export const {
    updateAnswer
} = questionSlice.actions;

export default questionSlice.reducer;

