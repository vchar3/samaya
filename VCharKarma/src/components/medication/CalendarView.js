import React, {Component}  from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import moment from 'moment';

const CalendarView = ({self }) => {

      return (
          <View style={styles.container}>
              {/* <Calendar
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
              /> */}
<Agenda
  // the list of items that have to be displayed in agenda. If you want to render item as empty date
  // the value of date key kas to be an empty array []. If there exists no value for date key it is
  // considered that the date in question is not yet loaded
  items={
    {'2019-01-09': [{text: 'item 1 - any js object'}],
     '2019-01-10': [{text: 'item 2 - any js object'}],
     '2019-01-24': [],
     '2019-01-08': [{text: 'item 3 - any js object'},{text: 'any js object'}],
    }}
  // callback that gets called when items for a certain month should be loaded (month became visible)
  loadItemsForMonth={(month) => {
      self.renderDates(month)
      console.log(month)
    }}
  // callback that fires when the calendar is opened or closed
  //onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
  // callback that gets called on day press
 // onDayPress={(day)=>{console.log('day pressed')}}
  // callback that gets called when day changes while scrolling agenda list
  //onDayChange={(day)=>{console.log('day changed')}}
  // initially selected day
  //selected={'2019-01-08'}
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
  //minDate={'2019-01-01'}
  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
  //maxDate={'2019-05-30'}
  // Max amount of months allowed to scroll to the past. Default = 50
  //pastScrollRange={50}
  // Max amount of months allowed to scroll to the future. Default = 50
  //futureScrollRange={50}
  // specify how each item should be rendered in agenda
  renderItem={(item, firstItemInDay) => {return (
    
          <View style={styles.item}>
            <View><Text>{moment(item.day).format('HH:mm')}</Text></View>
            <View><Text>{item.text}</Text></View>
          </View>

    );}}
  // specify how each date should be rendered. day can be undefined if the item is not first in that day.
  renderDay={(day, item) => {return (<View />);}}
  // specify how empty date content with no items should be rendered
  renderEmptyDate={() => {return (<View style={styles.emptyDate} />);}}
  // specify how agenda knob should look like
  //renderKnob={() => {return (<View />);}}
  // specify what should be rendered instead of ActivityIndicator
  renderEmptyData = {() => {return (<View />);}}
  // specify your item comparison function for increased performance
  rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
  // Hide knob button. Default = false
  //hideKnob={true}
  // By default, agenda dates are marked if they have at least one item, but you can override this if needed
//   markedDates={{
//     '2019-01-08': {selected: true, marked: true},
//     '2019-01-10': {marked: true},
//     '2019-02-18': {disabled: true}
//   }}
  // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.
  onRefresh={() => console.log('refreshing...')}
  // Set this true while waiting for new data from a refresh
  //refreshing={false}
  // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView.
  refreshControl={null}
  // agenda theme
//   theme={{
//     agendaDayTextColor: 'yellow',
//     agendaDayNumColor: 'green',
//     agendaTodayColor: 'red',
//     agendaKnobColor: 'blue'
//   }}
  // agenda container style
  style={styles.calendarStyle}
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
      flex:1,    
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 15
  },
  calendarStyle: {
      width: 360, 
      borderWidth: 1,
      borderColor: 'gray'
  },
  itemsStyle: {
      width: 300,
      height: 70,
      marginTop: 15,
  },
  emptyDate: {
    marginTop: 20,
    marginRight: 10,
    borderTopWidth: 2,
    borderTopColor: '#dddddd',
    height: 5,
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },

};
