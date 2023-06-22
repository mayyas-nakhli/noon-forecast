import dayjs from 'dayjs';
import { ForecastDay, Hour } from '../schemas';
import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(isBetween);
export function get24Hours(
  forecast: ForecastDay[] | undefined,
  index = 0
): Hour[] {
  if (forecast === undefined) {
    return [];
  }
  if ((index === 0)) {
    const today = dayjs();
    let hours24 = forecast[0].hour.filter((item) =>
      dayjs(item.time).isAfter(today)
    );
    const tomorrow = [];
    for (let i = 0; i < 24 - hours24.length; i++) {
      tomorrow.push(forecast[1].hour[i]);
    }
    hours24 = [...hours24, ...tomorrow];
    return hours24;
  } else {
    return forecast[index].hour;
  }
}
