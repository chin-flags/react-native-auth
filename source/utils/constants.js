import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export const emailRegEx = /^(([^<>()\]\\.,;:\s@']+(\.[^<>()\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const colors = {
  black: '#000',
  white: '#FFF',
  gray: '#DCE0E9',
  caption: '#BCCCD4',
  accent: '#E86E57',
  active: '#007BFA',
  background: '#F6F8FA',
  borderColor: '#DDE6F0',
  iconColor: '#A0A0A8',
};


export const layout = {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  sizes: {
    base: 16,
    font: 14,
    padding: 24,
    margin: 24,
    title: 24,
    radius: 12,
  },
};
