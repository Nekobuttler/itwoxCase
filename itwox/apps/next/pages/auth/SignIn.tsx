import React, { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import type { SizeTokens } from 'tamagui'
import { Button, Form, H4, Spinner, Input, TextArea, XStack, YStack, Label } from 'tamagui'
import { useLink } from 'solito/link'
import { FieldError, UseFormRegister } from 'react-hook-form'
import { FormLogin } from 'app/features/auth/signInForm'

const SignIn: React.FC = () => {
  return <FormLogin></FormLogin>
}
export default SignIn
