import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { playSound } from '../utils/audioUtils';

interface PlayButtonProps {
  pronunciation: string;
  size?: 'small' | 'medium' | 'large';
}

const PlayButton: React.FC<PlayButtonProps> = ({ pronunciation, size = 'medium' }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePress = () => {
    console.log('Play button pressed for:', pronunciation);
    if (isPlaying) return; // Prevent multiple simultaneous plays
    
    setIsPlaying(true);
    
    try {
      playSound(pronunciation);
    } catch (error) {
      console.log('Error playing sound:', error);
    }
    
    // Reset playing state after a short delay
    setTimeout(() => {
      setIsPlaying(false);
    }, 1000);
  };

  const getButtonStyle = () => {
    switch (size) {
      case 'small':
        return [styles.button, styles.small];
      case 'large':
        return [styles.button, styles.large];
      default:
        return [styles.button, styles.medium];
    }
  };

  const getTextStyle = () => {
    switch (size) {
      case 'small':
        return [styles.text, styles.smallText];
      case 'large':
        return [styles.text, styles.largeText];
      default:
        return [styles.text, styles.mediumText];
    }
  };

  return (
    <TouchableOpacity
      style={[getButtonStyle(), isPlaying && styles.playing]}
      onPress={handlePress}
      disabled={isPlaying}
    >
      <Text style={getTextStyle()}>
        {isPlaying ? '⏸' : '▶'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  small: {
    width: 24,
    height: 24,
  },
  medium: {
    width: 32,
    height: 32,
  },
  large: {
    width: 40,
    height: 40,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: 12,
  },
  mediumText: {
    fontSize: 16,
  },
  largeText: {
    fontSize: 20,
  },
  playing: {
    backgroundColor: '#0056CC',
  },
});

export default PlayButton;
