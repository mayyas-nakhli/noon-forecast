import { z } from 'zod';
import { currentSchema, locationSchema } from './CurrentSchema';

export const astroSchema = z.object({
  sunrise: z.string(),
  sunset: z.string(),
});
export type Astro = z.infer<typeof astroSchema>;

export const hourSchema = z.object({
  time: z.string(),
  temp_c: z.number(),
  is_day: z.number(),
  condition: z.object({
    text: z.string(),
  }),
  humidity: z.number(),
  will_it_rain: z.number(),
  will_it_snow: z.number(),
});

export type Hour = z.infer<typeof hourSchema>;

export const daySchema = z.object({
  maxtemp_c: z.number(),
  mintemp_c: z.number(),
  avgtemp_c: z.number(),
  avghumidity: z.number(),
  maxwind_kph: z.number(),
  daily_chance_of_rain: z.number(),
  condition: z.object({
    text: z.string(),
  }),
  uv: z.number(),
});

export const forecastDaySchema = z.object({
  date: z.string(),
  day: daySchema,
  astro: astroSchema,
  hour: z.array(hourSchema),
});

export type ForecastDay = z.infer<typeof forecastDaySchema>;

export const forecastResponseSchema = z.object({
  location: locationSchema,
  current: currentSchema,
  forecast: z.object({
    forecastday: z.array(forecastDaySchema),
  }),
});

export type ForecastResponse = z.infer<typeof forecastResponseSchema>;
