import { View } from "react-native";
import { Feather } from "@expo/vector-icons"
import { theme } from "@/theme"
import { styles } from "./styles";
import { Input }  from "@/app/components/input"

export function Home(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Input style={styles.input}>
                <Feather name="search" size={16} color={theme.colors.gray_300}></Feather>
                <Input.Field placeholder="Pesquisar pelo nome..."/>
                <Feather name="x" size={16} color={theme.colors.gray_300}></Feather>
                </Input>
            </View>
        </View>
    )
}