import { atom, selector } from 'recoil'

export const countState = atom({
  key: 'countState', // 해당 atom의 고유 key
  default: 0 // 기본값
})

export const inputState = atom({
  key: 'inputState',
  default: ''
})

export const countInputState = selector({
  key: 'countTitleState',
  get: ({ get }) => {
    return `현재 카운트는 ${get(countState)} 이고 입력값은 ${get(
      inputState
    )} 입니다.`
  }
})
