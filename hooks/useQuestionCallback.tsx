import {useAppDispatch} from "../app/hooks";
import {RootFormState, updateAnswer} from "../services/questionApiSlice";
import {ValueOf} from "react-native-gesture-handler/lib/typescript/typeUtils";

export default (
    navigate: () => void,
    id: keyof RootFormState
): (answer: any) => void => {

    const dispatch = useAppDispatch();

    const onPress = (answer: ValueOf<RootFormState>['answer']) => {
        dispatch(updateAnswer({id, answer}));
        navigate()
    }
    return onPress;
}