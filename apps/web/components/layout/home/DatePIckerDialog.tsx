"use client";
import { useState } from "react";
import TripType from "./TripType";
import {
  FlexibleMonthGrid,
  formatDate,
  InfoTooltip,
  MonthCalendar,
} from "./DatePicker";

type Mode = "specific" | "flexible";
interface DateRange {
  start: Date | null;
  end: Date | null;
}

export const DatePickerDialog = ({ onClose }: { onClose: () => void }) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [mode, setMode] = useState<Mode>("specific");
  const [leftYear, setLeftYear] = useState(today.getFullYear());
  const [leftMonth, setLeftMonth] = useState(today.getMonth());
  const [range, setRange] = useState<DateRange>({ start: null, end: null });
  const [hovered, setHovered] = useState<Date | null>(null);
  const [flexSelected, setFlexSelected] = useState<string[]>([]);

  const rightMonth = (leftMonth + 1) % 12;
  const rightYear = leftMonth === 11 ? leftYear + 1 : leftYear;

  function prevMonth() {
    if (leftMonth === 0) {
      setLeftMonth(11);
      setLeftYear((y) => y - 1);
    } else setLeftMonth((m) => m - 1);
  }
  
  function nextMonth() {
    if (leftMonth === 11) {
      setLeftMonth(0);
      setLeftYear((y) => y + 1);
    } else setLeftMonth((m) => m + 1);
  }

  function handleDayClick(date: Date) {
    if (!range.start || (range.start && range.end)) {
      setRange({ start: date, end: null });
    } else {
      if (date < range.start) {
        setRange({ start: date, end: range.start });
      } else {
        setRange({ start: range.start, end: date });
      }
    }
  }

  function toggleFlex(key: string) {
    setFlexSelected((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
    );
  }

  const hasSelection =
    mode === "specific" ? range.start !== null : flexSelected.length > 0;

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-[1000] backdrop-blur-sm p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="bg-white rounded-2xl px-4 py-5 sm:p-6 md:p-8 w-[min(1080px,96vw)] max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col justify-between"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex items-center justify-between sm:justify-start gap-4 w-full sm:w-auto">
            <TripType />
            <div className="sm:hidden">
              <InfoTooltip />
            </div>
          </div>

          {/* Mode toggle */}
          <div className="flex bg-gray-100 rounded-xl p-0.5 w-full sm:w-auto justify-center">
            {(["specific", "flexible"] as Mode[]).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                type="button"
                className={[
                  "flex-1 sm:flex-none text-center px-5 py-1.5 rounded-lg border-none cursor-pointer text-sm font-semibold transition-all duration-200",
                  mode === m
                    ? "bg-[#1e3a5f] text-white shadow-sm"
                    : "bg-transparent text-gray-500",
                ].join(" ")}
              >
                {m === "specific" ? "Specific dates" : "Flexible dates"}
              </button>
            ))}
          </div>

          <div className="hidden sm:block">
            <InfoTooltip />
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 min-h-0 w-full my-auto">
          {mode === "specific" ? (
            <div className="flex items-center gap-2 sm:gap-6 mb-2">
              <button
                type="button"
                onClick={prevMonth}
                className="w-9 h-9 rounded-full border border-gray-200 bg-white cursor-pointer text-xl text-gray-700 flex items-center justify-center shrink-0 hover:bg-gray-50 transition-colors"
              >
                ‹
              </button>

              <div className="flex flex-col md:flex-row gap-6 md:gap-10 flex-1 w-full overflow-hidden">
                <div className="flex-1 w-full min-w-[260px]">
                  <MonthCalendar
                    year={leftYear}
                    month={leftMonth}
                    range={range}
                    hovered={hovered}
                    onDayClick={handleDayClick}
                    onDayHover={setHovered}
                    minDate={today}
                  />
                </div>
                
                <div className="hidden md:block w-px bg-gray-200 shrink-0 self-stretch" />
                
                <div className="flex-1 w-full min-w-[260px] hidden sm:block">
                  <MonthCalendar
                    year={rightYear}
                    month={rightMonth}
                    range={range}
                    hovered={hovered}
                    onDayClick={handleDayClick}
                    onDayHover={setHovered}
                    minDate={today}
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={nextMonth}
                className="w-9 h-9 rounded-full border border-gray-200 bg-white cursor-pointer text-xl text-gray-700 flex items-center justify-center shrink-0 hover:bg-gray-50 transition-colors"
              >
                ›
              </button>
            </div>
          ) : (
            /* FIXED: Scrollable Container with exact width triggers */
            <div className="w-full overflow-x-auto pb-4 pt-1 clear-both block touch-pan-x">
              <div className="min-w-[550px] md:min-w-0 w-full w-max md:w-auto">
                <FlexibleMonthGrid selected={flexSelected} onToggle={toggleFlex} />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-7 pt-5 border-t border-gray-200">
          <span className="text-gray-500 text-sm text-center sm:text-left">
            {mode === "specific"
              ? range.start
                ? `${formatDate(range.start)}${range.end ? " → " + formatDate(range.end) : " — pick return date"}`
                : "Add a return date"
              : flexSelected.length > 0
                ? `${flexSelected.length} month${flexSelected.length > 1 ? "s" : ""} selected`
                : "Add a return date"}
          </span>
          
          <button
            disabled={!hasSelection}
            onClick={onClose}
            type="button"
            className={[
              "w-full sm:w-auto text-white border-none rounded-xl px-8 py-3 text-[15px] font-bold transition-colors duration-200 text-center",
              hasSelection
                ? "bg-blue-600 cursor-pointer"
                : "bg-blue-300 cursor-not-allowed",
            ].join(" ")}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};