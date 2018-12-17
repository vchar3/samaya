import React, {Component}  from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const CalendarView = ({self }) => {

      return (
          <View style={styles.container}>
              <Calendar
                  style={styles.calendarStyle}
                  // Initially visible month. Default = Date()
                  current={'2018-12-09'}
                  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                  // minDate={'2018-12-01'}
                  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                  // maxDate={'2018-12-15'}
                  // Handler which gets executed on day press. Default = undefined
                  onDayPress={(day) => {console.log('selected day', day)}}
                  // Handler which gets executed on day long press. Default = undefined
                  onDayLongPress={(day) => {console.log('selected day', day)}}
                  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                  monthFormat={'MMM d, yyyy'}
                  // Handler which gets executed when visible month changes in calendar. Default = undefined
                  onMonthChange={(month) => {console.log('month changed', month)}}
                  // Hide month navigation arrows. Default = false
                  // hideArrows={true}
                  // Replace default arrows with custom ones (direction can be 'left' or 'right')
                  // renderArrow={(direction) => (<Arrow />)}
                  // Do not show days of other months in month page. Default = false
                  hideExtraDays={true}
                  // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                  // day from another month that is visible in calendar page. Default = false
                  disableMonthChange={true}
                  // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                  firstDay={1}
                  // Hide day names. Default = false
                  hideDayNames={true}
                  // Show week numbers to the left. Default = false
                  showWeekNumbers={true}
                  // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                  onPressArrowLeft={substractMonth => substractMonth()}
                  // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                  onPressArrowRight={addMonth => addMonth()}
                  horizontal={true}
                  theme={{
                      backgroundColor: '#ffffff',
                      calendarBackground: '#ffffff',
                      textSectionTitleColor: '#b6c1cd',
                      selectedDayBackgroundColor: '#00adf5',
                      selectedDayTextColor: '#ffffff',
                      todayTextColor: '#00adf5',
                      dayTextColor: '#2d4150',
                      textDisabledColor: '#d9e1e8',
                      dotColor: '#00adf5',
                      selectedDotColor: '#ffffff',
                      arrowColor: 'orange',
                      monthTextColor: 'blue',
                      textMonthFontWeight: 'bold',
                      textDayFontSize: 16,
                      textMonthFontSize: 16,
                      textDayHeaderFontSize: 16
                    }}
              />
              <View style={styles.itemsStyle}> 
                  <Text style={styles.headerStyle}> Reminders </Text>
              </View>
          </View>
      );
}

export { CalendarView };

const styles = {
  container: {     
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 15
  },
  calendarStyle: {
      width: 300, 
      borderWidth: 1,
      borderColor: 'gray'
  },
  itemsStyle: {
      width: 300,
      height: 300,
      marginTop: 15,
  }
};
