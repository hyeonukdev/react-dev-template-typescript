import styled from 'styled-components'
import ThemeToggleSwitch from '../ThemeToggleSwitch'

const Header = () => (
  <Wrapper>
    <div>
      <span>Logo</span>
      <ThemeToggleSwitch />
    </div>
  </Wrapper>
)

const Wrapper = styled.div`
  /* 레이아웃 */
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;
  top: 0px;
  z-index: 5;

  /* 색상 */
  color: white;
  border-bottom: 1px solid black;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.2);

  /* 폰트 */
  font-size: 2.5rem;
`

export default Header
