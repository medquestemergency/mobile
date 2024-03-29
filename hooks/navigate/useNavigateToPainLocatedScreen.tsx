import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {useNavigation} from "@react-navigation/native";
import {AuthorizedParamList} from "../../navigation/AuthorizedNavigator";

type ScreenProp = NativeStackNavigationProp<AuthorizedParamList, 'PainLocated'>;

export default (): () => void => {
    const navigation = useNavigation<ScreenProp>();
    return () => navigation.navigate("PainLocated");
}