import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  ImageBackground,
  Pressable,
} from 'react-native';
const Stack = createStackNavigator();
const MainScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <ImageBackground
        source={require('../img/background-signup.png')}
        style={styles.background}>
          <Text style={styles.header1}>QSHIP XIN CHÀO</Text>
          <Text style={styles.header2}>Hãy đăng nhập để sử dụng dịch vụ của chúng tôi</Text>
        <View style={styles.buttonContainer}>
        <Pressable onPress={() => navigation.navigate('Login')}>
            <Text style={styles.btn}>LOGIN</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Register')}>
            <Text style={styles.btn}>REGISTER</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  header1:{
    color: 'pink',
    fontSize: '40',
    fontWeight: 'bold',
  },
  header2:{
    color: 'pink',
    fontSize: '18',
    fontWeight: 'bold',
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row', // Đặt các nút nằm ngang
    justifyContent: 'space-around', // Giữa các nút có khoảng cách
    width: '80%', // Điều chỉnh độ rộng theo ý muốn
    alignItems: 'center',
  },
  btn: {
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
    padding: 14,
    borderRadius: 50, // Bo góc nút
    marginHorizontal: 5, // Tạo khoảng cách giữa các nút
  },
});

export default MainScreen;
