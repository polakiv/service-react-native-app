// ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Профиль</Text>
      </View>

      <View style={styles.profileContainer}>
        <Image
          source={require('./../../../assets/ava-vk-animal-91.jpg')}
          style={styles.profileImage}
        />

        <Text style={styles.username}>Имя</Text>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Редактировать</Text>
        </TouchableOpacity>
      </View>

      {/* Other profile details or sections can be added here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: '#3498db',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ProfileScreen;
