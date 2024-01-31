import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
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

  useEffect(() => {
    // Load tasks from local storage when the component mounts
    const loadTasksFromStorage = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem("tasks");
        if (storedTasks !== null) {
          setTasks(JSON.parse(storedTasks));
        }
      } catch (error) {
        console.error("Error loading tasks from storage:", error);
      }
    };

    loadTasksFromStorage();
  }, []); // Empty dependency array to run the effect only once on mount

  // Update the setTasks function to save tasks to local storage
  const updateTasks = (newTasks) => {
    setTasks(newTasks);

    // Save tasks to local storage only if newTasks is defined
    if (newTasks !== undefined) {
      try {
        AsyncStorage.setItem("tasks", JSON.stringify(newTasks));
      } catch (error) {
        console.error("Error saving tasks to storage:", error);
      }
    }
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />}
        screenOptions={MAIN_NAVIGATOR_OPTIONS}
        initialRouteName={"All"}
      >
        <Tab.Screen name="Active">
          {(props) => (
            <ActiveScreen {...props} tasks={tasks} setTasks={updateTasks} />
          )}
        </Tab.Screen>
        <Tab.Screen name="All">
          {(props) => (
            <AllScreen {...props} tasks={tasks} setTasks={updateTasks} />
          )}
        </Tab.Screen>
        <Tab.Screen name="Completed">
          {(props) => (
            <CompletedScreen {...props} tasks={tasks} setTasks={updateTasks} />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
