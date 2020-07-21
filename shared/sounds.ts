import Sound from 'react-native-sound';

export enum eSounds {
  RISE = 'trending-up',
  FALL = 'trending-down',
  MEOW = 'pets',
  HELP = 'help',
  DRAMATIC = 'music-note',
  MUTE = 'volume-off',
  ERROR = 'error',
}

export function createSound(fileName: string) {
  const sound = new Sound(fileName, Sound.MAIN_BUNDLE, error => {
    if (error) {
      return;
    }
  });
  return sound;
}

export var appSounds = {
  [eSounds.RISE]: createSound(`${eSounds.RISE}.mp3`),
  [eSounds.FALL]: createSound(`${eSounds.FALL}.mp3`),
  [eSounds.MEOW]: createSound(`${eSounds.MEOW}.mp3`),
  [eSounds.DRAMATIC]: createSound(`${eSounds.DRAMATIC}.mp3`),
  [eSounds.HELP]: createSound(`${eSounds.HELP}.mp3`),
  [eSounds.MUTE]: undefined,
  [eSounds.ERROR]: createSound(`${eSounds.ERROR}.mp3`),
};

// Omit error sound
export const rollingSoundsArray: eSounds[] = Object.keys(appSounds).slice(
  0,
  -1,
) as eSounds[];

export function playSound(soundName: eSounds) {
  // stop all other sounds
  rollingSoundsArray.map((sound: any) => {
    if (sound && sound.stop) {
      sound.stop();
    }
  });

  if (!soundName) {
    return;
  }
  const sound = appSounds[soundName];
  if (sound) {
    sound.stop();
    sound.play();
  }
}
