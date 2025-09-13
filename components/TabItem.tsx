import { Text, TouchableOpacity } from 'react-native'

export function TabItem({ label, active }: { label: string; active?: boolean }) {
    return (
      <TouchableOpacity className="items-center">
        <Text className={active ? 'text-pink-500 text-sm' : 'text-neutral-400 text-sm'}>
          {label}
        </Text>
      </TouchableOpacity>
    )
  }
