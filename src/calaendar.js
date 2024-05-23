import React, { useState, useEffect } from 'react';

const Calendar = () => {
  // State to manage current date, selected date, and current month
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [holidays, setHolidays] = useState([]);

  // Function to get holidays data (You can replace it with your data fetching logic)
  const fetchHolidaysData = async () => {
    // Fetch holiday data from API or local JSON file
    // Example: const response = await fetch('https://api.example.com/holidays');
    // const data = await response.json();
    // For demo, I'm using hardcoded data
    const data = [
      { date: '2024-05-01', name: 'Labour Day' },
      { date: '2024-05-10', name: 'Mother\'s Day' }
      // Add more holidays here
    ];
    return data;
  };

  // Function to check if a given date is a holiday
  const isHoliday = (date) => {
    // Logic to check if 'date' is a holiday
    // You can modify this based on your holiday data format
    return holidays.some(holiday => holiday.date === date.toISOString().split('T')[0]);
  };

  // Function to get the number of days in a month
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  // Function to render calendar grid
  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    const weeks = [];
    let currentWeek = [];

    // Push weekday names
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const weekdayCells = weekdays.map((weekday, index) => (
      <div key={index} style={styles.calendarWeekday}>
        {weekday}
      </div>
    ));
    weeks.push(<div key="weekdays" style={styles.calendarWeek}>{weekdayCells}</div>);

    // Push days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const isHolidayDay = isHoliday(date);
      const isSunday = date.getDay() === 0;
      const isToday = isSameDay(date, new Date());

      currentWeek.push(
        <div
          key={day}
          style={{
            ...styles.calendarDay,
            ...(isHolidayDay ? styles.holiday : {}),
            ...(selectedDate && date.toDateString() === selectedDate.toDateString() ? styles.selected : {}),
            ...(isSunday ? styles.sunday : {}),
            ...(isToday ? styles.today : {})
          }}
          onClick={() => setSelectedDate(date)}
        >
          <div>{day}</div>
          <div style={styles.dateText}>{date.toLocaleDateString('en-US', { weekday: 'short' })}</div>
          <div style={styles.dateText}>{date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
          {isToday && <div style={styles.todayIndicator}></div>}
        </div>
      );

      // If it's the last day of the week or the last day of the month, push the week and start a new one
      if (date.getDay() === 6 || day === daysInMonth) {
        weeks.push(
          <div key={`week-${day}`} style={styles.calendarWeek}>
            {currentWeek}
          </div>
        );
        currentWeek = [];
      }
    }

    return <div style={styles.calendarGrid}>{weeks}</div>;
  };

  // Function to compare if two dates are the same day
  const isSameDay = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  // Function to go to the previous month
  const goToPrevMonth = () => {
    setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
  };

  // Function to go to the next month
  const goToNextMonth = () => {
    setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
  };

  // Fetch holidays data on component mount
  useEffect(() => {
    fetchHolidaysData().then(data => setHolidays(data));
  }, []);

  return (
    <div>
      <h2>Calendar</h2>
      <div style={styles.calendar}>
        <div style={styles.navigation}>
          <button onClick={goToPrevMonth}>Previous Month</button>
          <div>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</div>
          <button onClick={goToNextMonth}>Next Month</button>
        </div>
        {renderCalendar()}
      </div>
    </div>
  );
};

const styles = {
  calendar: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    overflow: 'hidden',
    width: '300px' // Adjust width as needed
  },
  navigation: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px'
  },
  calendarGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gridGap: '1px'
  },
  calendarWeek: {
    display: 'flex'
  },
  calendarWeekday: {
    textAlign: 'center',
    padding: '8px',
    border: '1px solid #ccc',
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold'
  },
  calendarDay: {
    textAlign: 'center',
    padding: '8px',
    border: '1px solid #ccc',
    cursor: 'pointer',
    position: 'relative' // Position relative for absolute positioning of the date text
  },
  holiday: {
    backgroundColor: '#ffc107'
  },
  selected: {
    backgroundColor: '#007bff',
    color: '#fff'
  },
  sunday: {
    backgroundColor: '#ffcccc'
  },
  today: {
    backgroundColor: '#b3e0ff' // Background color for today's date
  },
  todayIndicator: {
    position: 'absolute',
    bottom: '-3px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#007bff'
  },
  dateText: {
    fontSize: '12px',
    color: '#888',
    position: 'absolute',
    bottom: '3px', // Adjust positioning as needed
    left: '50%', // Center the text
    transform: 'translateX(-50%)' // Center the text
  }
};

export default Calendar;
