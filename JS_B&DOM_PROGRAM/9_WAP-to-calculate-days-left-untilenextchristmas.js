
  function daysUntileNextChristmas() {
    const today = new Date();
    const currentyear = today.getFullYear();

    //Christmas is always on december 25th
    const christmasdate = new date(currentYear, 11, 25);

    // check if Christmas  has already passed this year 
    if (today > christmasDate) {
        christmasDate.setFullYear(currentYear + 1);
    }

    const timeDiff = christmasDate.getTime() - today.getTime();
    const daysLeft = Match.ceil(timeDiff / (1000 * 60 * 60 * 24));

    return daysLeft;
}

// Example usage:
const daysLeft = daysUntileNextChristmas();
console.log('days left untile next hristmas: ${daysLeft}');



