import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {useNavigation} from "@react-navigation/native";
import {AuthorizedParamList} from "../../navigation/AuthorizedNavigator";

type ScreenProp = NativeStackNavigationProp<AuthorizedParamList, 'PainLength'>;

export default (): () => void => {

    const navigation = useNavigation<ScreenProp>();

    const handleNavigate = () => navigation.navigate("PainLength");

    return handleNavigate;

}