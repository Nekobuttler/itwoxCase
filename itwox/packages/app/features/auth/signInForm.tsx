import React, { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import type { SizeTokens } from 'tamagui'
import { Button, Form, H4, Spinner, Input, TextArea, XStack, YStack, Label } from 'tamagui'
import { useLink } from 'solito/link'
import { FieldError, UseFormRegister } from 'react-hook-form'
import { useForm } from 'react-hook-form'

export function FormLogin() {
  const { register, handleSubmit } = useForm()

  const submitForm = (data) => {
    console.log(data.email)
  }

  const linkHome = useLink({
    href: '/',
  })

  return (
    <YStack f={1} jc="center" ai="center" p="$4" gap="$4">
      <form onSubmit={handleSubmit(submitForm)}>
        <YStack width={400} minHeight={200} overflow="hidden" space="$2" margin="$3" padding="$2">
          <XStack alignItems="center" space="$2">
            <Label htmlFor="email"> User email</Label>
          </XStack>
          <XStack alignItems="center" space="$2">
            <input type="email" className="form-input" {...register('email')} required />
          </XStack>
          <XStack alignItems="center" space="$2">
            <Label htmlFor="password"> Password</Label>
          </XStack>
          <XStack alignItems="center" space="$2">
            <input type="password" className="form-input" {...register('password')} required />
          </XStack>
        </YStack>
        <H4></H4>
        <XStack alignItems="center" space="$2">
          <button type="submit" className="button">
            Login
          </button>

          <Button {...linkHome}> Back </Button>
        </XStack>
      </form>
    </YStack>
  )
}
