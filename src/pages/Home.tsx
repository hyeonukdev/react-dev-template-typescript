import Layout from '../components/layout/Layout'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

function Home() {
  return (
    <>
      <Layout>
        <Header />
        <Layout.Main>hello</Layout.Main>
        <Footer />
      </Layout>
    </>
  )
}

export default Home
