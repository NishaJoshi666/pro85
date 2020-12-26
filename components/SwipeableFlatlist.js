import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View,
} from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { SwipeListView } from 'react-native-swipe-list-view';
import db from '../config';

export default class SwipeableFlatlist extends Component{
    constructor(props) {
       super(props);
       this.state = {
         allNotifications : this.props.allNotifications,
       };
     }

onSwipValueChange=()=>{
    var allNotifications=this.state.allNotifications
    const {key,value}=swipeData
    if(value<Dimensions.get('window').width){
        const newdata = [...allNotifications]
        const preveIndex = allNotifications.findIndex(item=>item.key===key);
        this.updateMarkAsRead(allNotifications[preveIndex])
        newdata.splice(preveData,1)
        this.setState({
            allNotifications:newdata
        })
    }
}

updateMarkAsRead=(notifications)=>{
    db.collection('all_notifications').doc(notifications.doc_Id).update({
        notification_status:'read'
    })
}

renderItem=(data)=>{
    <ListItem 
    leftElement={<Icon name='book' type='font-awesome' color='blue'/>}
    title={data.item.book_name}
    titleStyle={{color:'black',fontWeight:'bold'}}
    subtitle={data.item.message}
    bottomDivider></ListItem>
}

renderHiddenItem=()=>{
    <View style={styles.rowBack}>
        <View style={[styles.backRightBtn,styles.backRightBtnRight]}></View>
        <Text style={styles.backTextWhite}></Text>
    </View>
}

render(){
    return (
        <View style={styles.container}>
            <SwipeListView
                data={this.state.allNotifications}
                renderItem={this.renderItem}
                renderHiddenItem={this.renderHiddenItem}
                leftOpenValue={75}
                rightOpenValue={-150}
                previewkey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}

            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnLeft: {
        backgroundColor: 'blue',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
    },
});
