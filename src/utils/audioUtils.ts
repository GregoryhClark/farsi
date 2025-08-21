// Try to import Sound, but handle the case where it's not available
let Sound: any = null;
let isSoundAvailable = false;

try {
  // Try different import methods
  const SoundModule = require('react-native-sound');
  Sound = SoundModule.default || SoundModule;
  
  // Test if the library is actually working
  if (Sound && typeof Sound.setCategory === 'function') {
    console.log('✅ react-native-sound loaded successfully');
    // Enable playback in silence mode
    Sound.setCategory('Playback');
    isSoundAvailable = true;
  } else {
    throw new Error('Sound library not properly initialized');
  }
} catch (error) {
  console.log('❌ react-native-sound not available:', error);
  console.log('🔧 Using fallback audio solution');
}

let currentSound: any = null;

export const playSound = (pronunciation: string): void => {
  // If Sound library is not available, use a simple fallback
  if (!isSoundAvailable) {
    console.log('🔧 react-native-sound not available, using fallback...');
    
    // Simple fallback: Use device vibration and visual feedback
    try {
      if (global.navigator && global.navigator.vibrate) {
        global.navigator.vibrate(100);
      }
    } catch (vibrationError) {
      console.log('Vibration not available:', vibrationError);
    }
    
    console.log('🎵 Would play pronunciation:', pronunciation);
    return;
  }

  // Add vibration feedback
  try {
    if (global.navigator && global.navigator.vibrate) {
      global.navigator.vibrate(50);
    }
  } catch (vibrationError) {
    // Ignore vibration errors
  }

  // Stop any currently playing sound
  if (currentSound) {
    try {
      currentSound.stop();
      currentSound.release();
    } catch (error) {
      console.log('Error stopping sound:', error);
    }
  }

  // Try to load and play the audio file with better error handling
  try {
    console.log('🎵 Loading testaudio...');
    
    currentSound = new Sound('testaudio', Sound.MAIN_BUNDLE, (error: any) => {
      if (error) {
        console.log('❌ Failed to load testaudio:', error);
        // Try to create a simple beep sound as fallback
        console.log('🔄 Trying to create a simple beep...');
        try {
          // Create a simple beep using a different approach
          const beepSound = new Sound('notification', Sound.MAIN_BUNDLE, (beepError: any) => {
            if (!beepError) {
              beepSound.setVolume(1.0);
              beepSound.play();
            }
          });
        } catch (beepError) {
          console.log('❌ Beep also failed:', beepError);
        }
        return;
      }
      
      console.log('✅ testaudio loaded successfully');
      
      // Configure the sound
      currentSound?.setVolume(1.0);
      currentSound?.setNumberOfLoops(0);
      
      // Play the sound with a delay to ensure it's ready
      setTimeout(() => {
        currentSound?.play((success: boolean) => {
          if (success) {
            console.log('✅ testaudio played successfully for:', pronunciation);
          } else {
            console.log('❌ testaudio playback failed for:', pronunciation);
            // Try one more time without callback
            try {
              currentSound?.play();
            } catch (playError) {
              console.log('❌ Second playback attempt failed:', playError);
            }
          }
        });
      }, 200);
    });
  } catch (error) {
    console.log('❌ Error creating sound instance:', error);
  }
};

const getSoundFileName = (pronunciation: string): string => {
  // Map pronunciations to file names
  // You'll need to create audio files with these names
  const pronunciationMap: { [key: string]: string } = {
    'ā': 'a',
    'b': 'b',
    'p': 'p',
    't': 't',
    's': 's',
    'j': 'j',
    'ch': 'ch',
    'h': 'h',
    'kh': 'kh',
    'd': 'd',
    'z': 'z',
    'r': 'r',
    'sh': 'sh',
    'gh': 'gh',
    'f': 'f',
    'q': 'q',
    'k': 'k',
    'g': 'g',
    'l': 'l',
    'm': 'm',
    'n': 'n',
    'v/w': 'v',
    'y': 'y',
    'glottal stop': 'glottal',
  };
  
  return pronunciationMap[pronunciation] || 'default';
};

export const stopSound = (): void => {
  if (currentSound) {
    try {
      currentSound.stop();
      currentSound.release();
    } catch (error) {
      console.log('Error stopping sound:', error);
    }
    currentSound = null;
  }
};

export const cleanupAudio = (): void => {
  stopSound();
};
