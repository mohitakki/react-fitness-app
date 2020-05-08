import React, {Component} from 'react';
import DatePicker from 'react-native-datepicker';

export default class MyDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {date: '2016-05-15'};
  }

  render() {
    return (
      <DatePicker
        style={{width: '100%'}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon={false}
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            width: '100%',
            borderWidth: 0,
            borderBottomWidth: 1,
            // flex:1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            // justifyContent:"flex-start"
          },
          // ... You can check the source to find the other keys.
        }}
        onDateChange={date => {
          this.setState({date: date});
        }}
      />
    );
  }
}
