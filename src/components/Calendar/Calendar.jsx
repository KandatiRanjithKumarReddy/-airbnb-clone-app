import { useState } from 'react';
import './Calendar.css';
import { ChevronLeft, ChevronRight, Keyboard } from 'lucide-react';

const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function isSameDay(d1, d2) {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

function MonthView({ year, month, checkIn, checkOut }) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = new Date(year, month, 1).getDay();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const emptyCells = Array.from({ length: startDay }, (_, i) => (
    <div key={`empty-${i}`} className="calendar__day calendar__day--empty" />
  ));

  const dayCells = Array.from({ length: daysInMonth }, (_, index) => {
    const day = index + 1;
    const date = new Date(year, month, day);

    const isStart = isSameDay(date, checkIn);
    const isEnd = isSameDay(date, checkOut);
    const inRange = date > checkIn && date < checkOut;
    const isPast = date < today;

    const classNames = [
      'calendar__day',
      isStart && 'calendar__day--start',
      isEnd && 'calendar__day--end',
      inRange && 'calendar__day--in-range',
      isPast && !isStart && !isEnd && 'calendar__day--disabled',
    ].filter(Boolean).join(' ');

    return (
      <div key={day} className={classNames}>
        <span className="calendar__day-number">{day}</span>
      </div>
    );
  });

  return (
    <div className="calendar__month">
      <h3 className="calendar__month-title">
        {MONTH_NAMES[month]} {year}
      </h3>
      <div className="calendar__days-header">
        {WEEKDAYS.map((day, i) => (
          <div key={i} className="calendar__day-name">{day}</div>
        ))}
      </div>
      <div className="calendar__days-grid">
        {emptyCells}
        {dayCells}
      </div>
    </div>
  );
}

export default function Calendar({ checkIn, checkOut, location = 'Candolim' }) {
  const [currentDate, setCurrentDate] = useState(
    () => new Date(checkIn.getFullYear(), checkIn.getMonth(), 1)
  );

  const prevMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const firstYear = currentDate.getFullYear();
  const firstMonth = currentDate.getMonth();

  const secondDate = new Date(firstYear, firstMonth + 1, 1);
  const secondYear = secondDate.getFullYear();
  const secondMonth = secondDate.getMonth();

  const nights = Math.max(
    0,
    Math.round((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))
  );

  const formatDate = (date) =>
    date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

  return (
    <section className="calendar-section">
      <hr className="divider" />
      <h2 className="calendar-section__title">
        {nights} nights in {location}
      </h2>
      <p className="calendar-section__subtitle">
        {formatDate(checkIn)} - {formatDate(checkOut)}
      </p>

      <div className="calendar">
        <button
          type="button"
          className="calendar__nav calendar__nav--prev"
          onClick={prevMonth}
          aria-label="Previous month"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="calendar__months">
          <MonthView
            year={firstYear}
            month={firstMonth}
            checkIn={checkIn}
            checkOut={checkOut}
          />
          <MonthView
            year={secondYear}
            month={secondMonth}
            checkIn={checkIn}
            checkOut={checkOut}
          />
        </div>

        <button
          type="button"
          className="calendar__nav calendar__nav--next"
          onClick={nextMonth}
          aria-label="Next month"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="calendar-section__footer">
        <button
          type="button"
          className="calendar-section__keyboard"
          aria-label="Keyboard shortcuts"
        >
          <Keyboard size={20} />
        </button>
        <button type="button" className="calendar-section__clear">Clear dates</button>
      </div>
    </section>
  );
}
