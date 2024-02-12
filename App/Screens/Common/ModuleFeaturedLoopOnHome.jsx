import { View, Text, StyleSheet, FlatList, Image } from 'react-native'

export default function ModuleFeaturedLoopOnHome({ business }) {

    return (
        <View style={{backgroundColor:'white',marginRight:10,padding:5}}> 
            <Image source={{ uri: business?.images[0]?.url }}
                style={{ width: 160, height: 100,borderRadius:10 }}
            />
            <Text style={{ marginTop: 5, fontFamily:'Raleway' }}>
                {business?.name} 
            </Text> 
            <Text style={{ marginTop: 5, fontFamily:'Raleway'  }}>
                {business?.contactPerson} 
            </Text> 
            <Text style={{ marginTop: 5, fontSize:10, fontFamily:'Raleway',width:'auto',padding:5,borderRadius:5,color:'white', backgroundColor:'#ff35e2' }}>
                {business?.category?.name} 
            </Text> 
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