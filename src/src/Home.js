import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";

const Home = ({navigation }) => {
  const [day, setDay] = useState(0);
  const [month, setMoth] = useState(0);

  useEffect(() => {
    const currentDate = new Date();
    const Day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const getMothInWords = () => {
      switch (month) {
        case 1:
          return "Jan";
        case 2:
          return "Feb";
        case 3:
          return "Mar";
        case 4:
          return "Apr";
        case 5:
          return "May";
        case 6:
          return "Jun";
        case 7:
          return "Jul";
        case 8:
          return "Aug";
        case 9:
          return "Sept";
        case 10:
          return "Oct";
        case 11:
          return "Nov";
        case 12:
          return "Dec";
        default:
          return "Invalid month number";
      }
    };
    setDay(Day);
    setMoth(getMothInWords());
  }, []);

  const handleButton = () => {};
  return (
    <ImageBackground
      source={require("../../assets/de7f4e74f899b2a48adb1a1e2cd2b9a8.jpg")}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <View>
        <View style={styles.dateContainer}>
          <Text style={styles.day}>{day}</Text>
          <Text style={styles.month}>{month}</Text>
        </View>
  
        <View style={styles.toDoList}>
          <ScrollView>

          </ScrollView>
        </View>
      <TouchableOpacity onPress={()=>navigation.navigate("TodoCreate")}
      style={styles.bNav}
      >
        <Text style={styles.nav}>Add Task</Text>
      </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  dateContainer: {
    flexDirection: "column",
  },
  day: {
    fontSize: 100,
    fontWeight: "bold",
    marginLeft: 20,
    color:"#E8E8E8"
  },
  month: {
    fontSize: 100,
    fontWeight: "bold",
    marginLeft: 20,
    top: -40,
    color:"#E8E8E8"
  },
  toDoList: {
    height:320,
    backgroundColor:"#8394F5",
    marginHorizontal:30,
  },
  imageBackground: {
    flex: 1,
  },
  buttonNavigate:{
    fontSize:40,
    height:200,
  },
  nav:{
    fontSize:40,
    fontWeight:"bold",
    backgroundColor:"#DCB34D",
    color:"#8394F5",
    
  },
  bNav:{
    
    justifyContent:"center",
    alignItems:"center"
  }
});

export default Home;


//8394F5