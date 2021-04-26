import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Svg, { Rect } from 'react-native-svg';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
        const saveSvgValues = async () => {
            await AsyncStorage.setItem(
                'svgValues',
                JSON.stringify({
                    text1: text1,
                    text2: text2,
                    text3: text3,
                    text4: text4,
                }),
            );
        }

        const getSvgValues = async () => {
            const data = await AsyncStorage.getItem('svgValues')
            const parsedData = JSON.parse(data.houseData);
            const { text1, text2, text3, text4 } = parsedData;
            console.log(text1, text2, text3, text4);
        }
    
        const Separator = () => (
            <View style={styles.separator} />
          );
    
        const [text1, setText1] = useState();
        const [text2, setText2] = useState();
        const [text3, setText3] = useState();
        const [text4, setText4] = useState();
    
        return (
            <ScrollView style={styles.contentContainer}>
                <View style={styles.viewContainer}>
                    <Text style={styles.heading}>Create SVGs</Text>
                    <View styles={styles.container}>
                        <View styles={styles.container1}>
                            <Svg height="50%" width="50%" viewBox="-10 -10 8000 8000">
                                <Rect
                                    x={text1}
                                    y={text2}
                                    width={text3}
                                    height={text4}
                                    stroke="red"
                                    strokeWidth="100"
                                // fill="yellow"
                                />
                            </Svg>
                        </View>
                    </View>
                    <Separator />
                    <View styles={styles.container}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter the position x"
                            onChangeText={text1 => setText1(text1)}
                            value={text1}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter the position y"
                            onChangeText={text2 => setText2(text2)}
                            value={text2}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter the height"
                            onChangeText={text3 => setText3(text3)}
                            value={text3}
    
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter the width"
                            onChangeText={text4 => setText4(text4)}
                            value={text4}
    
                        />
                        <TouchableOpacity onPress={saveSvgValues} style={styles.appButtonContainer}>
                            <Text style={styles.appButtonText}>Click to save!</Text>
                        </TouchableOpacity>
    
                        <TouchableOpacity onPress={getSvgValues} style={styles.appButtonContainer2}>
                            <Text style={styles.appButtonText}>See saved dimensions</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
    );
  };


  const savedScreen = ({ navigation, route }) => {
    return <Text>This is {route.params.name}'s profile</Text>;
  };

export default function Main() {
    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Create SVG' }}
          />
          <Stack.Screen name="savedScreen" component={savedScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

const styles = StyleSheet.create({
    contentContainer:{
        backgroundColor: "aliceblue",
    },
   
    // SVGcontainer: {
    //     borderColor: "black",
    //     borderWidth: 1,
    //     backgroundColor: "white"
    // },
    input: {
        height: 30,
        margin: 12,
        borderWidth: 1,
        marginHorizontal: 110
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginHorizontal: 120
    },
    appButtonContainer2: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginHorizontal: 120,
        marginTop:10
    },
    appButtonText: {
        fontSize: 13,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    heading: {
        fontSize: 25,
        color: "black",
        fontFamily: "Cochin",
        margin: 20,
        marginHorizontal: 110,
        borderRadius: 10,
        padding: 12,
        borderWidth: 2,
        borderColor: "black",
    },
    separator: {
        marginVertical: 4,
        marginHorizontal:60,
        borderBottomColor: '#737373',
        borderBottomWidth: 1.5,
      },
})
