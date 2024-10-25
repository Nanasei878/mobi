/**
 * Codia React Native App
 * https://codia.ai
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior='automatic'
      >
        <View
          style={{
            width: 375,
            height: 3065,
            backgroundColor: '#ffffff',
            position: 'relative',
            overflow: 'hidden',
            marginTop: 0,
            marginRight: 'auto',
            marginBottom: 0,
            marginLeft: 'auto',
          }}
        >
          <View
            style={{
              width: 945,
              height: 1,
              backgroundColor: '#e6e6e6',
              position: 'relative',
              zIndex: 130,
              marginTop: 695,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 129,
            }}
          />
          <View
            style={{
              width: 924,
              height: 1,
              backgroundColor: '#e6e6e6',
              position: 'relative',
              zIndex: 149,
              marginTop: 626,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 146,
            }}
          />
          <View
            style={{
              width: 398,
              height: 3235,
              backgroundColor: '#fbf6ff',
              position: 'absolute',
              top: -89,
              left: '50%',
              transform: [{ translateY: 0 }, { translateX: -201.5 }],
            }}
          >
            <View
              style={{
                width: 375,
                height: 125,
                backgroundColor: 'rgba(255, 255, 255, 0)',
                position: 'relative',
                zIndex: 109,
                marginTop: 88,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 14,
              }}
            >
              <Text
                style={{
                  display: 'flex',
                  width: '14.4%',
                  height: 20,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  fontFamily: 'SF Pro Text',
                  fontSize: 15,
                  fontWeight: '600',
                  lineHeight: 20,
                  color: '#ffffff',
                  letterSpacing: -0.24,
                  position: 'absolute',
                  top: '50%',
                  left: '5.6%',
                  textAlign: 'center',
                  zIndex: 116,
                  transform: [{ translateY: -48.5 }],
                }}
                numberOfLines={1}
              >
                9:41
              </Text>
              <View
                style={{
                  position: 'absolute',
                  top: 18.331,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  zIndex: 120,
                }}
              >
                <View
                  style={{
                    width: 375,
                    height: 1,
                    backgroundColor: 'rgba(237, 236, 246, 0)',
                    position: 'relative',
                    zIndex: 110,
                    marginTop: 105.669,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                  }}
                />
                <ImageBackground
                  style={{
                    width: 15.333,
                    height: 11,
                    position: 'absolute',
                    top: 0,
                    right: 43.667,
                    zIndex: 114,
                  }}
                  source={require('./assets/images/c1c4cf18-397e-4c0f-a3fb-e51e9a920790.png')}
                  resizeMode='cover'
                />
                <ImageBackground
                  style={{
                    width: '6.49%',
                    height: '10.62%',
                    position: 'absolute',
                    top: '0%',
                    left: '89.69%',
                    zIndex: 113,
                  }}
                  source={require('./assets/images/49997cb0-dc22-489f-afdd-35a11c244e4d.png')}
                />
                <ImageBackground
                  style={{
                    width: 17,
                    height: 10.667,
                    position: 'absolute',
                    top: 0.34,
                    right: 64,
                    zIndex: 115,
                  }}
                  source={require('./assets/images/c66cf1d0-74f0-4ff7-89b4-3a94fd1ee549.png')}
                  resizeMode='cover'
                />
                <Text
                  style={{
                    display: 'flex',
                    width: 52,
                    height: 30,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    fontFamily: 'Poppins',
                    fontSize: 20,
                    fontWeight: '600',
                    lineHeight: 30,
                    color: '#ffffff',
                    position: 'absolute',
                    top: 49.669,
                    left: '50%',
                    textAlign: 'center',
                    zIndex: 111,
                    transform: [{ translateX: -25.5 }],
                  }}
                  numberOfLines={1}
                >
                  Profil
                </Text>
                <ImageBackground
                  style={{
                    width: 5,
                    height: 5,
                    position: 'absolute',
                    top: 55.669,
                    left: '50%',
                    zIndex: 118,
                    transform: [{ translateY: 0 }, { translateX: 154.5 }],
                  }}
                  source={require('./assets/images/765d2d9d-410e-4cd8-ba98-532dab3d00bf.png')}
                  resizeMode='cover'
                />
                <ImageBackground
                  style={{
                    width: 5,
                    height: 5,
                    position: 'absolute',
                    top: 64.669,
                    left: '50%',
                    zIndex: 119,
                    transform: [{ translateY: 0 }, { translateX: 154.5 }],
                  }}
                  source={require('./assets/images/af3e5197-c807-40f5-ae41-e80c2fb3aa38.png')}
                  resizeMode='cover'
                />
                <ImageBackground
                  style={{
                    width: 5,
                    height: 5,
                    position: 'absolute',
                    top: 73.669,
                    left: '50%',
                    zIndex: 120,
                    transform: [{ translateY: 0 }, { translateX: 154.5 }],
                  }}
                  source={require('./assets/images/eb97511e-11da-4dcc-9e35-10b196e89bb0.png')}
                  resizeMode='cover'
                />
              </View>
            </View>
            <View
              style={{
                width: 114,
                height: 114,
                backgroundColor: '#c4c4c4',
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                borderBottomRightRadius: 50,
                borderBottomLeftRadius: 50,
                borderWidth: 6,
                borderColor: '#ffffff',
                borderStyle: 'solid',
                position: 'relative',
                zIndex: 107,
                marginTop: 54,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 145,
              }}
            />
            <Text
              style={{
                display: 'flex',
                width: 133,
                height: 30,
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 20,
                fontWeight: '600',
                lineHeight: 30,
                color: '#000000',
                position: 'relative',
                textAlign: 'center',
                zIndex: 105,
                marginTop: 20,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 135,
              }}
              numberOfLines={1}
            >
              Henry Kanwil
            </Text>
            <Text
              style={{
                display: 'flex',
                width: 102,
                height: 24,
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 24,
                color: 'rgba(0, 0, 0, 0.8)',
                position: 'relative',
                textAlign: 'center',
                zIndex: 104,
                marginTop: -1,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 151,
              }}
              numberOfLines={1}
            >
              Programmer
            </Text>
            <Text
              style={{
                display: 'flex',
                width: 315,
                height: 42,
                justifyContent: 'center',
                alignItems: 'flex-start',
                fontFamily: 'Poppins',
                fontSize: 14,
                fontWeight: '400',
                lineHeight: 21,
                color: '#000000',
                position: 'relative',
                textAlign: 'center',
                zIndex: 82,
                marginTop: 16,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 44,
              }}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu
            </Text>
            <View
              style={{
                display: 'flex',
                width: 259,
                height: 68,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative',
                zIndex: 100,
                marginTop: 24,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 72,
              }}
            >
              <View
                style={{
                  width: 68,
                  height: 68,
                  flexShrink: 0,
                  borderTopLeftRadius: 50,
                  borderTopRightRadius: 50,
                  borderBottomRightRadius: 50,
                  borderBottomLeftRadius: 50,
                  borderWidth: 1,
                  borderColor: '#e1d3ff',
                  borderStyle: 'solid',
                  position: 'relative',
                  zIndex: 93,
                }}
              >
                <View
                  style={{
                    width: 28,
                    height: 28,
                    position: 'relative',
                    overflow: 'hidden',
                    zIndex: 94,
                    marginTop: 20,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 20,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 26.25,
                      height: 26.25,
                      position: 'relative',
                      zIndex: 95,
                      marginTop: 0.88,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0.88,
                    }}
                    source={require('./assets/images/b71e713e-ea80-455a-b900-5457c3eb2117.png')}
                  />
                </View>
              </View>
              <View
                style={{
                  width: 67.105,
                  height: 68,
                  flexShrink: 0,
                  borderTopLeftRadius: 50,
                  borderTopRightRadius: 50,
                  borderBottomRightRadius: 50,
                  borderBottomLeftRadius: 50,
                  borderWidth: 1,
                  borderColor: '#e1d3ff',
                  borderStyle: 'solid',
                  position: 'relative',
                  zIndex: 97,
                }}
              >
                <ImageBackground
                  style={{
                    width: 28,
                    height: 28,
                    position: 'relative',
                    overflow: 'hidden',
                    zIndex: 98,
                    marginTop: 20,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 20,
                  }}
                  source={require('./assets/images/a5f67dd3-37f4-45a8-b914-40c71351d617.png')}
                  resizeMode='cover'
                />
              </View>
              <View
                style={{
                  width: 68,
                  height: 68,
                  flexShrink: 0,
                  borderTopLeftRadius: 50,
                  borderTopRightRadius: 50,
                  borderBottomRightRadius: 50,
                  borderBottomLeftRadius: 50,
                  borderWidth: 1,
                  borderColor: '#e1d3ff',
                  borderStyle: 'solid',
                  position: 'relative',
                  zIndex: 100,
                }}
              >
                <ImageBackground
                  style={{
                    width: 28,
                    height: 28,
                    position: 'relative',
                    overflow: 'hidden',
                    zIndex: 101,
                    marginTop: 20,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 20,
                  }}
                  source={require('./assets/images/2e9b499e-f840-4e6f-9cd5-218094b85d9b.png')}
                  resizeMode='cover'
                />
              </View>
            </View>
            <View
              style={{
                width: 319,
                height: 84,
                backgroundColor: '#40189d',
                borderTopLeftRadius: 14,
                borderTopRightRadius: 14,
                borderBottomRightRadius: 14,
                borderBottomLeftRadius: 14,
                position: 'relative',
                zIndex: 84,
                marginTop: 24,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 42,
              }}
            >
              <View
                style={{
                  width: 130,
                  height: 53,
                  fontSize: 0,
                  position: 'absolute',
                  top: 15,
                  left: '50%',
                  zIndex: 90,
                  transform: [{ translateY: 0 }, { translateX: -137.5 }],
                }}
              >
                <Text
                  style={{
                    height: 27,
                    fontFamily: 'Poppins',
                    fontSize: 18,
                    fontWeight: '600',
                    lineHeight: 27,
                    color: '#ffffff',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 89,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                  }}
                  numberOfLines={1}
                >
                  My Resume
                </Text>
                <Text
                  style={{
                    height: 21,
                    fontFamily: 'Poppins',
                    fontSize: 14,
                    fontWeight: '400',
                    lineHeight: 21,
                    color: '#ffffff',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 90,
                    marginTop: 5,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                  }}
                  numberOfLines={1}
                >
                  david_resume.pdf
                </Text>
              </View>
              <View
                style={{
                  width: 5,
                  height: 23,
                  position: 'absolute',
                  top: 31,
                  left: '50%',
                  zIndex: 88,
                  transform: [{ translateY: 0 }, { translateX: 133.5 }],
                }}
              >
                <ImageBackground
                  style={{
                    width: 5,
                    height: 5,
                    position: 'relative',
                    zIndex: 86,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                  }}
                  source={require('./assets/images/a2a39d4e-6a73-4808-ba2d-9f38f708e2b6.png')}
                  resizeMode='cover'
                />
                <ImageBackground
                  style={{
                    width: 5,
                    height: 5,
                    position: 'relative',
                    zIndex: 87,
                    marginTop: 4,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                  }}
                  source={require('./assets/images/8ab374b6-1d73-446e-b094-08f5a8311669.png')}
                  resizeMode='cover'
                />
                <ImageBackground
                  style={{
                    width: 5,
                    height: 5,
                    position: 'relative',
                    zIndex: 88,
                    marginTop: 4,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                  }}
                  source={require('./assets/images/da1e4bc3-3a60-4e21-8077-968ae0802456.png')}
                  resizeMode='cover'
                />
              </View>
            </View>
            <Text
              style={{
                height: 27,
                fontFamily: 'Poppins',
                fontSize: 18,
                fontWeight: '600',
                lineHeight: 27,
                color: '#000000',
                position: 'relative',
                textAlign: 'left',
                textTransform: 'uppercase',
                zIndex: 125,
                marginTop: 59,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 43,
              }}
              numberOfLines={1}
            >
              général
            </Text>
            <Text
              style={{
                height: 24,
                fontFamily: 'Poppins',
                fontSize: 16,
                fontWeight: '500',
                lineHeight: 24,
                color: '#505050',
                position: 'relative',
                textAlign: 'left',
                zIndex: 123,
                marginTop: 30,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 44,
              }}
              numberOfLines={1}
            >
              Prénom
            </Text>
            <Text
              style={{
                height: 27,
                fontFamily: 'Poppins',
                fontSize: 18,
                fontWeight: '500',
                lineHeight: 27,
                color: '#000000',
                position: 'relative',
                textAlign: 'left',
                zIndex: 124,
                marginTop: 38,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 44,
              }}
              numberOfLines={1}
            >
              Israël
            </Text>
            <View
              style={{
                width: 329,
                height: 1,
                backgroundColor: '#fbfbfb',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                borderWidth: 1,
                borderColor: '#c2c2c2',
                borderStyle: 'solid',
                position: 'relative',
                zIndex: 122,
                marginTop: 19,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 44,
              }}
            />
            <Text
              style={{
                height: 24,
                fontFamily: 'Poppins',
                fontSize: 16,
                fontWeight: '500',
                lineHeight: 24,
                color: '#505050',
                position: 'relative',
                textAlign: 'left',
                zIndex: 128,
                marginTop: 30,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 44,
              }}
              numberOfLines={1}
            >
              Nom d'utilisateur
            </Text>
            <Text
              style={{
                height: 27,
                fontFamily: 'Poppins',
                fontSize: 18,
                fontWeight: '500',
                lineHeight: 27,
                color: '#000000',
                position: 'relative',
                textAlign: 'left',
                zIndex: 129,
                marginTop: 38,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 44,
              }}
              numberOfLines={1}
            >
              israelree
            </Text>
            <View
              style={{
                width: 329,
                height: 1,
                backgroundColor: '#fbfbfb',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                borderWidth: 1,
                borderColor: '#c2c2c2',
                borderStyle: 'solid',
                position: 'relative',
                zIndex: 127,
                marginTop: 19,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 44,
              }}
            />
            <Text
              style={{
                height: 24,
                fontFamily: 'Poppins',
                fontSize: 16,
                fontWeight: '500',
                lineHeight: 24,
                color: '#505050',
                position: 'relative',
                textAlign: 'left',
                zIndex: 37,
                marginTop: 36,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 45,
              }}
              numberOfLines={1}
            >
              Deuxième prénom
            </Text>
            <Text
              style={{
                height: 27,
                fontFamily: 'Poppins',
                fontSize: 18,
                fontWeight: '500',
                lineHeight: 27,
                color: '#bbbbbb',
                position: 'relative',
                textAlign: 'left',
                zIndex: 38,
                marginTop: 38,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 45,
              }}
              numberOfLines={1}
            >
              Tapez ici
            </Text>
            <View
              style={{
                width: 329,
                height: 1,
                backgroundColor: '#fbfbfb',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                borderWidth: 1,
                borderColor: '#c2c2c2',
                borderStyle: 'solid',
                position: 'relative',
                zIndex: 36,
                marginTop: 19,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 45,
              }}
            />
            <Text
              style={{
                height: 24,
                fontFamily: 'Poppins',
                fontSize: 16,
                fontWeight: '500',
                lineHeight: 24,
                color: '#505050',
                position: 'relative',
                textAlign: 'left',
                zIndex: 133,
                marginTop: 24,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 47,
              }}
              numberOfLines={1}
            >
              Nom de famille
            </Text>
            <View
              style={{
                display: 'flex',
                width: 50,
                height: 27,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative',
                zIndex: 135,
                marginTop: 38,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 47,
              }}
            >
              <Text
                style={{
                  height: 27,
                  flexShrink: 0,
                  fontFamily: 'Poppins',
                  fontSize: 18,
                  fontWeight: '500',
                  lineHeight: 27,
                  color: '#000000',
                  position: 'relative',
                  textAlign: 'left',
                  zIndex: 134,
                }}
                numberOfLines={1}
              >
                SILUE
              </Text>
              <View
                style={{
                  width: 2,
                  height: 25,
                  flexShrink: 0,
                  backgroundColor: '#005dff',
                  position: 'relative',
                  zIndex: 135,
                }}
              />
            </View>
            <View
              style={{
                width: 329,
                height: 2,
                backgroundColor: '#fbfbfb',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                borderWidth: 1,
                borderColor: '#005dff',
                borderStyle: 'solid',
                position: 'relative',
                zIndex: 132,
                marginTop: 19,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 47,
              }}
            />
            <Text
              style={{
                height: 27,
                fontFamily: 'Poppins',
                fontSize: 18,
                fontWeight: '600',
                lineHeight: 27,
                color: '#000000',
                position: 'relative',
                textAlign: 'left',
                textTransform: 'uppercase',
                zIndex: 148,
                marginTop: 43,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 39,
              }}
              numberOfLines={1}
            >
              contact
            </Text>
            <Text
              style={{
                height: 24,
                fontFamily: 'Poppins',
                fontSize: 16,
                fontWeight: '500',
                lineHeight: 24,
                color: '#505050',
                position: 'relative',
                textAlign: 'left',
                zIndex: 142,
                marginTop: 30,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 40,
              }}
              numberOfLines={1}
            >
              Téléphone portable
            </Text>
            <View
              style={{
                display: 'flex',
                width: 187,
                height: 27,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative',
                zIndex: 143,
                marginTop: 39,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 64,
              }}
            >
              <View
                style={{
                  width: 24,
                  height: 24,
                  flexShrink: 0,
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 138,
                }}
              >
                <View
                  style={{
                    width: 22.159,
                    height: 24,
                    position: 'relative',
                    zIndex: 139,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0.92,
                  }}
                >
                  <View
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 140,
                    }}
                  >
                    <ImageBackground
                      style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: 141,
                      }}
                      source={require('./assets/images/3d2cb937-4da5-4f7a-8677-bf15e60371fd.png')}
                    />
                  </View>
                </View>
              </View>
              <Text
                style={{
                  height: 27,
                  flexShrink: 0,
                  fontFamily: 'Poppins',
                  fontSize: 18,
                  fontWeight: '500',
                  lineHeight: 27,
                  color: '#000000',
                  position: 'relative',
                  textAlign: 'left',
                  zIndex: 143,
                }}
                numberOfLines={1}
              >
                +50 123 456 78
              </Text>
            </View>
            <View
              style={{
                width: 329,
                height: 1,
                backgroundColor: '#fbfbfb',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                borderWidth: 1,
                borderColor: '#c2c2c2',
                borderStyle: 'solid',
                position: 'relative',
                zIndex: 137,
                marginTop: 18,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 40,
              }}
            />
            <Text
              style={{
                height: 24,
                fontFamily: 'Poppins',
                fontSize: 16,
                fontWeight: '500',
                lineHeight: 24,
                color: '#505050',
                position: 'relative',
                textAlign: 'left',
                zIndex: 146,
                marginTop: 30,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 40,
              }}
              numberOfLines={1}
            >
              Addresse
            </Text>
            <Text
              style={{
                height: 27,
                fontFamily: 'Poppins',
                fontSize: 18,
                fontWeight: '500',
                lineHeight: 27,
                color: '#000000',
                position: 'relative',
                textAlign: 'left',
                zIndex: 147,
                marginTop: 38,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 40,
              }}
              numberOfLines={1}
            >
              Riviera faya
            </Text>
            <View
              style={{
                width: 329,
                height: 1,
                backgroundColor: '#fbfbfb',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                borderWidth: 1,
                borderColor: '#c2c2c2',
                borderStyle: 'solid',
                position: 'relative',
                zIndex: 145,
                marginTop: 19,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 40,
              }}
            />
            <Text
              style={{
                height: 24,
                fontFamily: 'Poppins',
                fontSize: 16,
                fontWeight: '500',
                lineHeight: 24,
                color: '#505050',
                position: 'relative',
                textAlign: 'left',
                zIndex: 153,
                marginTop: 30,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 46,
              }}
              numberOfLines={1}
            >
              Mot de passe
            </Text>
            <View
              style={{
                display: 'flex',
                width: 325,
                height: 27,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative',
                zIndex: 154,
                marginTop: 38,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 46,
              }}
            >
              <Text
                style={{
                  height: 27,
                  flexShrink: 0,
                  fontFamily: 'Poppins',
                  fontSize: 18,
                  fontWeight: '500',
                  lineHeight: 27,
                  color: '#000000',
                  position: 'relative',
                  textAlign: 'left',
                  zIndex: 154,
                }}
                numberOfLines={1}
              >
                ***************
              </Text>
              <Text
                style={{
                  height: 27,
                  flexShrink: 0,
                  fontFamily: 'Poppins',
                  fontSize: 18,
                  fontWeight: '600',
                  lineHeight: 27,
                  color: '#005dff',
                  position: 'relative',
                  textAlign: 'left',
                  zIndex: 152,
                }}
                numberOfLines={1}
              >
                Montrer
              </Text>
            </View>
            <View
              style={{
                width: 329,
                height: 1,
                backgroundColor: '#fbfbfb',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                borderWidth: 1,
                borderColor: '#c2c2c2',
                borderStyle: 'solid',
                position: 'relative',
                zIndex: 151,
                marginTop: 19,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 46,
              }}
            />
            <Text
              style={{
                height: 24,
                fontFamily: 'Poppins',
                fontSize: 16,
                fontWeight: '500',
                lineHeight: 24,
                color: '#505050',
                position: 'relative',
                textAlign: 'left',
                zIndex: 157,
                marginTop: 31,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 46,
              }}
              numberOfLines={1}
            >
              Retaper le mot de passe
            </Text>
            <View
              style={{
                display: 'flex',
                width: 317,
                height: 27,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative',
                zIndex: 159,
                marginTop: 38,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 46,
              }}
            >
              <Text
                style={{
                  height: 27,
                  flexShrink: 0,
                  fontFamily: 'Poppins',
                  fontSize: 18,
                  fontWeight: '500',
                  lineHeight: 27,
                  color: '#000000',
                  position: 'relative',
                  textAlign: 'left',
                  zIndex: 158,
                }}
                numberOfLines={1}
              >
                ***************
              </Text>
              <Text
                style={{
                  height: 27,
                  flexShrink: 0,
                  fontFamily: 'Poppins',
                  fontSize: 18,
                  fontWeight: '600',
                  lineHeight: 27,
                  color: '#005dff',
                  position: 'relative',
                  textAlign: 'left',
                  zIndex: 159,
                }}
                numberOfLines={1}
              >
                Montrer
              </Text>
            </View>
            <View
              style={{
                width: 329,
                height: 1,
                backgroundColor: '#fbfbfb',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                borderWidth: 1,
                borderColor: '#c2c2c2',
                borderStyle: 'solid',
                position: 'relative',
                zIndex: 156,
                marginTop: 19,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 46,
              }}
            />
            <Text
              style={{
                height: 24,
                fontFamily: 'Poppins',
                fontSize: 16,
                fontWeight: '500',
                lineHeight: 24,
                color: '#505050',
                position: 'relative',
                textAlign: 'left',
                zIndex: 162,
                marginTop: 30,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 46,
              }}
              numberOfLines={1}
            >
              Whatsapp
            </Text>
            <View
              style={{
                display: 'flex',
                width: 178,
                height: 27,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative',
                zIndex: 164,
                marginTop: 38,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 70,
              }}
            >
              <View
                style={{
                  width: 24,
                  height: 24,
                  flexShrink: 0,
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 164,
                }}
              >
                <ImageBackground
                  style={{
                    width: 22,
                    height: 22,
                    position: 'relative',
                    zIndex: 165,
                    marginTop: 1,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 1,
                  }}
                  source={require('./assets/images/0e1e769a-a156-466a-8066-886df8cb0892.png')}
                />
              </View>
              <Text
                style={{
                  height: 27,
                  flexShrink: 0,
                  fontFamily: 'Poppins',
                  fontSize: 18,
                  fontWeight: '500',
                  lineHeight: 27,
                  color: '#000000',
                  position: 'relative',
                  textAlign: 'left',
                  zIndex: 163,
                }}
                numberOfLines={1}
              >
                +50 444 5511 11
              </Text>
            </View>
            <View
              style={{
                width: 329,
                height: 1,
                backgroundColor: '#fbfbfb',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                borderWidth: 1,
                borderColor: '#c2c2c2',
                borderStyle: 'solid',
                position: 'relative',
                zIndex: 161,
                marginTop: 19,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 46,
              }}
            />
            <Text
              style={{
                height: 24,
                fontFamily: 'Poppins',
                fontSize: 16,
                fontWeight: '500',
                lineHeight: 24,
                color: '#505050',
                position: 'relative',
                textAlign: 'left',
                zIndex: 168,
                marginTop: 27,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 46,
              }}
              numberOfLines={1}
            >
              Email
            </Text>
            <View
              style={{
                display: 'flex',
                width: 255,
                height: 27,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative',
                zIndex: 170,
                marginTop: 38,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 75,
              }}
            >
              <ImageBackground
                style={{
                  width: 24,
                  height: 24,
                  flexShrink: 0,
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 170,
                }}
                source={require('./assets/images/717db41e-7d0a-48f0-9f69-cfc979afec7c.png')}
              />
              <Text
                style={{
                  height: 27,
                  flexShrink: 0,
                  fontFamily: 'Poppins',
                  fontSize: 18,
                  fontWeight: '500',
                  lineHeight: 27,
                  color: '#000000',
                  position: 'relative',
                  textAlign: 'left',
                  zIndex: 169,
                }}
                numberOfLines={1}
              >
                davidheree@mail.com
              </Text>
            </View>
            <View
              style={{
                width: 329,
                height: 1,
                backgroundColor: '#fbfbfb',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                borderWidth: 1,
                borderColor: '#c2c2c2',
                borderStyle: 'solid',
                position: 'relative',
                zIndex: 167,
                marginTop: 19,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 46,
              }}
            />
            <Text
              style={{
                height: 27,
                fontFamily: 'Poppins',
                fontSize: 18,
                fontWeight: '500',
                lineHeight: 27,
                color: '#3c3c3c',
                position: 'relative',
                textAlign: 'left',
                zIndex: 40,
                marginTop: 31,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 42,
              }}
              numberOfLines={1}
            >
              Skill
            </Text>
            <View
              style={{
                display: 'flex',
                width: 319,
                height: 138,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative',
                zIndex: 74,
                marginTop: 19,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 42,
              }}
            >
              <View
                style={{
                  width: 93,
                  height: 138,
                  flexShrink: 0,
                  backgroundColor: '#e9e4f6',
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  borderBottomRightRadius: 30,
                  borderBottomLeftRadius: 30,
                  position: 'relative',
                  zIndex: 42,
                }}
              >
                <View
                  style={{
                    width: 49,
                    height: 49,
                    position: 'relative',
                    zIndex: 45,
                    marginTop: 20,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 22,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 49,
                      height: 49,
                      position: 'absolute',
                      top: 0,
                      left: '50%',
                      zIndex: 44,
                      transform: [{ translateY: 0 }, { translateX: -24.5 }],
                    }}
                    source={require('./assets/images/03b90e0d-77d8-44f1-95e7-c49f7ad3019c.png')}
                    resizeMode='cover'
                  />
                  <View
                    style={{
                      width: 49,
                      height: 49,
                      backgroundColor: '#ffffff',
                      borderTopLeftRadius: 38,
                      borderTopRightRadius: 38,
                      borderBottomRightRadius: 38,
                      borderBottomLeftRadius: 38,
                      position: 'absolute',
                      top: 0,
                      left: '50%',
                      zIndex: 45,
                      transform: [{ translateY: 0 }, { translateX: -24.5 }],
                    }}
                  >
                    <Text
                      style={{
                        display: 'flex',
                        height: 21,
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        fontFamily: 'Poppins',
                        fontSize: 14,
                        fontWeight: '500',
                        lineHeight: 21,
                        color: '#2d2d2d',
                        position: 'absolute',
                        top: 14,
                        left: '50%',
                        textAlign: 'left',
                        zIndex: 46,
                        transform: [{ translateX: -13.5 }],
                      }}
                      numberOfLines={1}
                    >
                      86%
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    display: 'flex',
                    width: 31,
                    height: 24,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    fontFamily: 'Poppins',
                    fontSize: 16,
                    fontWeight: '500',
                    lineHeight: 24,
                    color: '#000000',
                    position: 'relative',
                    textAlign: 'center',
                    zIndex: 48,
                    marginTop: 25,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 31,
                  }}
                  numberOfLines={1}
                >
                  PHP
                </Text>
              </View>
              <View
                style={{
                  width: 93,
                  height: 138,
                  flexShrink: 0,
                  backgroundColor: '#e9e4f6',
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  borderBottomRightRadius: 30,
                  borderBottomLeftRadius: 30,
                  position: 'relative',
                  zIndex: 58,
                }}
              >
                <View
                  style={{
                    width: 49,
                    height: 49,
                    position: 'relative',
                    zIndex: 61,
                    marginTop: 20,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 22,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 49,
                      height: 49,
                      position: 'absolute',
                      top: 0,
                      left: '50%',
                      zIndex: 60,
                      transform: [{ translateY: 0 }, { translateX: -24.5 }],
                    }}
                    source={require('./assets/images/ff51950f-c648-45fd-aa4b-4f5c6482fce7.png')}
                    resizeMode='cover'
                  />
                  <View
                    style={{
                      width: 49,
                      height: 49,
                      backgroundColor: '#ffffff',
                      borderTopLeftRadius: 38,
                      borderTopRightRadius: 38,
                      borderBottomRightRadius: 38,
                      borderBottomLeftRadius: 38,
                      position: 'absolute',
                      top: 0,
                      left: '50%',
                      zIndex: 61,
                      transform: [{ translateY: 0 }, { translateX: -24.5 }],
                    }}
                  >
                    <Text
                      style={{
                        display: 'flex',
                        height: 21,
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        fontFamily: 'Poppins',
                        fontSize: 14,
                        fontWeight: '500',
                        lineHeight: 21,
                        color: '#2d2d2d',
                        position: 'absolute',
                        top: 14,
                        left: '50%',
                        textAlign: 'left',
                        zIndex: 62,
                        transform: [{ translateX: -13.5 }],
                      }}
                      numberOfLines={1}
                    >
                      48%
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    display: 'flex',
                    width: 40,
                    height: 24,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    fontFamily: 'Poppins',
                    fontSize: 16,
                    fontWeight: '500',
                    lineHeight: 24,
                    color: '#000000',
                    position: 'relative',
                    textAlign: 'center',
                    zIndex: 64,
                    marginTop: 25,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 27,
                  }}
                  numberOfLines={1}
                >
                  Java
                </Text>
              </View>
              <View
                style={{
                  width: 93,
                  height: 138,
                  flexShrink: 0,
                  backgroundColor: '#e9e4f6',
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  borderBottomRightRadius: 30,
                  borderBottomLeftRadius: 30,
                  position: 'relative',
                  zIndex: 74,
                }}
              >
                <View
                  style={{
                    width: 49,
                    height: 49,
                    position: 'relative',
                    zIndex: 77,
                    marginTop: 20,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 22,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 49,
                      height: 49,
                      position: 'absolute',
                      top: 0,
                      left: '50%',
                      zIndex: 76,
                      transform: [{ translateY: 0 }, { translateX: -24.5 }],
                    }}
                    source={require('./assets/images/b0d43e25-0e0e-4a62-9f25-6641a9719683.png')}
                    resizeMode='cover'
                  />
                  <View
                    style={{
                      width: 49,
                      height: 49,
                      backgroundColor: '#ffffff',
                      borderTopLeftRadius: 38,
                      borderTopRightRadius: 38,
                      borderBottomRightRadius: 38,
                      borderBottomLeftRadius: 38,
                      position: 'absolute',
                      top: 0,
                      left: '50%',
                      zIndex: 77,
                      transform: [{ translateY: 0 }, { translateX: -24.5 }],
                    }}
                  >
                    <Text
                      style={{
                        display: 'flex',
                        height: 21,
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        fontFamily: 'Poppins',
                        fontSize: 14,
                        fontWeight: '500',
                        lineHeight: 21,
                        color: '#2d2d2d',
                        position: 'absolute',
                        top: 14,
                        left: '50%',
                        textAlign: 'left',
                        zIndex: 78,
                        transform: [{ translateX: -13.5 }],
                      }}
                      numberOfLines={1}
                    >
                      56%
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    display: 'flex',
                    width: 53,
                    height: 24,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    fontFamily: 'Poppins',
                    fontSize: 16,
                    fontWeight: '500',
                    lineHeight: 24,
                    color: '#000000',
                    position: 'relative',
                    textAlign: 'center',
                    zIndex: 80,
                    marginTop: 25,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 20,
                  }}
                  numberOfLines={1}
                >
                  MySQL
                </Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                width: 206,
                height: 138,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative',
                zIndex: 66,
                marginTop: 19,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 42,
              }}
            >
              <View
                style={{
                  width: 93,
                  height: 138,
                  flexShrink: 0,
                  backgroundColor: '#e9e4f6',
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  borderBottomRightRadius: 30,
                  borderBottomLeftRadius: 30,
                  position: 'relative',
                  zIndex: 50,
                }}
              >
                <View
                  style={{
                    width: 49,
                    height: 49,
                    position: 'relative',
                    zIndex: 53,
                    marginTop: 20,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 22,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 49,
                      height: 49,
                      position: 'absolute',
                      top: 0,
                      left: '50%',
                      zIndex: 52,
                      transform: [{ translateY: 0 }, { translateX: -24.5 }],
                    }}
                    source={require('./assets/images/0beff823-db5e-4ee8-9887-24233df5b5f6.png')}
                    resizeMode='cover'
                  />
                  <View
                    style={{
                      width: 49,
                      height: 49,
                      backgroundColor: '#ffffff',
                      borderTopLeftRadius: 38,
                      borderTopRightRadius: 38,
                      borderBottomRightRadius: 38,
                      borderBottomLeftRadius: 38,
                      position: 'absolute',
                      top: 0,
                      left: '50%',
                      zIndex: 53,
                      transform: [{ translateY: 0 }, { translateX: -24.5 }],
                    }}
                  >
                    <Text
                      style={{
                        display: 'flex',
                        height: 21,
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        fontFamily: 'Poppins',
                        fontSize: 14,
                        fontWeight: '500',
                        lineHeight: 21,
                        color: '#2d2d2d',
                        position: 'absolute',
                        top: 14,
                        left: '50%',
                        textAlign: 'left',
                        zIndex: 54,
                        transform: [{ translateX: -13.5 }],
                      }}
                      numberOfLines={1}
                    >
                      34%
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    display: 'flex',
                    width: 63,
                    height: 24,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    fontFamily: 'Poppins',
                    fontSize: 16,
                    fontWeight: '500',
                    lineHeight: 24,
                    color: '#000000',
                    position: 'relative',
                    textAlign: 'center',
                    zIndex: 56,
                    marginTop: 25,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 15,
                  }}
                  numberOfLines={1}
                >
                  React N
                </Text>
              </View>
              <View
                style={{
                  width: 93,
                  height: 138,
                  flexShrink: 0,
                  backgroundColor: '#e9e4f6',
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  borderBottomRightRadius: 30,
                  borderBottomLeftRadius: 30,
                  position: 'relative',
                  zIndex: 66,
                }}
              >
                <View
                  style={{
                    width: 49,
                    height: 49,
                    position: 'relative',
                    zIndex: 69,
                    marginTop: 20,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 22,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 49,
                      height: 49,
                      position: 'absolute',
                      top: 0,
                      left: '50%',
                      zIndex: 68,
                      transform: [{ translateY: 0 }, { translateX: -24.5 }],
                    }}
                    source={require('./assets/images/52bc9db0-323d-4a13-964d-66d8113d5815.png')}
                    resizeMode='cover'
                  />
                  <View
                    style={{
                      width: 49,
                      height: 49,
                      backgroundColor: '#ffffff',
                      borderTopLeftRadius: 38,
                      borderTopRightRadius: 38,
                      borderBottomRightRadius: 38,
                      borderBottomLeftRadius: 38,
                      position: 'absolute',
                      top: 0,
                      left: '50%',
                      zIndex: 69,
                      transform: [{ translateY: 0 }, { translateX: -24.5 }],
                    }}
                  >
                    <Text
                      style={{
                        display: 'flex',
                        height: 21,
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        fontFamily: 'Poppins',
                        fontSize: 14,
                        fontWeight: '500',
                        lineHeight: 21,
                        color: '#2d2d2d',
                        position: 'absolute',
                        top: 14,
                        left: '50%',
                        textAlign: 'left',
                        zIndex: 70,
                        transform: [{ translateX: -13.5 }],
                      }}
                      numberOfLines={1}
                    >
                      86%
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    display: 'flex',
                    width: 32,
                    height: 24,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    fontFamily: 'Poppins',
                    fontSize: 16,
                    fontWeight: '500',
                    lineHeight: 24,
                    color: '#000000',
                    position: 'relative',
                    textAlign: 'center',
                    zIndex: 72,
                    marginTop: 25,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 31,
                  }}
                  numberOfLines={1}
                >
                  CSS
                </Text>
              </View>
            </View>
            <View
              style={{
                width: 339,
                height: 378,
                backgroundColor: '#ffffff',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                position: 'relative',
                zIndex: 3,
                marginTop: 43,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 32,
              }}
            >
              <View
                style={{
                  width: 283,
                  height: 49,
                  backgroundColor: '#fbfbfb',
                  borderTopLeftRadius: 18,
                  borderTopRightRadius: 18,
                  borderBottomRightRadius: 18,
                  borderBottomLeftRadius: 18,
                  position: 'relative',
                  zIndex: 7,
                  marginTop: 81,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 28,
                }}
              >
                <View
                  style={{
                    width: '17.31%',
                    height: '100%',
                    backgroundColor: '#3d6ad6',
                    borderTopLeftRadius: 18,
                    borderTopRightRadius: 18,
                    borderBottomRightRadius: 18,
                    borderBottomLeftRadius: 18,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 8,
                  }}
                >
                  <View
                    style={{
                      width: 24,
                      height: 24,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 10,
                      marginTop: 12,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 13,
                    }}
                  >
                    <View
                      style={{
                        width: 10.38,
                        height: 19.2,
                        position: 'relative',
                        zIndex: 11,
                        marginTop: 2.4,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 6.81,
                      }}
                    >
                      <ImageBackground
                        style={{
                          width: '100%',
                          height: '100%',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          zIndex: 12,
                        }}
                        source={require('./assets/images/2dfe3b47-2207-4055-8025-3a6b2c850443.png')}
                      />
                    </View>
                  </View>
                </View>
                <Text
                  style={{
                    display: 'flex',
                    height: '48.98%',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    fontFamily: 'Poppins',
                    fontSize: 16,
                    fontWeight: '500',
                    lineHeight: 24,
                    color: '#3c3c3c',
                    position: 'absolute',
                    top: '26.53%',
                    left: '24.38%',
                    textAlign: 'left',
                    zIndex: 9,
                  }}
                  numberOfLines={1}
                >
                  /davidheree.porto
                </Text>
              </View>
              <View
                style={{
                  width: 283,
                  height: 49,
                  backgroundColor: '#fbfbfb',
                  borderTopLeftRadius: 18,
                  borderTopRightRadius: 18,
                  borderBottomRightRadius: 18,
                  borderBottomLeftRadius: 18,
                  position: 'relative',
                  zIndex: 30,
                  marginTop: 23,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 28,
                }}
              >
                <View
                  style={{
                    width: '17.31%',
                    height: '100%',
                    backgroundColor: '#ea518d',
                    borderTopLeftRadius: 18,
                    borderTopRightRadius: 18,
                    borderBottomRightRadius: 18,
                    borderBottomLeftRadius: 18,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 32,
                  }}
                >
                  <View
                    style={{
                      width: 24,
                      height: 24,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 33,
                      marginTop: 12,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 13,
                    }}
                  >
                    <ImageBackground
                      style={{
                        width: 19.2,
                        height: 19.2,
                        position: 'relative',
                        zIndex: 34,
                        marginTop: 2.4,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 2.4,
                      }}
                      source={require('./assets/images/47a0b2b5-d321-45aa-aef6-2dc922efbb7f.png')}
                    />
                  </View>
                </View>
                <Text
                  style={{
                    display: 'flex',
                    height: '48.98%',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    fontFamily: 'Poppins',
                    fontSize: 16,
                    fontWeight: '500',
                    lineHeight: 24,
                    color: '#3c3c3c',
                    position: 'absolute',
                    top: '26.53%',
                    left: '25.44%',
                    textAlign: 'left',
                    zIndex: 31,
                  }}
                  numberOfLines={1}
                >
                  /david.drib
                </Text>
              </View>
              <View
                style={{
                  width: 283,
                  height: 49,
                  backgroundColor: '#fbfbfb',
                  borderTopLeftRadius: 18,
                  borderTopRightRadius: 18,
                  borderBottomRightRadius: 18,
                  borderBottomLeftRadius: 18,
                  position: 'relative',
                  zIndex: 14,
                  marginTop: 21,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 28,
                }}
              >
                <View
                  style={{
                    width: '17.31%',
                    height: '100%',
                    backgroundColor: '#0073b1',
                    borderTopLeftRadius: 18,
                    borderTopRightRadius: 18,
                    borderBottomRightRadius: 18,
                    borderBottomLeftRadius: 18,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 16,
                  }}
                >
                  <View
                    style={{
                      width: 24,
                      height: 24,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 17,
                      marginTop: 12,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 13,
                    }}
                  >
                    <View
                      style={{
                        width: 19.2,
                        height: 19.2,
                        position: 'relative',
                        zIndex: 18,
                        marginTop: 2.4,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 2.4,
                      }}
                    >
                      <ImageBackground
                        style={{
                          width: 4.611,
                          height: 4.633,
                          position: 'relative',
                          zIndex: 21,
                          marginTop: 0,
                          marginRight: 0,
                          marginBottom: 0,
                          marginLeft: 0,
                        }}
                        source={require('./assets/images/9f1061cd-6975-4234-a351-55873e9727ae.png')}
                      />
                      <View
                        style={{
                          display: 'flex',
                          width: 18.883,
                          height: 13.141,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          position: 'relative',
                          zIndex: 20,
                          marginTop: 1.427,
                          marginRight: 0,
                          marginBottom: 0,
                          marginLeft: 0.32,
                        }}
                      >
                        <ImageBackground
                          style={{
                            width: 3.981,
                            height: 12.818,
                            flexShrink: 0,
                            position: 'relative',
                            zIndex: 20,
                          }}
                          source={require('./assets/images/a8afba21-afbc-4b9e-b794-ee80ca3758cb.png')}
                        />
                        <ImageBackground
                          style={{
                            width: 12.409,
                            height: 13.141,
                            flexShrink: 0,
                            position: 'relative',
                            zIndex: 19,
                          }}
                          source={require('./assets/images/7c1b5a23-5b69-412e-96c4-8468d96b95ba.png')}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <Text
                  style={{
                    display: 'flex',
                    height: '48.98%',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    fontFamily: 'Poppins',
                    fontSize: 16,
                    fontWeight: '500',
                    lineHeight: 24,
                    color: '#3c3c3c',
                    position: 'absolute',
                    top: '26.53%',
                    left: '25.44%',
                    textAlign: 'left',
                    zIndex: 15,
                  }}
                  numberOfLines={1}
                >
                  /davidheree222
                </Text>
              </View>
              <View
                style={{
                  width: 283,
                  height: 49,
                  backgroundColor: '#fbfbfb',
                  borderTopLeftRadius: 18,
                  borderTopRightRadius: 18,
                  borderBottomRightRadius: 18,
                  borderBottomLeftRadius: 18,
                  position: 'relative',
                  zIndex: 23,
                  marginTop: 23,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 28,
                }}
              >
                <View
                  style={{
                    width: '17.31%',
                    height: '100%',
                    backgroundColor: '#ff0000',
                    borderTopLeftRadius: 18,
                    borderTopRightRadius: 18,
                    borderBottomRightRadius: 18,
                    borderBottomLeftRadius: 18,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 25,
                  }}
                >
                  <View
                    style={{
                      width: 24,
                      height: 24,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 26,
                      marginTop: 12,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 13,
                    }}
                  >
                    <View
                      style={{
                        width: 19.2,
                        height: 13.723,
                        position: 'relative',
                        zIndex: 27,
                        marginTop: 5.139,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 2.4,
                      }}
                    >
                      <ImageBackground
                        style={{
                          width: '100%',
                          height: '100%',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          zIndex: 28,
                        }}
                        source={require('./assets/images/6c709013-1c0b-4704-a7c1-e9ee8e734da4.png')}
                      />
                    </View>
                  </View>
                </View>
                <Text
                  style={{
                    display: 'flex',
                    height: '48.98%',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    fontFamily: 'Poppins',
                    fontSize: 16,
                    fontWeight: '500',
                    lineHeight: 24,
                    color: '#3c3c3c',
                    position: 'absolute',
                    top: '26.53%',
                    left: '25.44%',
                    textAlign: 'left',
                    zIndex: 24,
                  }}
                  numberOfLines={1}
                >
                  /davidhereechan
                </Text>
              </View>
              <ImageBackground
                style={{
                  width: '7.08%',
                  height: '6.35%',
                  position: 'absolute',
                  top: '7.94%',
                  left: '84.07%',
                  overflow: 'hidden',
                  zIndex: 5,
                }}
                source={require('./assets/images/5484dc65-f869-40a0-9de6-340acd7bab34.png')}
              />
              <Text
                style={{
                  display: 'flex',
                  height: '7.94%',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  fontFamily: 'Poppins',
                  fontSize: 20,
                  fontWeight: '500',
                  lineHeight: 30,
                  color: '#000000',
                  position: 'absolute',
                  top: '7.94%',
                  left: '8.85%',
                  textAlign: 'left',
                  zIndex: 4,
                }}
                numberOfLines={1}
              >
                Portfolios
              </Text>
            </View>
            <View
              style={{
                width: 376,
                height: 79,
                position: 'relative',
                zIndex: 176,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 13,
              }}
            >
              <View
                style={{
                  width: '99.73%',
                  height: '89.87%',
                  backgroundColor: '#ffffff',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 176,
                }}
              >
                <View
                  style={{
                    width: '25.07%',
                    height: '100%',
                    backgroundColor: '#ffffff',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 178,
                  }}
                >
                  <View
                    style={{
                      width: 24,
                      height: 24,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 180,
                      marginTop: 16,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 32,
                    }}
                  >
                    <ImageBackground
                      style={{
                        width: 18,
                        height: 12,
                        position: 'relative',
                        zIndex: 181,
                        marginTop: 6,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 3,
                      }}
                      source={require('./assets/images/45054821-927b-41b1-9bbb-d04149df395a.png')}
                    />
                  </View>
                  <Text
                    style={{
                      display: 'flex',
                      width: 34,
                      height: 18,
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      fontFamily: 'Poppins',
                      fontSize: 12,
                      fontWeight: '400',
                      lineHeight: 18,
                      color: '#adadad',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 179,
                      marginTop: 8,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 30,
                    }}
                    numberOfLines={1}
                  >
                    Menu
                  </Text>
                </View>
                <View
                  style={{
                    width: '25.07%',
                    height: '100%',
                    fontSize: 0,
                    backgroundColor: '#ffffff',
                    position: 'absolute',
                    top: 0,
                    left: '25.07%',
                    zIndex: 183,
                  }}
                >
                  <Text
                    style={{
                      display: 'flex',
                      width: 61,
                      height: 18,
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      fontFamily: 'Poppins',
                      fontSize: 12,
                      fontWeight: '400',
                      lineHeight: 18,
                      color: '#adadad',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 191,
                      marginTop: 48,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 17,
                    }}
                    numberOfLines={1}
                  >
                    Messages
                  </Text>
                  <ImageBackground
                    style={{
                      width: '20.4%',
                      height: '27.01%',
                      position: 'absolute',
                      top: '9.86%',
                      left: '47.87%',
                      zIndex: 189,
                    }}
                    source={require('./assets/images/7b402641-dfcb-40c5-8397-33b3188563b9.png')}
                  />
                  <View
                    style={{
                      width: '43.95%',
                      height: '58.19%',
                      fontSize: 0,
                      backgroundColor: '#ffffff',
                      borderTopLeftRadius: 49,
                      borderTopRightRadius: 49,
                      borderBottomRightRadius: 49,
                      borderBottomLeftRadius: 49,
                      position: 'absolute',
                      top: '14.98%',
                      left: '23.4%',
                      zIndex: 185,
                    }}
                  >
                    <Text
                      style={{
                        height: 14,
                        fontFamily: 'Poppins',
                        fontSize: 9,
                        fontWeight: '600',
                        lineHeight: 13.5,
                        color: '#ffffff',
                        position: 'relative',
                        textAlign: 'left',
                        zIndex: 190,
                        marginTop: -0.64,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 28,
                      }}
                      numberOfLines={1}
                    >
                      18
                    </Text>
                    <View
                      style={{
                        width: 20.656,
                        height: 20.656,
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 186,
                        marginTop: -3.033,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 10.328,
                      }}
                    >
                      <ImageBackground
                        style={{
                          width: 20.656,
                          height: 20.655,
                          position: 'relative',
                          zIndex: 187,
                          marginTop: 0,
                          marginRight: 0,
                          marginBottom: 0,
                          marginLeft: 0,
                        }}
                        source={require('./assets/images/d8ba111c-0177-4443-8f73-850ebac87f06.png')}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: '25.07%',
                    height: '100%',
                    backgroundColor: '#ffffff',
                    position: 'absolute',
                    top: 0,
                    left: '74.93%',
                    zIndex: 193,
                  }}
                >
                  <View
                    style={{
                      width: 28,
                      height: 28.793,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 196,
                      marginTop: 10.15,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 33,
                    }}
                  >
                    <View
                      style={{
                        width: '78.74%',
                        height: '81.22%',
                        position: 'absolute',
                        top: '9.38%',
                        left: '10.63%',
                        zIndex: 197,
                      }}
                    >
                      <View
                        style={{
                          width: 11.281,
                          height: 11.608,
                          position: 'relative',
                          zIndex: 210,
                          marginTop: 0,
                          marginRight: 0,
                          marginBottom: 0,
                          marginLeft: 5.391,
                        }}
                      >
                        <View
                          style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 211,
                          }}
                        >
                          <ImageBackground
                            style={{
                              width: '100%',
                              height: '100%',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              zIndex: 212,
                            }}
                            source={require('./assets/images/4108143d-bdb7-4f69-b745-77af65781741.png')}
                          />
                        </View>
                      </View>
                      <View
                        style={{
                          width: 22.046,
                          height: 10.715,
                          position: 'relative',
                          zIndex: 201,
                          marginTop: -1.845,
                          marginRight: 0,
                          marginBottom: 0,
                          marginLeft: 0,
                        }}
                      >
                        <View
                          style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 202,
                          }}
                        >
                          <ImageBackground
                            style={{
                              width: '100%',
                              height: '100%',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              zIndex: 203,
                            }}
                            source={require('./assets/images/cd028271-6a67-47f6-ad30-677f480a3cd0.png')}
                          />
                        </View>
                      </View>
                      <View
                        style={{
                          width: 20.775,
                          height: 3.765,
                          position: 'relative',
                          zIndex: 204,
                          marginTop: -0.86,
                          marginRight: 0,
                          marginBottom: 0,
                          marginLeft: 0.64,
                        }}
                      >
                        <View
                          style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 205,
                          }}
                        >
                          <ImageBackground
                            style={{
                              width: '100%',
                              height: '100%',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              zIndex: 206,
                            }}
                            source={require('./assets/images/08607a75-affc-4e72-aaf8-b1f4ec806ffe.png')}
                          />
                        </View>
                      </View>
                      <View
                        style={{
                          width: '10.83%',
                          height: '11.73%',
                          position: 'absolute',
                          top: '79.87%',
                          left: 0,
                          zIndex: 198,
                        }}
                      >
                        <View
                          style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 199,
                          }}
                        >
                          <ImageBackground
                            style={{
                              width: '100%',
                              height: '100%',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              zIndex: 200,
                            }}
                            source={require('./assets/images/ae67008e-4e3d-4b1d-9414-12fecfe36223.png')}
                          />
                        </View>
                      </View>
                      <View
                        style={{
                          width: '10.83%',
                          height: '11.72%',
                          position: 'absolute',
                          top: '79.88%',
                          left: '89.17%',
                          zIndex: 207,
                        }}
                      >
                        <View
                          style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 208,
                          }}
                        >
                          <ImageBackground
                            style={{
                              width: '100%',
                              height: '100%',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              zIndex: 209,
                            }}
                            source={require('./assets/images/4883147e-3f93-4450-b3df-4979234d0d94.png')}
                          />
                        </View>
                      </View>
                    </View>
                    <ImageBackground
                      style={{
                        width: '25%',
                        height: '24.31%',
                        position: 'absolute',
                        top: '27.26%',
                        left: '78.57%',
                        zIndex: 195,
                      }}
                      source={require('./assets/images/622ac4c3-456d-4cf5-b948-9996e23ea7fb.png')}
                    />
                  </View>
                  <Text
                    style={{
                      display: 'flex',
                      width: 65,
                      height: 18,
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      fontFamily: 'Poppins',
                      fontSize: 12,
                      fontWeight: '400',
                      lineHeight: 18,
                      color: '#adadad',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 194,
                      marginTop: 9.057,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 14,
                    }}
                    numberOfLines={1}
                  >
                    Israël SILUE&nbsp;
                  </Text>
                </View>
                <View
                  style={{
                    width: '25.07%',
                    height: '100%',
                    backgroundColor: '#ffffff',
                    position: 'absolute',
                    top: 0,
                    left: '49.6%',
                    zIndex: 214,
                  }}
                >
                  <View
                    style={{
                      width: 41.902,
                      height: 44.754,
                      position: 'relative',
                      zIndex: 225,
                      marginTop: 10,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 27,
                    }}
                  >
                    <ImageBackground
                      style={{
                        width: '42.72%',
                        height: '40%',
                        position: 'absolute',
                        top: 0,
                        left: '57.28%',
                        zIndex: 224,
                      }}
                      source={require('./assets/images/05c7289e-b2f3-4999-bcd5-2580a2d84a95.png')}
                    />
                    <Text
                      style={{
                        display: 'flex',
                        height: '31.28%',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        fontFamily: 'Poppins',
                        fontSize: 9,
                        fontWeight: '600',
                        lineHeight: 13.5,
                        color: '#ffffff',
                        position: 'absolute',
                        top: '4.62%',
                        left: '66.82%',
                        textAlign: 'left',
                        zIndex: 225,
                      }}
                      numberOfLines={1}
                    >
                      52
                    </Text>
                    <View
                      style={{
                        width: '92.02%',
                        height: '86.15%',
                        backgroundColor: '#ffffff',
                        borderTopLeftRadius: 49,
                        borderTopRightRadius: 49,
                        borderBottomRightRadius: 49,
                        borderBottomLeftRadius: 49,
                        position: 'absolute',
                        top: '13.85%',
                        left: 0,
                        zIndex: 216,
                      }}
                    >
                      <View
                        style={{
                          width: 19.279,
                          height: 19.279,
                          position: 'relative',
                          overflow: 'hidden',
                          zIndex: 217,
                          marginTop: 9.64,
                          marginRight: 0,
                          marginBottom: 0,
                          marginLeft: 9.639,
                        }}
                      >
                        <View
                          style={{
                            width: 17.723,
                            height: 19.279,
                            position: 'relative',
                            zIndex: 218,
                            marginTop: 0,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 0.78,
                          }}
                        >
                          <View
                            style={{
                              width: '100%',
                              height: '100%',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              zIndex: 219,
                            }}
                          >
                            <View
                              style={{
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                zIndex: 220,
                              }}
                            >
                              <ImageBackground
                                style={{
                                  width: 17.723,
                                  height: 16.965,
                                  position: 'relative',
                                  zIndex: 222,
                                  marginTop: 0,
                                  marginRight: 0,
                                  marginBottom: 0,
                                  marginLeft: 0,
                                }}
                                source={require('./assets/images/05f4293d-d7ed-4b65-8ded-754e4e5c67c6.png')}
                              />
                              <ImageBackground
                                style={{
                                  width: 4.886,
                                  height: 1.606,
                                  position: 'relative',
                                  zIndex: 221,
                                  marginTop: 0.71,
                                  marginRight: 0,
                                  marginBottom: 0,
                                  marginLeft: 6.418,
                                }}
                                source={require('./assets/images/a12ed617-6839-437a-9376-362364ff1595.png')}
                              />
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <Text
                    style={{
                      display: 'flex',
                      width: 75,
                      height: 18,
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      fontFamily: 'Poppins',
                      fontSize: 12,
                      fontWeight: '400',
                      lineHeight: 18,
                      color: '#adadad',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 226,
                      marginTop: -6.754,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 10,
                    }}
                    numberOfLines={1}
                  >
                    Notifications
                  </Text>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: '2.82%',
                    backgroundColor: '#f9f9f9',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 227,
                  }}
                />
              </View>
              <ImageBackground
                style={{
                  width: 375,
                  height: 32,
                  position: 'absolute',
                  top: 47,
                  left: 1,
                  zIndex: 173,
                }}
                source={require('./assets/images/1322b289-07a5-494a-b19a-2127d7a741e4.png')}
                resizeMode='cover'
              />
            </View>
          </View>
          <ImageBackground
            style={{
              width: 375,
              height: 227,
              position: 'absolute',
              top: 0,
              left: '50%',
              zIndex: 103,
              transform: [{ translateY: 0 }, { translateX: -187.5 }],
            }}
            source={require('./assets/images/d19f9d39-719b-4285-b4fe-f997131392f3.png')}
            resizeMode='cover'
          />
          <ImageBackground
            style={{
              width: '100%',
              height: '1.04%',
              position: 'absolute',
              top: '98.96%',
              left: '-0.27%',
              zIndex: 229,
            }}
            source={require('./assets/images/6d700b98-3220-4628-b0ca-5bb01d88bae6.png')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
