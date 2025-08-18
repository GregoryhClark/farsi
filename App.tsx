/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import QuizModeSelection from './src/components/QuizModeSelection';
import Quiz from './src/components/Quiz';
import QuizResults from './src/components/QuizResults';
import { QuizMode, QuizResult } from './src/types/quiz';

type AppScreen = 'mode-selection' | 'quiz' | 'results';

function App(): React.JSX.Element {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('mode-selection');
  const [selectedMode, setSelectedMode] = useState<QuizMode | null>(null);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  const handleModeSelection = (mode: QuizMode) => {
    setSelectedMode(mode);
    setCurrentScreen('quiz');
  };

  const handleQuizFinish = (result: QuizResult) => {
    setQuizResult(result);
    setCurrentScreen('results');
  };

  const handleBackToModes = () => {
    setCurrentScreen('mode-selection');
    setSelectedMode(null);
    setQuizResult(null);
  };

  const handleRestartQuiz = () => {
    setCurrentScreen('quiz');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'mode-selection':
        return <QuizModeSelection onSelectMode={handleModeSelection} />;
      case 'quiz':
        return selectedMode ? (
          <Quiz
            mode={selectedMode}
            onFinish={handleQuizFinish}
            onBack={handleBackToModes}
          />
        ) : null;
      case 'results':
        return quizResult ? (
          <QuizResults
            result={quizResult}
            onRestart={handleRestartQuiz}
            onBackToModes={handleBackToModes}
          />
        ) : null;
      default:
        return <QuizModeSelection onSelectMode={handleModeSelection} />;
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      {renderScreen()}
    </>
  );
}

export default App;
