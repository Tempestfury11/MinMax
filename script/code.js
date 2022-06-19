function findMinMax() {
    array = [70, 80, 50, 30, 60];
    minValue = Math.min(...array);
    maxValue = Math.max(...array);
    document.querySelector(
    '.min').textContent = minValue;
    document.querySelector(
    '.max').textContent = maxValue;
}