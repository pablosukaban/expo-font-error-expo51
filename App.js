import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Text, View } from 'react-native';
import { useCallback } from 'react';

const fonts = {
  'inter-extrabold': require('./assets/fonts/Inter-ExtraBold.ttf'),
  'inter-extralight': require('./assets/fonts/Inter-ExtraLight.ttf'),
  'inter-semibold': require('./assets/fonts/Inter-SemiBold.ttf'),
  'inter-black': require('./assets/fonts/Inter-Black.ttf'),
  'inter-bold': require('./assets/fonts/Inter-Bold.ttf'),
  'inter-light': require('./assets/fonts/Inter-Light.ttf'),
  'inter-medium': require('./assets/fonts/Inter-Medium.ttf'),
  'inter-regular': require('./assets/fonts/Inter-Regular.ttf'),
  'inter-thin': require('./assets/fonts/Inter-Thin.ttf'),
  'rubik-semibold': require('./assets/fonts/Rubik-SemiBold.ttf'),
  'rubik-medium': require('./assets/fonts/Rubik-Medium.ttf'),
};

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = Font.useFonts(fonts);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      onLayout={onLayoutRootView}
    >
      <Text>Platform Default</Text>


      {/* works fine */}
      <Text style={{ fontFamily: 'inter-black' }}>inter-black</Text>


      <Text>
        //! commented fonts are the ones who break the app if use it in
        'fontFamily', just uncomment them to see
      </Text>

      {/* doesn't work */}
      {/* <Text style={{ fontFamily: "inter-semibold" }}>inter-semibold</Text> */}
      {/* <Text style={{ fontFamily: "inter-extrabold" }}>inter-extrabold</Text> */}
      {/* <Text style={{ fontFamily: "inter-extralight" }}>inter-extralight</Text> */}
    </View>
  );
}
