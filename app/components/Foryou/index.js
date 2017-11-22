import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import images from '../../image';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles'

export default class Foryou extends Component {
    render() {
      return (
          <View style={styles.container}>
              <LinearGradient colors={['#fa3945', '#ff972b']} start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}} style={{flex: 1, flexDirection: 'row'}}>
                  <View style={styles.burgermenu}>
                      <Icon name='align-justify' style={{fontSize: 23, color: '#FFFFFF'}}/>
                  </View>
                  <View style={styles.title}>
                      <Text style={{textAlign: 'center', color: '#FFFFFF', fontSize: 15}}>Kitchry</Text>
                  </View>
                  <View style={styles.user}>
                      <Image source={images.user_icon} style={styles.usericon}/>
                  </View>
              
                
              </LinearGradient>
              <View style={{flex: 4}}>
                  <View style={{flex: 1}}>
                  </View>
                  <View style={{flex: 2}}>
                      <Text style={styles.textmeal}>Your next meal:</Text>
                      <Text style={styles.textspinace}>Lobster burger with spinace</Text>
                      
                      <View style={{flexDirection: 'row'}}>
                        <View style={{width: '95%'}}>   
                            <LinearGradient colors={['#fa3945', '#ff972b']} start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}} style={{marginLeft: 15, height: 1}}>
                            </LinearGradient>
                        </View>
                        <Image source={images.next} style={styles.imagenext}/>
                      </View>

                      <View style={styles.peoplemincal}>
                          <Image source={images.amountofpeople} style={styles.imagepeople}/>
                          <Text style={styles.textpeoplemincal}>2 people</Text>
                          <Image source={images.preparationtime} style={styles.imagemin}/>
                          <Text style={styles.textpeoplemincal}>25 min</Text>
                          <Image source={images.amountcalories} style={styles.imagecal}/>
                          <Text style={styles.textpeoplemincal}>410 Cal</Text>
                      </View>
                      
                  </View>
                  <View style={{flex: 1}}>
                  </View>
              </View>
              
              <View style={{flex: 5}}>
                  <View style={styles.newsfeed}>
                      <Text style={styles.textnewsfeed}>Newsfeed</Text>
                  </View>
                  <View style={{flex: 7, backgroundColor: '#EAEAEA'}}>
                      <View style={{flexDirection: 'row'}}>
                          <View style={{flexDirection: 'column'}}>
                                
                                <Image source={images.newsitem1} style={styles.imagenewsitem1}/>
                                
                                <View style={styles.description}>
                                  <Text style={styles.textdescription}>New study shows relevance</Text>
                                  <Text style={styles.textdescription}>between Sugar and happiness</Text>
                                </View>
                          </View>
                          <View style={{flexDirection: 'column'}}>
                                
                                <Image source={images.newsitem2} style={styles.imagenewsitem2}/>
                              
                                <View style={{backgroundColor: '#EAEAEA', paddingLeft: -5, marginTop: -25}}>
                                  <Text style={styles.textdescription}>Doctors see relation between</Text>
                                  <Text style={styles.textdescription}>good food and good behavior</Text>
                                </View>
                          </View>
                      </View>
                      <View style={{alignItems: 'center'}}>
                          <Image source={images.circles} style={styles.imagecircles}/>
                      </View>
                  </View>
              </View>
             
              <View style={{paddingLeft: 25, flex: 3}}>
                  <View style={{justifyContent: 'center', flex: 1}}>
                      <Text style={styles.textnewsfeed}>Goals</Text>
                  </View>
                  <View style={{paddingTop: 10, flex: 0.7}}>
                      <Text style={styles.textpeoplemincal}>Losing 25 pounds in 5 weeks</Text>
                  </View>
                  <View style={{flex: 1.3}}>
                      <View style={styles.progressbar}>
                          <View style={{flex: 1}}>
                              <LinearGradient colors={['#fa3945', '#ff972b']} start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}} style={styles.completeprogressbar}>
                              </LinearGradient>
                          </View>
                      </View>
                      
                      <Text style={styles.textprogressbar}>66% complete 5 days left</Text>
                      
                  </View>
                  
              </View>
            
          </View>
      )

        
        
    }

    
}
        
    