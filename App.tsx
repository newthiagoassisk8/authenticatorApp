import { TabItem } from 'components/TabItem';
import './global.css';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { getTotpcodes } from 'integrations/api';
import { useEffect, useState } from 'react';



export default function AuthScreen() {
    const [otp, setOtps] = useState([]);

    useEffect(() => {
      const fetchCodes = async () => {
        try {
          const res = await getTotpcodes();
          setOtps(res);

        } catch (error) {

          console.error("Erro ao buscar códigos TOTP:", error);
        }
      }
      fetchCodes();
    })


    const renderItem = ({ item }: { item: any }) => (
        <View className="flex-row items-center justify-between bg-white rounded-xl px-4 py-3 mb-3 border border-neutral-200">
            <View className="flex-row items-center gap-3">
                <Image source={{ uri: item?.icon }} className="w-8 h-8 rounded-full" />
                <Text className="text-neutral-900 font-medium" numberOfLines={1}>
                    {item.label}
                </Text>
            </View>

            <View className="flex-row items-center gap-3">
                <View className="w-8 h-8 rounded-full border border-neutral-300 items-center justify-center">
                    <Text className="text-neutral-900 font-semibold">25</Text>
                </View>
                <TouchableOpacity className="p-2 rounded-lg bg-neutral-100">
                    <Text className="text-neutral-500">📋</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View className="flex-1 bg-gradient-to-b from-pink-400 to-blue-200">
            <View className="bg-pink-500 px-5 pt-12 pb-4 flex-row items-center justify-between">
                <Text className="text-white font-semibold text-lg">Authy</Text>
                <View className="flex-row gap-4">
                    <Text className="text-white text-lg">🔍</Text>
                    <Text className="text-white text-lg">☰</Text>
                </View>
            </View>

            <FlatList
                data={otp}
                keyExtractor={(item) => item.uid}
                renderItem={renderItem}
                contentContainerStyle={{ padding: 20 }}
            />

            <View className="flex-row justify-around items-center bg-white border-t border-neutral-200 py-3">
                <TabItem label="Home" active />
                <TabItem label="Add Account" />
                <TabItem label="Settings" />
            </View>
        </View>
    );
}
