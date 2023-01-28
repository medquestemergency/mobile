import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {Button, Icon, useTheme} from "@rneui/themed";
import PainLengthScreen from "../screen/PainLengthScreen";
import CAD_HxScreen from "../screen/CAD_HxScreen";
import TraumaticInjuryScreen from "../screen/TraumaticInjuryScreen";
import GallbladderScreen from "../screen/GallbladderScreen";
import PainWorsenDeepBreathScreen from "../screen/PainWorsenDeepBreathScreen";
import FeverOrCoughScreen from "../screen/FeverOrCoughScreen";
import CoumadinScreen from "../screen/CoumadinScreen";
import AgeScreen from "../screen/AgeScreen";
import PainLocatedScreen from "../screen/PainLocatedScreen";
import ResultScreen from "../screen/ResultScreen";

export type AuthorizedParamList = {
    Age: undefined;
    PainLocated: undefined;
    PainLength: undefined;
    CAD_Hx: undefined;
    TraumaticInjury: undefined;
    Gallbladder: undefined;
    PainWorsenDeep: undefined;
    FeverOrCough: undefined;
    Coumadin: undefined;
    Result: undefined;
};

const Stack = createNativeStackNavigator<AuthorizedParamList>();

export default () => {
    const theme = useTheme();

    return (
        <Stack.Navigator
            initialRouteName='Age'
        >
            <Stack.Screen
                name='Age'
                component={AgeScreen}
                options={{
                    headerShown: false
                    // headerTitle: (props) => <LogoTitle />,
                }}
            />
            <Stack.Screen
                name='PainLength'
                component={PainLengthScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='PainLocated'
                component={PainLocatedScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='CAD_Hx'
                component={CAD_HxScreen}
                options={{
                    headerShown: false
                    // headerTitle: (props) => <LogoTitle />,
                }}
            />
            <Stack.Screen
                name='TraumaticInjury'
                component={TraumaticInjuryScreen}
                options={{
                    headerShown: false
                    // headerTitle: (props) => <LogoTitle />,
                }}
            />
            <Stack.Screen
                name='Gallbladder'
                component={GallbladderScreen}
                options={{
                    headerShown: false
                    // headerTitle: (props) => <LogoTitle />,
                }}
            />

            <Stack.Screen
                name='PainWorsenDeep'
                component={PainWorsenDeepBreathScreen}
                options={{
                    headerShown: false
                    // headerTitle: (props) => <LogoTitle />,
                }}
            />
            <Stack.Screen
                name='FeverOrCough'
                component={FeverOrCoughScreen}
                options={{
                    headerShown: false
                    // headerTitle: (props) => <LogoTitle />,
                }}
            />
            <Stack.Screen
                name='Coumadin'
                component={CoumadinScreen}
                options={{
                    headerShown: false
                    // headerTitle: (props) => <LogoTitle />,
                }}
            />
            <Stack.Screen
                name='Result'
                component={ResultScreen}
                options={{
                    headerShown: false
                    // headerTitle: (props) => <LogoTitle />,
                }}
            />

        </Stack.Navigator>
    );
};

