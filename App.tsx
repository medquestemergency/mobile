import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {Provider} from "react-redux";
import {NavigationContainer} from "@react-navigation/native";
import Toast from 'react-native-toast-message';
import toastConfig from "./config/toastConfig";
import {ThemeProvider} from "@rneui/themed";
import {theme} from "./theme/rneuiTheme";
import AuthorizedNavigator from "./navigation/AuthorizedNavigator";
import {store} from "./app/store";

export default function App() {

    return <>
        <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <NavigationContainer>
                        <AuthorizedNavigator/>
                    </NavigationContainer>
                </ThemeProvider>
        </Provider>
        <Toast config={toastConfig}/>
    </>

}
