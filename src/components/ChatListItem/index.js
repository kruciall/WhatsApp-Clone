import { Text, View, Image, StyleSheet } from 'react-native';
import React from 'react';

const ChatListItem = ({ chat }) => {
  return (
    <View style={styles.container}>
      {/* Image  */}
      <Image style={styles.image} source={{
        uri: chat.user.image,
      }} />

      {/* Content Container */}
      <View style={styles.content}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>{chat.user.name}</Text>
          <Text style={styles.subTitle}>{chat.lastMessage.createdAt}</Text>
        </View>
        <Text numberOfLines={2} style={styles.subTitle}>{chat.lastMessage.text}</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
  },
  image: {
    width: 60,
    borderRadius: 30,
    aspectRatio: 1,
    marginRight: 10,
  },
  content: {
    flex: 1,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
    flex: 1,
  },
  subTitle: {
    color: 'grey',
  },

});


export default ChatListItem;

