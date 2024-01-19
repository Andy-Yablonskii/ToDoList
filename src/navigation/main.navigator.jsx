import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AllScreen } from "../screens/all.screen";
import { ActiveScreen } from "../screens/active.screen";
import { CompletedScreen } from "../screens/completed.screen";
import { CustomTabBar } from "../components/tab.navigation.bar/tab.navigation.bar";

const Tab = createBottomTabNavigator();

const MAIN_NAVIGATOR_OPTIONS = {
  tabBarShowLabel: true,
  labelStyle: { fontSize: 14 },
  headerShown: false,
  gestureEnabled: true,
};

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />}
        screenOptions={MAIN_NAVIGATOR_OPTIONS}
        initialRouteName={"All"}
      >
        <Tab.Screen name="Active" component={ActiveScreen} />
        <Tab.Screen name="All" component={AllScreen} />
        <Tab.Screen name="Completed" component={CompletedScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
