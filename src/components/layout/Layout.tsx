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
  width: 100%;
  height: 740px;
  position: relative;
`

export default Layout
