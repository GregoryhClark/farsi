import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { QuizResult } from '../types/quiz';

interface QuizResultsProps {
  result: QuizResult;
  onRestart: () => void;
  onBackToModes: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({ result, onRestart, onBackToModes }) => {
  const percentage = Math.round((result.correctAnswers / result.totalQuestions) * 100);
  
  const getPerformanceMessage = () => {
    if (percentage >= 90) return 'Excellent! You\'re a Farsi alphabet master!';
    if (percentage >= 80) return 'Great job! You\'re doing really well!';
    if (percentage >= 70) return 'Good work! Keep practicing!';
    if (percentage >= 60) return 'Not bad! A bit more practice will help.';
    return 'Keep practicing! You\'ll get better with time.';
  };

  const getPerformanceColor = () => {
    if (percentage >= 90) return '#4CAF50';
    if (percentage >= 80) return '#8BC34A';
    if (percentage >= 70) return '#FFC107';
    if (percentage >= 60) return '#FF9800';
    return '#F44336';
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Quiz Complete!</Text>
        
        <View style={styles.scoreContainer}>
          <Text style={[styles.percentage, { color: getPerformanceColor() }]}>
            {percentage}%
          </Text>
          <Text style={styles.scoreText}>
            {result.correctAnswers} out of {result.totalQuestions} correct
          </Text>
        </View>

        <Text style={styles.message}>{getPerformanceMessage()}</Text>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{result.correctAnswers}</Text>
            <Text style={styles.statLabel}>Correct</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{result.incorrectAnswers}</Text>
            <Text style={styles.statLabel}>Incorrect</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.restartButton} onPress={onRestart}>
            <Text style={styles.restartButtonText}>Try Again</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.backButton} onPress={onBackToModes}>
            <Text style={styles.backButtonText}>Choose Different Mode</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  scoreContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  percentage: {
    fontSize: 64,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  scoreText: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  statItem: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 20,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 300,
  },
  restartButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  restartButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  backButton: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  backButtonText: {
    color: '#007AFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default QuizResults;
