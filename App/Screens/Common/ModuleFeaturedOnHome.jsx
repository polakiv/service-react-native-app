import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../Components/Heading';
import ModuleFeaturedLoopOnHome from './ModuleFeaturedLoopOnHome';

export default function ModuleFeaturedOnHome() {    

    const [business, setBusiness] = useState([]);
    useEffect(() => {
        getBusinessLists();
    }, [])
    const getBusinessLists = () => {
        GlobalApi.getBusinessLists().then(resp => {
            console.log("respbus", resp); 
            setBusiness(resp?.bussinessLists)
        }) 
    }
    return (
        <View style={{ marginTop: 10 }}>
            <Heading style={styles.heading} text={'Все разделы'} isViewAll={true} />
            <FlatList 
                data={business}   
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) =>( 
                    <View style={styles.container}>  
                       <ModuleFeaturedLoopOnHome business={item} />
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight:'bold',
        marginBottom: 100,
        paddingBottom: 100
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