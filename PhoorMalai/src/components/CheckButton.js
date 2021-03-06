import React from 'react';
import {Text,TouchableOpacity} from 'react-native';

const CheckButton = ({ onPress,children }) => {
    const {buttonStyles,textStyle}=styles;
    return(
        <TouchableOpacity onPress={onPress} style={buttonStyles}>
           <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
} 


const styles ={
    textStyle:{
        alignSelf:'center',
        color:'white',
        fontSize:20,
        fontWeight:'600'
              },
    buttonStyles:{
            backgroundColor:"#5EBE78",
             flex:1,
             height:40,
             marginTop:20,
             marginBottom:20,
             justifyContent:'center',
             alignItems:'center',
             borderRadius:5,
          }
}

export default CheckButton;
