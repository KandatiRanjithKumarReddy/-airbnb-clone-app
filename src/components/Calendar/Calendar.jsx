import { useState } from 'react';
import './Calendar.css';
import { ChevronLeft, ChevronRight, Keyboard } from 'lucide-react';

const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

export default function Calendar({ checkIn, checkOut }) {
  const [baseMonth, setBaseMonth] = useState(checkIn.getMonth());
  const [baseYear, setBaseYear] = useState(checkIn.getFullYear());

  const secondMonth = baseMonth === 11 ? 0 : baseMonth + 1;
  const secondYear = baseMonth === 11 ? baseYear + 1 : baseYear;

  const prevMonth = () => {
    if (baseMonth === 0) {
      setBaseMonth(11);
      setBaseYear(baseYear - 1);
    } else {
      setBaseMonth(baseMonth - 1);
    }
  };

  const nextMonth = () => {
    if (baseMonth === 11) {
      setBaseMonth(0);
      setBaseYear(baseYear + 1);
    } else {
      setBaseMonth(baseMonth + 1);
    }
  };

  const isInRange = (year, month, day) => {
    const date = new Date(year, month, day);
    return date > checkIn && date < checkOut;
  };

  const isCheckIn = (year, month, day) => {
    return (
      year === checkIn.getFullYear() &&
      month === checkIn.getMonth() &&
      day === checkIn.getDate()
    );
  };

  const isCheckOut = (year, month, day) => {
    return (
      year === checkOut.getFullYear() &&
      month === checkOut.getMonth() &&
      day === checkOut.getDate()
    );
  };

  const isPast = (year, month, day) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return new Date(year, month, day) < today;
  };

  const renderMonth = (year, month) => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const days = [];

    // Empty cells for days before the first day
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar__day calendar__day--empty"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isStart = isCheckIn(year, month, day);
      const isEnd = isCheckOut(year, month, day);
      const inRange = isInRange(year, month, day);
      const past = isPast(year, month, day);

      let className = 'calendar__day';
      if (isStart) className += ' calendar__day--start';
      if (isEnd) className += ' calendar__day--end';
      if (inRange) className += ' calendar__day--in-range';
      if (past && !isStart && !isEnd) className += ' calendar__day--disabled';

      days.push(
        <div key={day} className={className}>
          <span className="calendar__day-number">{day}</span>
        </div>
      );
    }

    return (
      <div className="calendar__month">
        <h3 className="calendar__month-title">
          {MONTHS[month]} {year}
        </h3>
        <div className="calendar__days-header">
          {DAYS.map((day, i) => (
            <div key={i} className="calendar__day-name">{day}</div>
          ))}
        </div>
        <div className="calendar__days-grid">
          {days}
        </div>
      </div>
    );
  };

  return (
    <section className="calendar-section">
      <hr className="divider" />
      <h2 className="calendar-section__title">5 nights in Candolim</h2>
      <p className="calendar-section__subtitle">
        18 Oct 2026 - 23 Oct 2026
      </p>

      <div className="calendar">
        <button className="calendar__nav calendar__nav--prev" onClick={prevMonth} aria-label="Previous month">
          <ChevronLeft size={20} />
        </button>

        <div className="calendar__months">
          {renderMonth(baseYear, baseMonth)}
          {renderMonth(secondYear, secondMonth)}
        </div>

        <button className="calendar__nav calendar__nav--next" onClick={nextMonth} aria-label="Next month">
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="calendar-section__footer">
        <button className="calendar-section__keyboard" aria-label="Keyboard shortcuts">
          <Keyboard size={20} />
        </button>
        <button className="calendar-section__clear">Clear dates</button>
      </div>
    </section>
  );
}
