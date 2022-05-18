import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css";

function DatePick() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  let options = { year: "numeric", month: "long", day: "numeric" };
  return (
    <div className="fromDate">
      <DatePicker
        customInput={
          <button className="input">
            {selectedDate.toLocaleDateString(
              selectedDate.getTimezoneOffset(),
              options
            )}
          </button>
        }
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd-MMMM-yyyy"
        yearDropdownItemNumber={200}
        scrollableYearDropdown={true}
        showYearDropdown
        required
      />
    </div>
  );
}

export default DatePick;
