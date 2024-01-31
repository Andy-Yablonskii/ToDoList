import React, { useState } from "react";
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
  const [tasks, setTasks] = useState([]);

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />}
        screenOptions={MAIN_NAVIGATOR_OPTIONS}
        initialRouteName={"All"}
      >
        <Tab.Screen name="Active">
          {(props) => (
            <ActiveScreen {...props} tasks={tasks} setTasks={setTasks} />
          )}
        </Tab.Screen>
        <Tab.Screen name="All">
          {(props) => (
            <AllScreen {...props} tasks={tasks} setTasks={setTasks} />
          )}
        </Tab.Screen>
        <Tab.Screen name="Completed">
          {(props) => (
            <CompletedScreen {...props} tasks={tasks} setTasks={setTasks} />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
