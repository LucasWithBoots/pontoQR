import {Text, View} from "react-native";

export default function Header({title, subtitle, height}: { title: string, subtitle?: string, height: number }) {
    return (
        <View className="bg-ebony flex-col justify-end rounded-2xl pb-7 pl-7" style={{height: height}}>
            <Text className="text-white text-4xl" style={{fontFamily: 'SpaceGrotesk-Bold'}}>{title}</Text>
            {subtitle ? (<Text className="text-white/50 text-base"
                               style={{fontFamily: 'SpaceGrotesk-Light'}}>{subtitle}</Text>) : null}
        </View>
    )
}

// const styles = StyleSheet.create({
//     container: {
//         height: 230,
//     },
// });