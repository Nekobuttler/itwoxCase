import {
  Anchor,
  H1,
  Paragraph,
  Separator,
  Sheet,
  useToastController,
  XStack,
  YStack,
  Nav,
  Button,
  ButtonText,
} from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { useLink } from 'solito/link'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from '@nextui-org/react'
import { FormLogin } from 'app/features/auth/signInForm'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { useAuth } from 'app/features/services/appContext'
interface AuthUser {
  Name: string
}

export function NavigationBar() {
  /*
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth()

  const logIn = (e) => {
    e.preventDefault()
    setIsLoggedIn(true)
    setAuthUser({
      Name: 'Jonh Doe',
    })
  }
  const logOut = (e) => {
    e.preventDefault()
    setIsLoggedIn(false)
    setAuthUser({null})
  }

  */

  const linkDashboard = useLink({
    href: '/dashboard',
  })
  const linkSignIn = useLink({
    href: '/auth/SignIn',
  })
  const linkHome = useLink({
    href: '/',
  })

  return (
    <Nav>
      <main className="container content">
        <Button {...linkHome}>
          <ButtonText>Home</ButtonText>{' '}
        </Button>
        <Button {...linkDashboard}>
          <ButtonText>Dashboard</ButtonText>
        </Button>
        <Button {...linkSignIn}>
          <ButtonText>Log Out</ButtonText>
        </Button>

        <Button {...linkSignIn}>
          <ButtonText>Sign In</ButtonText>
        </Button>
      </main>
    </Nav>
  )
}

/*
 <Nav>
      <main className="container content">
        <Button {...linkHome}>
          <ButtonText>Home</ButtonText>{' '}
        </Button>
        <Button {...linkDashboard}>
          <ButtonText>Dashboard</ButtonText>
        </Button>
        <span>User is currently : {isLoggedIn ? 'LoggedIn' : 'LoggedOut'}</span>
        {isLoggedIn ? <span> User name : {authUser.Name}</span> : null}
        {isLoggedIn ? (
          <Button
            onPress={(e) => {
              logOut(e)
            }}
          >
            <ButtonText>Log Out</ButtonText>
          </Button>
        ) : (
          <Button {...linkSignIn}>
            <ButtonText>Sign In</ButtonText>
          </Button>
        )}
      </main>
    </Nav>
*/
