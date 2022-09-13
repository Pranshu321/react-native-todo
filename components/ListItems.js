import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { ListView, ListContainer, ListViewHidden, TodoText, TodoDate, HiddenButton, colors, SwipedTodoText } from '../Styles';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Entypo } from '@expo/vector-icons';

const ListItems = ({ todos, settodos , edit }) => {
    const [swipedRow, setSwipeRow] = useState(null);

    const HandleDeleteTodo = (rowMap, rowKey) => {
        const newTodo = [...todos];
        const todoIndex = todos.findIndex((todo) => todo.key === rowKey);
        newTodo.splice(todoIndex, 1);
        settodos(newTodo);
    }

    return (
        <>
            {todos.length === 0 && <Text style={{fontSize: 25 , color: "white" , marginTop: 20 , textAlign: "center"}}>Plan your day !!!</Text>}
            {todos.length != 0 &&
                <SwipeListView
                    data={todos}
                    renderItem={(data) => {
                        const RowText = data.item.key == swipedRow ? SwipedTodoText : TodoText;
                        return (
                            <ListView
                                underlayColor={colors.primary}
                                onPress={() => {
                                   edit(data.item);
                                }}
                            >
                                <>
                                    <RowText>{data.item.title}</RowText>
                                    <TodoDate>{data.item.date}</TodoDate>
                                </>
                            </ListView>);
                    }}
                    renderHiddenItem={(data, rowMap) => (
                        <ListViewHidden>
                            <HiddenButton
                                onPress={() => HandleDeleteTodo(rowMap, data.item.key)}
                            >
                                <Entypo name='trash' size={25} color={colors.secondary} />
                            </HiddenButton>
                        </ListViewHidden>
                    )}
                    leftOpenValue={80}
                    previewRowKey={"1"}
                    previewOpenValue={80}
                    previewOpenDelay={3000}
                    disableLeftSwipe={true}
                    showsVerticalScrollIndicator={false}
                    style={{
                        flex: 1,
                        paddingBottom: 30,
                        marginBottom: 40
                    }}
                    onRowOpen={(rowkey) => {
                        setSwipeRow(rowkey);
                    }}
                    onRowClose={() => {
                        setSwipeRow(null)
                    }}
                />
            }
        </>
    )
}

export default ListItems