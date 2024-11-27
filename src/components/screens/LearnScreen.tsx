import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { apaRules } from "../../data/apaRules";
import { categories } from "../../data/apaCategories";

type LearnScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Learn">,
    route: { params: { categoryId: string } }
};

export function LearnScreen({ navigation, route }: LearnScreenProps) {
    const categoryId = route.params?.categoryId;
    const category = categories.find(c => c.id === categoryId);
    const categoryRules = apaRules.filter(rule => rule.categoryId === categoryId);

    return (
        <scrollView className="bg-gray-50">
            <stackLayout className="p-4">
                <stackLayout className="bg-blue-600 p-6 rounded-xl mb-6">
                    <label className="text-4xl text-center mb-2">{category?.icon}</label>
                    <label className="text-2xl font-bold text-center text-white mb-2">
                        {category?.title}
                    </label>
                    <label className="text-lg text-center text-blue-100">
                        {category?.description}
                    </label>
                </stackLayout>

                {categoryRules.map((rule, index) => (
                    <stackLayout key={rule.id} className="bg-white rounded-xl p-6 mb-4 shadow-sm">
                        <label className="text-xl font-bold text-blue-800 mb-3">
                            {rule.title}
                        </label>
                        <label className="text-gray-700 mb-4">
                            {rule.description}
                        </label>

                        {rule.guidelines && (
                            <stackLayout className="bg-gray-50 p-4 rounded-lg mb-4">
                                <label className="font-semibold text-gray-700 mb-2">
                                    Pautas:
                                </label>
                                {rule.guidelines.map((guideline, idx) => (
                                    <label key={idx} className="text-gray-600 mb-1">
                                        • {guideline}
                                    </label>
                                ))}
                            </stackLayout>
                        )}

                        {rule.example && (
                            <stackLayout className="bg-blue-50 p-4 rounded-lg">
                                <label className="font-semibold text-blue-800 mb-2">
                                    Ejemplo:
                                </label>
                                <label className="text-blue-700">
                                    {rule.example}
                                </label>
                            </stackLayout>
                        )}
                    </stackLayout>
                ))}

                <button
                    className="bg-green-600 text-white p-4 rounded-xl text-lg font-semibold mt-4"
                    onTap={() => navigation.navigate("Quiz")}
                >
                    Practicar con Quiz
                </button>
            </stackLayout>
        </scrollView>
    );
}