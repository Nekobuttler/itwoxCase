import { HomeScreen } from 'app/features/home/screen'
import { Stack } from 'expo-router'
import { Nav } from '@my/ui'
export default function Screen() {
  return (
    <>
      <Nav></Nav>
      <Stack.Screen
        options={{
          title: 'Home',
        }}
      />
      <HomeScreen />
    </>
  )
}
