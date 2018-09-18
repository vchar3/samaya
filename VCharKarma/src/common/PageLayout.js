import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';

const PageLayout = (props) => {
    return (
        <SafeAreaView style={styles.containerStyle}>
            {props.children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
      flex: 1,
      backgroundColor: '#f2f2f2'
    },
  });

export { PageLayout };