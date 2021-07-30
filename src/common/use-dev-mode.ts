import { useLocalStorage } from 'react-use';

export const useDevMode = () => useLocalStorage('bond:devMode', false);
