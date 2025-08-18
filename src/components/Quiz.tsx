import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Clipboard from '@react-native-clipboard/clipboard';
import { FarsiCharacter } from '../data/farsiAlphabet';
import { QuizMode, QuizQuestion, QuizState, QuizResult } from '../types/quiz';
import { generateQuizQuestion, checkAnswer } from '../utils/quizUtils';

interface QuizProps {
  mode: QuizMode;
  onFinish: (result: QuizResult) => void;
  onBack: () => void;
}

const Quiz: React.FC<QuizProps> = ({ mode, onFinish, onBack }) => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: null,
    score: 0,
    totalQuestions: 10,
    currentQuestionIndex: 0,
    isAnswered: false,
    selectedAnswer: null,
    isCorrect: null,
  });

  useEffect(() => {
    generateNewQuestion();
  }, []);

  const generateNewQuestion = () => {
    const question = generateQuizQuestion(mode);
    setQuizState(prev => ({
      ...prev,
      currentQuestion: question,
      isAnswered: false,
      selectedAnswer: null,
      isCorrect: null,
    }));
  };

  const handleAnswerSelect = (selectedAnswer: FarsiCharacter) => {
    if (quizState.isAnswered || !quizState.currentQuestion) return;

    const isCorrect = checkAnswer(selectedAnswer, quizState.currentQuestion.correctAnswer);
    
    setQuizState(prev => ({
      ...prev,
      isAnswered: true,
      selectedAnswer,
      isCorrect,
      score: isCorrect ? prev.score + 1 : prev.score,
    }));
  };

  const handleNextQuestion = () => {
    if (quizState.currentQuestionIndex < quizState.totalQuestions - 1) {
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
      }));
      generateNewQuestion();
    } else {
      // Quiz finished
      const result: QuizResult = {
        score: quizState.score,
        totalQuestions: quizState.totalQuestions,
        correctAnswers: quizState.score,
        incorrectAnswers: quizState.totalQuestions - quizState.score,
      };
      onFinish(result);
    }
