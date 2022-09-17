import {useAppDispatch} from "../app/hooks";
import {ActionCreatorWithPayload} from "@reduxjs/toolkit";

export default (
    navigate: () => void,
    action: ActionCreatorWithPayload<any, string>
):(string: any) => void => {
    const dispatch = useAppDispatch();
    const onPress = (answer:string) => {
        dispatch(action(answer));
        navigate()
    }
    return onPress;

}