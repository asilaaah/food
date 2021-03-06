import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange,onTermSubmit }) => {
    return <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle}/>
        <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)}
        onEndEditing={() => onTermSubmit() }
        />
    </View>
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#E5E5E5',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginVertical: 10

    },

    inputStyle:{
        flex: 1,
        fontSize: 18
    },

    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    }
});

export default SearchBar;