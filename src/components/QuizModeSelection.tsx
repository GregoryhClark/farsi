import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { QuizMode } from '../types/quiz';
import { getQuizModeDescription } from '../utils/quizUtils';

interface QuizModeSelectionProps {
  onSelectMode: (mode: QuizMode) => void;
}

const QuizModeSelection: React.FC<QuizModeSelectionProps> = ({ onSelectMode }) => {
  const quizModes: { mode: QuizMode; title: string; description: string; icon: string }[] = [
    {
      mode: 'character-to-name',
      title: 'Character to Name',
      description: 'See a Farsi character and choose its romanized name',
      icon: 'ا → alef',
    },
    {
      mode: 'name-to-character',
      title: 'Name to Character',
      description: 'See a romanized name and choose the correct Farsi character',
      icon: 'alef → ا',
    },
    {
      mode: 'character-to-pronunciation',
      title: 'Character to Sound',
      description: 'See a Farsi character and choose how it sounds',
      icon: 'ا → ā',
    },
    {
      mode: 'pronunciation-to-character',
      title: 'Sound to Character',
      description: 'See a pronunciation and choose the correct Farsi character',
      icon: 'ā → ا',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Farsi Alphabet Quiz</Text>
        <Text style={styles.subtitle}>Choose a quiz mode to start learning</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {quizModes.map((quizMode, index) => (
          <TouchableOpacity
            key={index}
            style={styles.modeCard}
            onPress={() => onSelectMode(quizMode.mode)}
          >
            <View style={styles.modeHeader}>
              <Text style={styles.modeIcon}>{quizMode.icon}</Text>
              <Text style={styles.modeTitle}>{quizMode.title}</Text>
            </View>
            <Text style={styles.modeDescription}>{quizMode.description}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  content: {
    padding: 20,
  },
  modeCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  modeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  modeIcon: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
    marginRight: 12,
    minWidth: 60,
    textAlign: 'center',
  },
  modeTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    flex: 1,
  },
  modeDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default QuizModeSelection;
