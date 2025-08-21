# Audio Setup Guide for Farsi Quiz App

## Overview
The app now supports audio playback for the "Sound to Character" quiz mode. You'll need to add audio files for each Farsi pronunciation.

## Required Audio Files

### File Format
- **Format**: MP3
- **Quality**: 128-192 kbps, 44.1 kHz
- **Duration**: 1-2 seconds per sound

### File Names
Create the following MP3 files and place them in the appropriate directories:

#### Android
Place files in: `android/app/src/main/res/raw/`
- `a.mp3` (for 'ā' sound)
- `b.mp3` (for 'b' sound)
- `p.mp3` (for 'p' sound)
- `t.mp3` (for 't' sound)
- `s.mp3` (for 's' sound)
- `j.mp3` (for 'j' sound)
- `ch.mp3` (for 'ch' sound)
- `h.mp3` (for 'h' sound)
- `kh.mp3` (for 'kh' sound)
- `d.mp3` (for 'd' sound)
- `z.mp3` (for 'z' sound)
- `r.mp3` (for 'r' sound)
- `sh.mp3` (for 'sh' sound)
- `gh.mp3` (for 'gh' sound)
- `f.mp3` (for 'f' sound)
- `q.mp3` (for 'q' sound)
- `k.mp3` (for 'k' sound)
- `g.mp3` (for 'g' sound)
- `l.mp3` (for 'l' sound)
- `m.mp3` (for 'm' sound)
- `n.mp3` (for 'n' sound)
- `v.mp3` (for 'v/w' sound)
- `y.mp3` (for 'y' sound)
- `glottal.mp3` (for 'glottal stop' sound)

#### iOS
Place files in: `ios/LangQuiz/Resources/`
(Same file names as above)

## Recording Guidelines

### Quality Requirements
- Clear, quiet environment
- Consistent volume levels
- Pronounce each sound clearly and distinctly
- Record each sound 2-3 times and pick the best one

### Recording Process
1. Use a decent microphone (phone's built-in mic can work)
2. Record in a quiet room with minimal echo
3. Speak at a consistent distance from the mic
4. Use the same pronunciation style throughout

### Example Recording Script
For each sound, record:
```
"ā" (pause) "ā" (pause) "ā"
"b" (pause) "b" (pause) "b"
"ch" (pause) "ch" (pause) "ch"
```

## Testing
Once you add the audio files:
1. Rebuild the app: `npx react-native run-android` or `npx react-native run-ios`
2. Go to "Sound to Character" quiz mode
3. You should see play buttons (▶) next to the pronunciations
4. Tap the play buttons to hear the sounds

## Troubleshooting
- If you hear no sound, check that the audio files are in the correct directories
- Make sure file names match exactly (case-sensitive)
- Verify audio files are valid MP3 format
- Check device volume settings

## Current Implementation
The app currently shows play buttons and logs the pronunciation that would be played. This is a mock implementation that will be replaced with actual audio playback when you add the audio files.

### To Enable Real Audio Playback:
1. Add the audio files as described above
2. Replace the mock implementation in `src/utils/audioUtils.ts` with the real react-native-sound implementation
3. Ensure react-native-sound is properly linked for your platform

The mock implementation allows you to test the UI and functionality without needing the audio files immediately.
