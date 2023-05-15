import { ActivityIndicator, View } from "react-native";

export function Loading(){
    return (
        <View style={{ flex: 1, 
            alignItems: 'center', 
            justifyContent: 'center', 
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 999 
        }}>
            <ActivityIndicator color="#fefefe" />
        </View>
    );
}