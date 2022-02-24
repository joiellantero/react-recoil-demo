import { atom } from 'recoil';

const localPersist = ({onSet, setSelf, node}) => {
  const storedData = localStorage.getItem(node.key)
  if (storedData != null){
    setSelf(JSON.parse(storedData))
  }
  onSet((newData, __, isReset) => {
    isReset
      ? localStorage.removeItem(node.key)
      : localStorage.setItem(node.key, JSON.stringify(newData));
  })
}

export const darkModeState = atom({
  key: 'darkMode',
  default: false,
  effects_UNSTABLE: [localPersist]
});

export const myStringState = atom({
  key: 'myString',
  default: '',
  effects_UNSTABLE: [localPersist]
});