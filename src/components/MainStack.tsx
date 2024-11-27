import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { HomeScreen } from "./screens/HomeScreen";
import { LearnScreen } from "./screens/LearnScreen";
import { QuizScreen } from "./screens/QuizScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#3B82F6",
                },
                headerTintColor: "white",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "Normas APA" }}
            />
            <StackNavigator.Screen
                name="Learn"
                component={LearnScreen}
                options={{ title: "Aprender" }}
            />
            <StackNavigator.Screen
                name="Quiz"
                component={QuizScreen}
                options={{ title: "Quiz" }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);