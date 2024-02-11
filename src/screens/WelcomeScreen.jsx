import {View, Text, Pressable, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../components/Button';

import {useIsFocused} from '@react-navigation/native';
import COLORS from '../constants/colors';
const WelcomeScreen = ({navigation}) => {
  const isFocused = useIsFocused();

  const checkToken = async () => {};

  useEffect(() => {
    if (isFocused) {
      checkToken();
    }
  }, [isFocused, navigation]);

  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[COLORS.darkBlue, COLORS.grey, COLORS.lightBlue]}>
      <View style={{flex: 1}}>
        <View>
          <Image
            source={require('../assets/images/boy.jpg')}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: 'absolute',
              top: 10,

              transform: [
                {translateX: 20},
                {translateY: 50},
                {rotate: '-15deg'},
              ],
            }}
          />

          <Image
            source={require('../assets/images/girl.jpg')}
            style={{
              height: 200,
              width: 200,
              borderRadius: 20,
              position: 'absolute',
              top: 110,
              left: 100,
              transform: [
                {translateX: 50},
                {translateY: 50},
                {rotate: '-15deg'},
              ],
            }}
          />
        </View>

        {/* content  */}

        <View
          style={{
            paddingHorizontal: 22,
            position: 'absolute',
            top: 400,
            width: '100%',
          }}>
          <Text
            style={{
              fontSize: 50,
              fontWeight: 800,
              color: COLORS.white,
            }}>
            Let's Get
          </Text>
          <Text
            style={{
              fontSize: 46,
              fontWeight: 800,
              color: COLORS.white,
            }}>
            Started
          </Text>

          <View style={{marginVertical: 22}}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
                marginVertical: 4,
              }}>
              Your personal ai assistant's
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
              }}>
              are on the way !
            </Text>
          </View>

          <Button
            title="Get Started"
            style={{
              marginTop: 22,
              width: '100%',
            }}
            onPress={() => navigation.navigate('Home')}
          />

          <View
            style={{
              flexDirection: 'row',
              marginTop: 12,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
              }}>
              Already have an account ?
            </Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.white,
                  fontWeight: 'bold',
                  marginLeft: 4,
                }}>
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <StatusBar backgroundColor={COLORS.primary} />
    </LinearGradient>
  );
};

export default WelcomeScreen;
