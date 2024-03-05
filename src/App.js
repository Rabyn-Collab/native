import { Fragment } from 'react'
import { View, Text, SafeAreaView, StatusBar, TextInput } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const App = () => {
  return (
    <Fragment>

      <StatusBar backgroundColor='#F6F6F6' barStyle='dark-content' />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#F6F6F6' }}>

        <View style={{ flex: 1, marginHorizontal: 22 }}>
          <Text style={{ fontSize: 20, marginVertical: 22, color: '#00A651', fontFamily: 'Poppins-900' }}>Creat An Account</Text>
          <View style={{ borderColor: '#CECECE', borderWidth: 1, paddingHorizontal: 16, paddingTop: 10, paddingBottom: 2, backgroundColor: 'white', borderRadius: 8 }}>

            <Text style={{ color: '#6B6B6B', fontFamily: 'Poppins-600' }}>Email</Text>


            <FontAwesome name="rocket" size={30} color="#900" />
            <TextInput placeholder='example@email.com' />
          </View>

        </View>



      </SafeAreaView>
    </Fragment>


  )
}
export default App