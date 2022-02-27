import styled from 'styled-components'

interface Props {
  children: any
}

const Layout = ({ children }: Props) => <Wrapper>{children}</Wrapper>
const Wrapper = styled.div`
  padding-top: 60px; /* 헤더 높이 */
`
Layout.Main = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  width: 1200px;
  position: relative;
  background: gray;
`

export default Layout
