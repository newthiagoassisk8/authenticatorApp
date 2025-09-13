import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'


export function  DetailsScreen() {
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

      {/* Detalhe da conta ativa */}
      <View className="flex-1 items-center justify-center">
        <Image
          source={{ uri: 'https://dummyimage.com/600x400/000/fff&text=Logo' }}
        />
        <Text className="text-neutral-900 font-medium text-base mb-1">support@google.com</Text>
        <Text className="text-neutral-900 font-bold text-2xl tracking-widest">226 584</Text>
        <View className="w-32 h-1 bg-neutral-200 rounded-full overflow-hidden my-2">
          <View className="w-2/3 h-full bg-pink-500" />
        </View>
        <TouchableOpacity className="mt-3 p-3 rounded-full bg-neutral-100">
          <Text className="text-neutral-500 text-xl">📋</Text>
        </TouchableOpacity>
      </View>



      {/* Bottom bar */}
      <View className="absolute bottom-0 left-0 right-0 flex-row justify-around items-center bg-white border-t border-neutral-200 py-3">
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
