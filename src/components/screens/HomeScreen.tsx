import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { categories } from "../../data/apaCategories";

type HomeScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
};

export function HomeScreen({ navigation }: HomeScreenProps) {
    return (
        <scrollView className="bg-blue-50">
            <stackLayout className="p-6">
                <label className="text-4xl font-bold text-center text-blue-800 mb-2">
                    Normas APA
                </label>
                <label className="text-xl text-center text-gray-600 mb-8">
                    Guía Completa de Estilo
                </label>

                <gridLayout columns="*, *" rows="auto" className="mb-6">
                    {categories.map((category, index) => (
                        <stackLayout 
                            key={category.id}
                            className="bg-white p-4 m-2 rounded-xl shadow-md"
                            col={index % 2} 
                            row={Math.floor(index / 2)}
                            onTap={() => navigation.navigate("Learn", { categoryId: category.id })}
                        >
                            <label className="text-3xl text-center mb-2">{category.icon}</label>
                            <label className="text-lg font-semibold text-center text-blue-800 mb-1">
                                {category.title}
                            </label>
                            <label className="text-sm text-center text-gray-600">
                                {category.description}
                            </label>
                        </stackLayout>
                    ))}
                </gridLayout>

                <button
                    className="bg-green-600 text-white p-4 rounded-xl text-lg font-semibold mb-4"
                    onTap={() => navigation.navigate("Quiz")}
                >
                    Iniciar Quiz
                </button>
            </stackLayout>
        </scrollView>
    );
}