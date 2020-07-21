import AsyncStorage from '@react-native-community/async-storage';

export const THEME_STORAGE_KEY = 'theme';
export const SOUND_STORAGE_KEY = 'sound';
export const MODIFIER_STORAGE_KEY = 'modifier';

export const storeLocalData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log('storeLocalData', {key, value});
  } catch (e) {
    console.log('storeLocalData e', e);
    // saving error
  }
};

export const getLocalData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    console.log('getLocalData', {key, value});
    return value;
  } catch (e) {
    console.log('getLocalData e', e);
    // error reading value
  }
};
