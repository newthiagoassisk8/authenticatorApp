// src/routes/app.routes.tsx
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "App";
import { DetailsScreen } from "screens/detailsScreen";

export type RootStackParamList = {
  Home: undefined;
  totpDetails: undefined; // ou { uid: string } se precisar de params
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="totpDetails" component={DetailsScreen} />
    </Navigator>
  );
}
