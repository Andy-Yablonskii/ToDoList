import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ActiveScreen, AllScreen, CompletedScreen } from "@screens";
import { CustomTabBar } from "@components";

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
