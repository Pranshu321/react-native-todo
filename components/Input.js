import { View, Text, Alert, Modal } from 'react-native'
import React from 'react'
import { ModalAction, ModalActionGroup, StyledInput, ModalButton, ModalIcon, ModalView, ModalContainer, colors, HeaderTitle } from '../Styles';
import { AntDesign } from '@expo/vector-icons'

const Input = ({ modalvisi, todos , settodotobeeddited , todotoedit , setmodalvisi, AddTodo ,todosInputVal, edit , setInputVal }) => {

    const handleCloseModal = () => {
        setmodalvisi(false);
        setInputVal("");
        settodotobeeddited(null);
    }

    const handleSubmit = () => {
     
       
        if(!todotoedit){
        AddTodo({
            title: todosInputVal,
            date: new Date().toUTCString(),
            key: `${(todos[todos.length-1] && parseInt(todos[todos.length-1].key)+1) || 1}`
        });
    }
    else{
        edit(
            {
                title: todosInputVal,
                date: todotoedit.date,
                key: todotoedit.key
            }
        )
    }

        setInputVal("");
    }

    return (
        <>
            <ModalButton onPress={() => { setmodalvisi(true) }} >
                <AntDesign name='plus' size={30} color={colors.secondary} />
            </ModalButton>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalvisi}
                onRequestClose={handleCloseModal}
            >
                <ModalContainer>
                    <ModalView>
                        <ModalIcon>
                            <HeaderTitle style={{marginBottom: 20}}>Add Your Way!!</HeaderTitle>
                            <AntDesign name='edit' size={30} color={colors.tertiary} />
                        </ModalIcon>
                        <StyledInput
                            placeholder="Add a todo"
                            placeholderTextColor={colors.alternative}
                            autoFocus={true}
                            selectionColor={colors.secondary}
                            onChangeText={(text) => { setInputVal(text) }}
                            value={todosInputVal}
                            onSubmitEditing={handleSubmit}
                        />
                        <ModalActionGroup>
                            <ModalAction color={colors.primary} onPress={handleCloseModal}>
                                <AntDesign name='close' size={28} color={colors.tertiary} />
                            </ModalAction>
                            <ModalAction color={colors.tertiary} onPress={handleSubmit}>
                                <AntDesign name='check' size={28} color={colors.secondary} />
                            </ModalAction>
                        </ModalActionGroup>
                    </ModalView>
                </ModalContainer>
            </Modal>
        </>
    )
}

export default Input