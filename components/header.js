import { View, Text } from 'react-native'
import React from 'react'
import { HeaderButton, HeaderTitle, HeaderView, colors } from '../Styles'
import { Entypo } from "@expo/vector-icons"
const Header = ({handleallclear}) => {
    return (
        <HeaderView>
            <HeaderTitle> Todos </HeaderTitle>
            <HeaderButton>
                <Entypo name='trash' onPress={handleallclear} size={30} color={colors.tertiary} />
            </HeaderButton>
        </HeaderView>
    )
}

export default Header