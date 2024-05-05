import { HomeScreen } from 'app/features/home/screen'
import { Stack } from 'expo-router'
import { NavigationBar } from 'app/features/home/navBar'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Home',
        }}
      />

      <HomeScreen />
    </>
  )
}
