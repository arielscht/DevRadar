import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Profile({ route, navigation }) {
    const { github_username } = route.params;
    return (
        <WebView source={{ uri: `https://github.com/${github_username}` }} style={{ flex: 1 }}/>
    );
}