import React from "react"
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    FlatList,
    Image,
    TouchableOpacity,
} from "react-native"

function index({ indice }, props) {
    return (
        <View>
            {indice > 0 ? (
                <TouchableOpacity>
                    <Text>&larr; Page Precedente</Text>
                </TouchableOpacity>
            ) : null}
            <Text>{indice + 1}</Text>

            <TouchableOpacity /* onPress={() => handleAddTask()} */>
                <Text>Page Suivente &rarr;</Text>
            </TouchableOpacity>
        </View>
    )
}

export default index
