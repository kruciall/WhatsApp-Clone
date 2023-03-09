import { Text, View, Image, StyleSheet } from 'react-native';
import React, { Component } from 'react';

export class ChatListItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* Image  */}
        <Image style={styles.image}   source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg",
        }} />

        {/* Content Container */}
        <View style={styles.content}>
          <View style={styles.row}>
            <Text style={styles.name}>Vinson</Text>
            <Text style={styles.subTitle}>06:30</Text>
          </View>
          <Text style={styles.subTitle}>Did you get my resume?</Text>
        </View>
      </View>
    );
  }
}

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

