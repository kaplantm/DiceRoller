import Sound from 'react-native-sound';

export enum eSounds {
  RISE = 'trending-up',
  FALL = 'trending-down',
  MEOW = 'pets',
  HELP = 'help',
  DRAMATIC = 'music-note',
  MUTE = 'volume-off',
}

export function createSound(fileName: string) {
  const sound = new Sound(fileName, Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // sound.play(() => sound.release());
  });
  return sound;
}

export var appSounds = {
  [eSounds.RISE]: createSound(`${eSounds.RISE}.wav`),
  [eSounds.FALL]: createSound(`${eSounds.FALL}.wav`),
  [eSounds.MEOW]: createSound(`${eSounds.MEOW}.wav`),
  [eSounds.DRAMATIC]: createSound(`${eSounds.DRAMATIC}.wav`),
  [eSounds.HELP]: createSound(`${eSounds.HELP}.wav`),
  [eSounds.MUTE]: undefined,
};

export const appSoundsArray: eSounds[] = Object.keys(appSounds) as eSounds[];

export function playSound(soundName: eSounds) {
  // stop all other sounds
  appSoundsArray.map((sound: any) => {
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
