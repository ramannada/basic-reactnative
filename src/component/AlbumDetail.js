import React from 'react';
import {StyleSheet, View,Text,Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

export default class AlbumDetail extends React.Component {
    render() {
        return(
            <Card>
                <CardSection style={styles.CardSection}>
                    <View>
                        
                    </View>
                    
                    <View style={styles.textContainer}>
                        <Text>{this.props.album.title}</Text>
                        <Text>{this.props.album.artist}</Text>
                    </View>
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    cardSection: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    }
});