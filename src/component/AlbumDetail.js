import React from 'react';
import {StyleSheet, View,Text,Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

export default class AlbumDetail extends React.Component {
    render() {
        const {title, artist, thumbnail_image, image} = this.props.album;
        const {cardSectionStyle, thumbnailContainerStyle, thumbnailStyle, 
            textContainerStyle, headerTextStyle, albumImageStyle} = styles;

        return(
            <Card>
                <CardSection style={cardSectionStyle}>
                    <View style={thumbnailContainerStyle}>
                        <Image 
                            style = {thumbnailStyle}
                            source={{uri: thumbnail_image}}
                        />
                    </View>
                    
                    <View style={textContainerStyle}>
                        <Text style={headerTextStyle}>{title}</Text>
                        <Text>{artist}</Text>
                    </View>
                </CardSection>

                <CardSection>
                    <Image
                        style={albumImageStyle}
                        source={{uri: image}}
                    />
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    cardSectionStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    thumbnailStyle: {
        width: 50,
        height: 50,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10,
    },
    textContainerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 18,
    },
    albumImageStyle: {
        flex: 1,
        height: 300,
        width: null,
    }
});