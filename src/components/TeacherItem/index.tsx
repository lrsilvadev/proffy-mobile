import React from 'react';
import { View, Image, Text } from 'react-native';

import heartOutilineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://github.com/lrsilva81.png'}}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Leonardo Silva</Text>
                    <Text style={styles.subject}>Ciências da Computação</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Sint sint nostrud id dolor
                {'\n'}{'\n'}
                Voluptate tempor eiusmod dolore quis. Quis laborum ad labore ea laborum magna magna.
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutilineIcon} /> */}
                        <Image source={unfavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>   
    ) 
}

export default TeacherItem;