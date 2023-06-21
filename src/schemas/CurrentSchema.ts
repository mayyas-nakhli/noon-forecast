import { z } from "zod";

export const locationSchema = z.object({
  name: z.string(),
  region: z.string(),
  country: z.string(),
  lat: z.number(),
  lon: z.number(),
  tz_id: z.string(),
  localtime_epoch: z.number(),
  localtime: z.string(),
})
export type Location = z.infer<typeof locationSchema>;


export const currentSchema = z.object({
  last_updated: z.string(), // Local time when the real time data was updated
  temp_c: z.number(),
  is_day: z.number(), // 1=Yes, 0=No. Whether to show day condition icon or night icon
  condition: z.object({
    text: z.string(),
    code: z.number(),
  }),
  wind_kph: z.number(),
  humidity: z.number(),
  cloud: z.number(), // Cloud cover as percentage
  feelslike_c: z.number(),
  vis_km: z.number(),
  uv: z.number(),
})

export type Current = z.infer<typeof currentSchema>;


const currentResponse = z.object({
  location: locationSchema,
  current: currentSchema,
})

export type CurrentResponse = z.infer<typeof currentResponse>