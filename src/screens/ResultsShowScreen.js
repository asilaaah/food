import React, { useEffect, useState }  from 'react';
import { View, Text, StyleSheet, Image, FlatList} from 'react-native';
import ResultsList from '../components/ResultsList';
import yelp from '../api/yelp';

const ResultsShowScreen = (props) => {
const [result, setResult] = useState(null);
const id = props.navigation.getParam('id');

const getResult = async id =>{
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
};

useEffect(() => {
    getResult(id);
},[]);

if(!result){
    return null;
}

    return <View>
        <Text>{result.name}</Text>
        <FlatList
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem = { ({item}) => {
                return <Image style={styles.ImageStyle} source={{uri: item}}/>
            }}
        />
    </View>
};

const styles = StyleSheet.create({
    ImageStyle: {
        width: 300,
        height: 180
    }
});

export default ResultsShowScreen;