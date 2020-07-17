import AsyncStorage from '@react-native-community/async-storage';

export const THEME_COLOR_KEY = 'THEME_COLOR';

export const storeLocalData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};

export const getLocalData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    // error reading value
  }
};
