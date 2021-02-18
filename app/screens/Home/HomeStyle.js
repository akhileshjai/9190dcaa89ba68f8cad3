import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale , {verticalScale} from '../../utils/Scale';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
    },

    inputFormHeader: {
        marginTop: verticalScale(50),
    },

    inputStyle: {
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: verticalScale(20),
        color: '#ffffff',
        fontWeight: 'bold',
    },

    inputStyle1: {
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: verticalScale(22),
        fontWeight: 'bold',        
        borderWidth: scale(2), 
        borderColor:'white',

    },

    submitButton: {
        marginTop: verticalScale(50),
        alignSelf: 'center',
        width: scale(200),
        height: scale(50),
        borderRadius: scale(25),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#32a89e'
    },
    submit1:{
        fontWeight: 'bold',
    },

    submitText: {
        fontSize: scale(17),
        fontWeight: 'bold',
    },

    formText: {
        fontSize: scale(25),
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        marginVertical: scale(30),
    },

    search: {
        fontSize: scale(20),
        marginLeft: scale(20),
        marginVertical: scale(10),
        textAlign: 'left',
        fontWeight: 'bold',
    }
    
});
