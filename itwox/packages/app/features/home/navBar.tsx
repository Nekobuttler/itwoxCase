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
import Logout from 'app/features/auth/authLogout'
import Protected from '../auth/authProtected'
import Unprotected from '../auth/authUnprotected'
import AuthProvider, { AuthIsNotSignedIn, AuthIsSignedIn } from '../auth/authContext'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

export function NavigationBar() {
  const linkDashboard = useLink({
    href: '/dashboard',
  })
  const linkSignIn = useLink({
    href: '/auth/SignIn',
  })
  const linkHome = useLink({
    href: '/',
  })
  const logOutLink = useLink({
    href: '/logout',
  })
  const protectedLink = useLink({
    href: '/protected',
  })

  return (
    <Nav>
      <main className="container content">
        <Button {...linkSignIn}>
          <ButtonText>Sign In</ButtonText>
        </Button>
        <Button {...linkHome}>
          <ButtonText>Home</ButtonText>{' '}
        </Button>
        <Button {...linkDashboard}>
          <ButtonText>Dashboard</ButtonText>
        </Button>
        <Button {...linkSignIn}>
          <ButtonText>sadasd</ButtonText>
        </Button>
      </main>
    </Nav>
  )
}
