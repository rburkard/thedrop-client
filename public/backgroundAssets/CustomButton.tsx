import { Text, TouchableOpacity } from 'react-native'

export const CustomButton = (props: { onPress: () => void; label: string }) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{ backgroundColor: 'blue', width: 300, height: 48 }}
      activeOpacity={0.7}
    >
      <Text
        style={{
          color: 'white',
          fontSize: 16,
          textAlign: 'center',
          width: '100%',
          lineHeight: 48,
        }}
      >
        {props.label}
      </Text>
    </TouchableOpacity>
  )
}
