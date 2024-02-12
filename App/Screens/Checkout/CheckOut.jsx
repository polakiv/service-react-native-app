import { View, TouchableOpacity, Text, ScrollView, StyleSheet, FlatList, KeyboardAvoidingView, TextInput } from 'react-native'
import React, { useEffect, useState, useUser } from 'react'

import { Ionicons } from '@expo/vector-icons'
import CalendarPicker from 'react-native-calendar-picker'
import Heading from './../../Components/Heading';
import moment from 'moment';
import 'moment/locale/ru';
import GlobalApi from '../../Utils/GlobalApi';

export default function CheckOut({ businessId, hideModal }) {

    const [timeList, setTimeList] = useState();
    const [selectedTime, setSelectedTime] = useState()

    const [selectedDate, setSelectedDate] = useState();
    const [note, setNote] = useState()
    /*const {user}=useUser();
        useEffect(() => {
            getTime()
        }, [])*/

    const getTime = () => {
        const timeList = [];
        for (let i = 8; i <= 12; i++) {
            timeList.push({
                time: i + ':00 до обеда'
            })
            timeList.push({
                time: i + ':30 до обеда'
            })
        }
        for (let i = 1; i <= 7; i++) {
            timeList.push({
                time: i + ':00 после обеда'
            })
            timeList.push({
                time: i + ':30 после обеда'
            })
        }
        setTimeList(timeList);
    }
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const minDate = new Date(); // Today
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';
    moment.locale('ru');

    // Форматируем дату в нужном формате
    const formattedDate = moment(startDate).format('LLLL');
    const onDateChange = (date, type) => {
        if (type === 'END_DATE') {
            setSelectedEndDate(date);
        } else {
            setSelectedStartDate(date);
            setSelectedEndDate(null);
        }
    };
    const createNewBooking = () => {
        if (!selectedDate) {
            //ToastAndroid.show('Выберите пожалуйста дату',ToastAndroid.LONG)
            alert('Выберите пожалуйста дату')

            return;
        }
        const data = {
            //   userName:user?.fullName,
            userName: 'Саша',
            // userEmail:user?.primaryEmailAddress.emailAddress,
            userEmail: "jlkllj@jkl.ru",
            time: 'selectedTime',
            date: selectedDate,
            note: note,
            businessId: businessId
        }
        
        GlobalApi.createBooking(data).then(resp => {
            console.log("resp end", resp)
            //ToastAndroid.show('Заказ принят',ToastAndroid.LONG)
            alert('Заказ принят')
        })

    }
    return (
        <ScrollView style={{ width: 350 }}>
            <KeyboardAvoidingView style={{ padding: 20 }}>
                <TouchableOpacity style={{ left: 20, marginBottom: 20, top: 20, display: 'flex', flexDirection: 'row', alignItems: 'center' }}
                    onPress={() => hideModal()}
                >
                    <Ionicons name='arrow-back-outline' size={24} color="black" />
                </TouchableOpacity>
                <Heading style={{ marginTop: 20, marginBottom: 20 }} text={'Выберите пожалуйста дату'} />
                <View style={styles.CalendarPicker}>
                    <CalendarPicker
                        width={340}
                        minDate={Date.now}
                        todayBackgroundColor='black'
                        todayTextStyle={{ color: 'white' }}
                        locale="ru"
                        weekdays={['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']}
                        previousTitle={'Пред'}
                        nextTitle={'След'}
                        months={[
                            'Январь',
                            'Февраль',
                            'Март',
                            'Апрель',
                            'Май',
                            'Июнь',
                            'Июль',
                            'Август',
                            'Сентябрь',
                            'Октябрь',
                            'Ноябрь',
                            'Декабрь',
                        ]}
                        selectedDayColor={'#ff35e2'}
                        selectedDayTextColor='white'
                        onDateChange={setSelectedDate} />

                </View>
                <View>
                    <Heading style={{ marginTop: 20, marginBottom: 20 }} text={'Выберите время'} />
                    <FlatList
                        data={timeList}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                onPress={() => setSelectedTime(item.time)}
                                style={{ marginRight: 10 }}>
                                <Text style={[selectedTime == item.time ? styles.selectedTime : styles.unSelectedTime]}>
                                    {item.time}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />

                    <Text>
                        {formattedDate != 'Invalid date' ?
                            <Text>Вы выбрали дату: {formattedDate}</Text> : ''
                        }
                    </Text>
                </View>
                <View style={{ paddingTop: 20 }} >
                    <Heading text={'Ваша заметка'} />
                    <TextInput placeholder="Заметка"
                        numberOfLines={4} multiline={true}
                        style={styles.noteTextArea}
                        onChange={(text) => setNote(text)}
                    />
                </View>
                <TouchableOpacity style={{ marginTop: 20 }}
                    onPress={() => createNewBooking()}
                >
                    <Text style={styles.confirmBtn}>Заказать</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    CalendarPicker: {
        backgroundColor: '#ff35e2',
        borderRadius: 15,
        padding: 20,
        marginTop: 30
    },
    selectedTime: {
        padding: 8,
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 99,
        paddingHorizontal: 18,
        backgroundColor: '#ff35e2',
        color: 'blue'
    },
    unSelectedTime: {
        padding: 8,
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 99,
        paddingHorizontal: 18,
        color: 'blue'
    },
    noteTextArea: {
        borderWidth: 1,
        borderRadius: 15,
        textAlignVertical: 'top',
        padding: 20,
        fontSize: 16,
        fontFamily: 'Raleway'
    },
    confirmBtn: {
        fontSize: 17,
        textAlign: 'center',
        fontFamily: 'Raleway',
        backgroundColor: 'blue',
        color: 'white',
        padding: 13,
        borderRadius: 99,
        marginTop: 15,
        elevation: 2
    }
})