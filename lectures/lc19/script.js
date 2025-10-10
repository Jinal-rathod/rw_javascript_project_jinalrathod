{
  // Date Object

  {
    // new Date()
    // new Date(value)
    // new Date(dateString)
    // new Date(dateObject)

    // new Date(year, monthIndex)
    // new Date(year, monthIndex, day)
    // new Date(year, monthIndex, day, hours)
    // new Date(year, monthIndex, day, hours, minutes)
    // new Date(year, monthIndex, day, hours, minutes, seconds)
    // new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)

    // Date()

    let date = new Date();
    console.log(date);
  }

  {
    // Date.now()

    let date = Date.now();
    console.log(date);
  }

  {
    // Date.parse(dateString)

    let date = Date.parse("2023-06-16");
    let date2 = Date.parse("16-06-2023");
    console.log(date);
    console.log(date2);
  }

  {
    // Date.UTC(year)
    // Date.UTC(year, monthIndex)
    // Date.UTC(year, monthIndex, day)
    // Date.UTC(year, monthIndex, day, hours)
    // Date.UTC(year, monthIndex, day, hours, minutes)
    // Date.UTC(year, monthIndex, day, hours, minutes, seconds)
    // Date.UTC(year, monthIndex, day, hours, minutes, seconds, milliseconds)

    const utcDate1 = new Date(Date.UTC(2007, 4, 14, 12, 0, 0));
    const utcDate2 = new Date(Date.UTC(0, 0, 0, 0, 0, 0));

    console.log(utcDate1.toUTCString());
    console.log(utcDate2.toUTCString());
  }

  {
    // Instance methods(get)

    let date = new Date();

    console.log(date.getDate());
    console.log(date.getDay());
    console.log(date.getFullYear());
    console.log(date.getHours());
    console.log(date.getMilliseconds());
    console.log(date.getMinutes());
    console.log(date.getMonth());
    console.log(date.getSeconds());
    console.log(date.getTime());
    console.log(date.getUTCMonth());
  }

  {
    // Instance methods(set)

    let date = new Date("1999-07-01");
    let today = new Date();

    // today.setDate(16)
    // today.setMonth(5)
    // today.setFullYear(2024)
    // today.setHours(12)
    // today.setMinutes(59)
    // today.setSeconds(60)
    // today.setMilliseconds(50)
    // today.setUTCMonth(10)
    today.setTime(date.Time());
    console.log(today);
  }
}
