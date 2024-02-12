import { View, Text, FlatList, Image } from 'react-native'
import React from 'react';
import Heading from '../../Components/Heading';

export default function ProductPhotos({ business }) {
    return (
        <View>
            <Heading style={{ paddingBottom: 40,color:'black',fontWeight:700 }} text={"Фото"} />
            <FlatList  
                data={business.images}
                numColumns={2}
                renderItem={({ item }) => (
                    <Image source={{ uri: item.url }}
                        style={{ width: '100%', height: 100, flex:1, borderRadius: 15, marginRight: 5,marginBottom:5 }}
                    />
                )}
            />
        </View>
    )
}