import { Image, ImageProps, Text, View} from 'react-native'
import { styles } from './styles'

const variants = {
    size: {
        medium: {width: 54, height: 54, borderRadius: 18},
        large: {width: 100, height: 100, borderRadius: 32},
    },
    text: {
        medium: {fontSize: 24},
        large: {fontSize: 52},
    }
}
type Props = {
    name: string
    image?: ImageProps | null
    variant?: "medium" | "large"
    containerStyle: StyleProp<ViewStyle>
}

export function Avatar({ image, name, variant="medium", containerStyle }: Props){
    return (
        <View style={containerStyle }>
            { image? (
                <Image source={image} style={variants.size[variant]} />
            ) : (
                <View style={[styles.letter, variants.size[variant]]}>
                    <Text style={[styles.text, variants.text[variant]]}>{name[0].toUpperCase()}</Text>
                </View>
            )}
    </View>
    )

}