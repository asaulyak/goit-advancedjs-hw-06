/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

export enum DayOfWeek {
  Mon = 'mon',
  Tue = 'tue',
  Wed = 'wed',
  Thu = 'thu',
  Fri = 'fri',
  Sat = 'sat',
  Sun = 'sun',
}

export function isWeekend(dayOfWeek: DayOfWeek) {
  const weekEndDays = [DayOfWeek.Sat, DayOfWeek.Sun];

  return weekEndDays.includes(dayOfWeek);
}
