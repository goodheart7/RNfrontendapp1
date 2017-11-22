import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

import styles from './styles';
import images from '../../image';

import ForyouScreen from '../Foryou';
import MealplanScreen from '../Mealplan';
import GrocerylistScreen from '../Grocerylist';
import ChatScreen from '../Chat';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Foryou'
        }
    }

    selectTap = (name) => {
        this.setState({
            selectedTab: name
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1}}>
                    { this.state.selectedTab == 'Foryou' &&
                        <ForyouScreen />
                    }
                    { this.state.selectedTab == 'Mealplan' &&
                        <MealplanScreen />
                    }
                    { this.state.selectedTab == 'Grocerylist' &&
                        <GrocerylistScreen />
                    }
                    { this.state.selectedTab == 'Chat' &&
                        <ChatScreen />
                    }                   
                </View>
                <View style={styles.footer}>
                    <View style={styles.line}>
                    </View>
                    <View style={styles.icon}>
                            
                            <TouchableOpacity onPress={() => this.selectTap("Foryou")}>
                                {this.state.selectedTab == 'Foryou' ? <Image source={images.Foryou_selected} style={styles.foryou_icon}/> : <Image source={images.Foryou_unselected} style={styles.foryou_icon}/>}
                            </TouchableOpacity>
                            
                      
                        
                            <TouchableOpacity onPress={() => this.selectTap("Mealplan")}>
                                {this.state.selectedTab == 'Mealplan' ? <Image source={images.Mealplan_selected} style={styles.mealplan_icon}/> : <Image source={images.Mealplan_unselected} style={styles.mealplan_icon}/>}
                            </TouchableOpacity>
                            
                       
                        <View>
                            <TouchableOpacity onPress={() => this.selectTap("Grocerylist")}>
                                {this.state.selectedTab == 'Grocerylist' ? <Image source={images.Grocerylist_selected} style={styles.grocerylist_icon}/> : <Image source={images.Grocerylist_unselected} style={styles.grocerylist_icon}/>}
                            </TouchableOpacity>
                            
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => this.selectTap("Chat")}>
                                {this.state.selectedTab == 'Chat' ? <Image source={images.Chat_selected} style={styles.chat_icon}/> : <Image source={images.Chat_unselected} style={styles.chat_icon}/>}
                            </TouchableOpacity>
                            
                        </View>
                       
                    </View>
                    
                </View> 
            </View>
    
        );
  }
}
