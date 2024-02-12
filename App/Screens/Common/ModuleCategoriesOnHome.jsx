import { View, Text, StyleSheet, FlatList, Image, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../Components/Heading';
import { useNavigation } from '@react-navigation/native';

export default function ModuleCategoriesOnHome() {

    const [categories, setCategories] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        getCategories();
    }, [])
    const getCategories = () => {
        GlobalApi.getCategories().then(resp => {
            console.log("respcat", resp);
            setCategories(resp?.categories)
        })
    }
    return (
        <View style={{ marginTop: 10 }}>
            <Heading text={'Категории'} isViewAll={true} />
            <FlatList
                data={categories}
                numColumns={4}
                renderItem={({ item, index }) => index <= 3 && (
                    <TouchableOpacity style={styles.container}
                        onPress={() => navigation.push('category',{category:item.name})}>
                        <View style={styles.iconContainer}>
                            <Image source={{ uri: item?.icon2?.url }}
                                style={{ width: 30, height: 30 }}
                            />
                            <Text style={{ marginTop: 5 }}>
                                {item.name}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        marginBottom: 0
    },
    container: {
        flex: 1,
        alignItems: 'baseline'
    },
    iconContainer: {
        backgroundColor: '#EDEDED',
        padding: 10,
        alignItems: 'center'
    }

})