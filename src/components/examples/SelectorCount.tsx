import { useRecoilState, useRecoilValue } from 'recoil'
import { countState, inputState, countInputState } from '../../atom/count'

function SelectorCount() {
  const [count, setCount] = useRecoilState(countState) // useRecoilState 을 통한 value, setter 반환
  const [input, setInput] = useRecoilState(inputState) // useRecoilState 을 통한 value, setter 반환
  const countInput = useRecoilValue(countInputState) // useRecoilValue 을 통한 selector 의 get value 반환

  return (
    <div>
      <h2>읽기 쓰기 카운트 컴포넌트</h2>
      <p>카운트 {count}</p>
      <p>selector {countInput}</p>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>숫자 증가</button>
      <button onClick={() => setCount(count - 1)}>숫자 감소</button>
    </div>
  )
}

export default SelectorCount
