import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

import slot, { Slot, SplashScreen, Stack } from 'expo-router';
import { StackActions } from '@react-navigation/native';

import { useFonts } from 'expo-font';

/*
        slot and stack are ways to implement navigations and layoutsin react native
*/

//prevents autohidding before asset loading is complete

SplashScreen.preventAutoHideAsync();
// edit layout to render n+ screens and a default, or set a 'slot' pprty  
const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({
        "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
        "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
        "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
        "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
        "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
        "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
        "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
        "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
        "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
    });

    //stuff while loading
    useEffect(() => {
        if(error) throw error;
        if(fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error]);

    if(!fontsLoaded && !error) return null;
    
    return (
                //// SLOT WAY
                //returns current child route, think of children prop in React

                // <>
                //     <Text>Header</Text>
                //     <Slot/> 
                //     <Text>Footer</Text>
                // </>

                //// STACK WAY
                <Stack>
                    <Stack.Screen name='index' options ={{ headerShown: false}}
                    />
                </Stack>
           )



    //     return (

                //// writing the Views
    // <View style = {styles.container}>
    //   <Text>RootLayout</Text>
    // </View>
//   )
}

export default RootLayout

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center'
    }
})




