import './global.css';
// AuthScreen.tsx
// Tela estilo Authy em React Native usando NativeWind (Tailwind)
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'

const accounts = [
  {
    id: '1',
    name: 'support@google.com',
    provider: 'Google',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    code: '25',
  },
  {
    id: '2',
    name: 'Personal Account',
    provider: 'Generic',
    icon: 'https://cdn-icons-png.flaticon.com/512/847/847969.png',
    code: '25',
  },
  {
    id: '3',
    name: 'hello@microsoft.com',
    provider: 'Microsoft',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    code: '12',
  },
  {
    id: '4',
    name: 'Figma Corporate Account',
    provider: 'Figma',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    code: '25',
  },
  // adicione outros conforme necessário
]

export default function AuthScreen() {
  const renderItem = ({ item }: { item: typeof accounts[0] }) => (
    <View className="flex-row items-center justify-between bg-white rounded-xl px-4 py-3 mb-3 border border-neutral-200">
      {/* Esquerda: ícone e nome */}
      <View className="flex-row items-center gap-3">
        <Image source={{ uri: item.icon }} className="w-8 h-8 rounded-full" />
        <Text className="text-neutral-900 font-medium" numberOfLines={1}>
          {item.name}
        </Text>
      </View>

      {/* Direita: código e botão */}
      <View className="flex-row items-center gap-3">
        <View className="w-8 h-8 rounded-full border border-neutral-300 items-center justify-center">
          <Text className="text-neutral-900 font-semibold">{item.code}</Text>
        </View>
        <TouchableOpacity className="p-2 rounded-lg bg-neutral-100">
          <Text className="text-neutral-500">📋</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  return (
    <View className="flex-1 bg-gradient-to-b from-pink-400 to-blue-200">
      {/* Header */}
      <View className="bg-pink-500 px-5 pt-12 pb-4 flex-row items-center justify-between">
        <Text className="text-white font-semibold text-lg">Authy</Text>
        <View className="flex-row gap-4">
          <Text className="text-white text-lg">🔍</Text>
          <Text className="text-white text-lg">☰</Text>
        </View>
      </View>

      {/* Lista */}
      <FlatList
        data={accounts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 20 }}
      />

      {/* Bottom bar */}
      <View className="flex-row justify-around items-center bg-white border-t border-neutral-200 py-3">
        <TabItem label="Home" active />
        <TabItem label="Add Account" />
        <TabItem label="Settings" />
      </View>
    </View>
  )
}

function TabItem({ label, active }: { label: string; active?: boolean }) {
  return (
    <TouchableOpacity className="items-center">
      <Text className={active ? 'text-pink-500 text-sm' : 'text-neutral-400 text-sm'}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}
