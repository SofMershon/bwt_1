function getCentury(year) {
    if (year <= 0) {
        return 'Год должен быть положительным';
    }

    const century = Math.floor(year / 100);
    return year % 100 > 0 ? century + 1 : century;
}