<<<<<<< HEAD
=======
  };

  const handleCopyToClipboard = async (text: string) => {
    try {
      await Clipboard.setString(text);
      Alert.alert('Copied!', 'Word copied to clipboard');
    } catch (error) {
      Alert.alert('Error', 'Failed to copy to clipboard');
    }
>>>>>>> main
  };

  const getAnswerText = (character: FarsiCharacter): string => {
    switch (mode) {
      case 'character-to-name':
        return character.romanizedName;
      case 'name-to-character':
        return character.character;
      case 'character-to-pronunciation':
        return character.pronunciation;
      case 'pronunciation-to-character':
        return character.character;
      default:
        return '';
    }
  };

  const renderCharacterByCharacter = (word: string, targetChar: string) => {
    const characters = word.split('').reverse();
    return (
      <View style={styles.characterBreakdownContainer}>
        {characters.map((char, index) => (
          <Text
            key={index}
            style={[
              styles.characterBreakdownText,
              char === targetChar && styles.highlightedCharacterText
            ]}
          >
            {char}
          </Text>
        ))}
      </View>
    );
  };

  const renderQuestion = () => {
    if (!quizState.currentQuestion) return null;

    const { currentQuestion } = quizState;

    return (
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{currentQuestion.question}</Text>
        
        {/* Show the main character/name/pronunciation */}
        <View style={styles.mainDisplay}>
          {(mode === 'character-to-name' || mode === 'character-to-pronunciation') && (
            <View>
              <Text style={styles.mainCharacter}>{currentQuestion.correctAnswer.character}</Text>
              <View style={styles.exampleWords}>
                <View style={styles.exampleWordContainer}>
                  <TouchableOpacity 
                    onPress={() => handleCopyToClipboard(currentQuestion.correctAnswer.exampleWords.beginning)}
                  >
                    <Text style={styles.exampleText}>
                      {currentQuestion.correctAnswer.exampleWords.beginning}
                    </Text>
                  </TouchableOpacity>
                  {renderCharacterByCharacter(currentQuestion.correctAnswer.exampleWords.beginning, currentQuestion.correctAnswer.character)}
                </View>
                <View style={styles.exampleWordContainer}>
                  <TouchableOpacity 
                    onPress={() => handleCopyToClipboard(currentQuestion.correctAnswer.exampleWords.middleOrEnd)}
                  >
                    <Text style={styles.exampleText}>
                      {currentQuestion.correctAnswer.exampleWords.middleOrEnd}
                    </Text>
                  </TouchableOpacity>
                  {renderCharacterByCharacter(currentQuestion.correctAnswer.exampleWords.middleOrEnd, currentQuestion.correctAnswer.character)}
                </View>
              </View>
            </View>
          )}
          
          {(mode === 'name-to-character' || mode === 'pronunciation-to-character') && (
            <Text style={styles.mainText}>
              {mode === 'name-to-character' 
                ? currentQuestion.correctAnswer.romanizedName 
                : currentQuestion.correctAnswer.pronunciation}
            </Text>
          )}
        </View>
      </View>
    );
  };

  const renderOptions = () => {
    if (!quizState.currentQuestion) return null;

    return quizState.currentQuestion.options.map((option, index) => {
      const isSelected = quizState.selectedAnswer?.character === option.character;
      const isCorrect = option.character === quizState.currentQuestion!.correctAnswer.character;
      
      let buttonStyle: any = styles.optionButton;
      if (quizState.isAnswered) {
        if (isCorrect) {
          buttonStyle = [styles.optionButton, styles.correctAnswer];
        } else if (isSelected && !isCorrect) {
          buttonStyle = [styles.optionButton, styles.incorrectAnswer];
        }
      } else if (isSelected) {
        buttonStyle = [styles.optionButton, styles.selectedAnswer];
      }

      return (
        <TouchableOpacity
          key={index}
          style={buttonStyle}
          onPress={() => handleAnswerSelect(option)}
          disabled={quizState.isAnswered}
        >
          <Text style={[
            styles.optionText,
            quizState.isAnswered && isCorrect && styles.correctText,
            quizState.isAnswered && isSelected && !isCorrect && styles.incorrectText,
          ]}>
            {getAnswerText(option)}
          </Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.progressText}>
          {quizState.currentQuestionIndex + 1} / {quizState.totalQuestions}
        </Text>
        <Text style={styles.scoreText}>Score: {quizState.score}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {renderQuestion()}
        
        <View style={styles.optionsContainer}>
          {renderOptions()}
        </View>

        {quizState.isAnswered && (
          <View style={styles.feedbackContainer}>
            <Text style={[
              styles.feedbackText,
              quizState.isCorrect ? styles.correctFeedback : styles.incorrectFeedback
            ]}>
              {quizState.isCorrect ? 'Correct!' : 'Incorrect!'}
            </Text>
            <TouchableOpacity 
              style={styles.nextButton} 
              onPress={handleNextQuestion}
            >
              <Text style={styles.nextButtonText}>
                {quizState.currentQuestionIndex < quizState.totalQuestions - 1 ? 'Next Question' : 'Finish Quiz'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007AFF',
  },
  progressText: {
    fontSize: 16,
    fontWeight: '600',
  },
  scoreText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  questionContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  questionText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 15,
    color: '#333',
  },
  mainDisplay: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    width: '100%',
  },
  mainCharacter: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  mainText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  exampleWords: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  exampleText: {
    fontSize: 28,
    color: '#666',
    marginVertical: 1,
  },
  exampleWordContainer: {
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#f8f8f8',
  },
  characterBreakdownContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
  characterBreakdownText: {
    fontSize: 20,
    color: '#666',
    marginHorizontal: 1,
  },
  highlightedCharacterText: {
    fontSize: 20,
    color: '#F44336',
    fontWeight: 'bold',
  },
  normalText: {
    fontSize: 16,
    color: '#333',
  },
  optionsContainer: {
    marginBottom: 15,
  },
  optionButton: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginVertical: 6,
    borderWidth: 2,
    borderColor: '#e0e0e0',
    alignItems: 'center',
  },
  selectedAnswer: {
    borderColor: '#007AFF',
    backgroundColor: '#E3F2FD',
  },
  correctAnswer: {
    borderColor: '#4CAF50',
    backgroundColor: '#E8F5E8',
  },
  incorrectAnswer: {
    borderColor: '#F44336',
    backgroundColor: '#FFEBEE',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  correctText: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  incorrectText: {
    color: '#F44336',
    fontWeight: 'bold',
  },
  feedbackContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
  feedbackText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  correctFeedback: {
    color: '#4CAF50',
  },
  incorrectFeedback: {
    color: '#F44336',
  },
  nextButton: {
    backgroundColor: '#007AFF',
<<<<<<< HEAD
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 16,
=======
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 12,
>>>>>>> main
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
<<<<<<< HEAD
    fontSize: 16,
=======
    fontSize: 15,
>>>>>>> main
    fontWeight: '600',
  },
});

export default Quiz;
