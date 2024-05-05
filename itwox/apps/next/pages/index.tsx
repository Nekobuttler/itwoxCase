import { HomeScreen } from 'app/features/home/screen'
import Head from 'next/head'
import { NavigationBar } from 'app/features/home/navBar'

export default function Page() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <NavigationBar></NavigationBar>
      <HomeScreen />
    </>
  )
}
