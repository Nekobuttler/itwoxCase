import { Input } from 'tamagui'
import { useController } from 'react-hook-form'

export default function FormTextInput(props) {
  const {
    field,
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name: props.name,
    control: props.control,
    rules: props.rules,
  })

  return (
    <Input
      {...props}
      ref={field.ref}
      value={field.value}
      onChangeText={field.onChange}
      onBlur={field.onBlur}
    />
  )
}
