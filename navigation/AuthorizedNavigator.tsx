import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {Button, Icon, useTheme} from "@rneui/themed";
import MainScreen from "../screen/MainScreen";

export type AuthorizedParamList = {
    Main: undefined;
    Profile: undefined;
    Checkout: undefined;
    MenuTabNavigation: undefined;
    ProductDetail:undefined;
};

const Stack = createNativeStackNavigator<AuthorizedParamList>();

export default () => {
    const theme = useTheme();

    return (
        <Stack.Navigator
            initialRouteName='Main'
        >
            <Stack.Screen
                name='Main'
                component={MainScreen}
                options={{
                    headerShown: false
                    // headerTitle: (props) => <LogoTitle />,
                }}
            />

        </Stack.Navigator>
    );
};

