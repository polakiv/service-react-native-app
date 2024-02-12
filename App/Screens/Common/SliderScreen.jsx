import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../Components/Heading';

export default function SliderScreen() {
    const [slider, setSlider] = useState();
    useEffect(() => {
        getSliders();
    }, [])
    const getSliders = () => {
        GlobalApi.getSlider().then(resp => {
            console.log("resp", resp.sliders1);
            setSlider(resp?.sliders1)
        })
    }
    return (
        <View>
            <Heading style={styles.heading} text='Выгодные предложения'/>
            <FlatList
                data={slider}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={({ item, index }) => (
                    <View style={{marginRight:20}}>  
                        <Image source={{ uri: item?.image?.url }}
                            style={styles.sliderImage}
                        />
                        
                    </View>
                )}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        margin: 20,
        fontWeight:700
    },
    sliderImage: {
        width: 270, height: 150, borderRadius: 20, objectFit: 'contain'
    }
})