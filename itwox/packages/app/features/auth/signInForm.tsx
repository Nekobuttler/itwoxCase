import React, { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import type { SizeTokens } from 'tamagui'
import { Button, Form, TextArea, XStack, YStack, Label } from 'tamagui'
import { useLink } from 'solito/link'
import { FieldError, UseFormRegister } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { ZodType, z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Text, View, StyleSheet, Alert } from 'react-native'
import FormTextInput from '../components/FormTextInput'

export function FormLogin() {
  //const { register, handleSubmit } = useForm()

  const [message, setMessage] = useState('')

  type FormSignInData = {
    email: string
    password: string
  }

  const defaultValues = {
    email: '',
    password: '',
  }
  const schema: ZodType<FormSignInData> = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(10, { message: 'Password has to have at least 10 letters' }),
  })

  const {
    control,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues, resolver: zodResolver(schema) })

  const onSubmit = (formValues) => {
    setMessage('Signed In')
  }

  const linkHome = useLink({
    href: '/',
  })

  return (
    <YStack f={1} jc="center" ai="center" p="$4" gap="$4">
      <YStack width={400} minHeight={200} overflow="hidden" space="$2" margin="$3" padding="$2">
        <XStack alignItems="center" space="$2">
          <Label htmlFor="email"> User email</Label>
        </XStack>
        <FormTextInput control={control} name="name" label="Name" style={styles.textInput} />

        {errors.email?.message != null && (
          <Text style={styles.errorText}>{errors.email.message}</Text>
        )}
        <XStack alignItems="center" space="$2">
          <Label htmlFor="password"> Password</Label>
        </XStack>
        <FormTextInput
          control={control}
          name="age"
          label="Age"
          keyboardType="numeric"
          style={styles.textInput}
        />

        {errors.password?.message != null && (
          <Text style={styles.errorText}>{errors.password.message}</Text>
        )}
      </YStack>
      <Button onPress={handleSubmit(onSubmit)}>Submit</Button>
      <Button {...linkHome}>Back</Button>

      {message != null && <Text style={styles.message}>{message}</Text>}
    </YStack>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  textInput: {
    marginBottom: 10,
  },

  errorText: {
    color: 'red',
  },

  message: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
})
