/**
 * weather.gov API
 * weather.gov API
 *
 * OpenAPI spec version: 1.11.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { QuantitativeValue } from './quantitativeValue';

/**
 * A value object representing expected weather phenomena.
 */
export interface GridpointWeatherValue { 
    coverage: GridpointWeatherValue.CoverageEnum;
    weather: GridpointWeatherValue.WeatherEnum;
    intensity: GridpointWeatherValue.IntensityEnum;
    visibility: QuantitativeValue;
    attributes: Array<GridpointWeatherValue.AttributesEnum>;
}
export namespace GridpointWeatherValue {
    export type CoverageEnum = 'areas' | 'brief' | 'chance' | 'definite' | 'few' | 'frequent' | 'intermittent' | 'isolated' | 'likely' | 'numerous' | 'occasional' | 'patchy' | 'periods' | 'scattered' | 'slight_chance' | 'widespread';
    export const CoverageEnum = {
        Areas: 'areas' as CoverageEnum,
        Brief: 'brief' as CoverageEnum,
        Chance: 'chance' as CoverageEnum,
        Definite: 'definite' as CoverageEnum,
        Few: 'few' as CoverageEnum,
        Frequent: 'frequent' as CoverageEnum,
        Intermittent: 'intermittent' as CoverageEnum,
        Isolated: 'isolated' as CoverageEnum,
        Likely: 'likely' as CoverageEnum,
        Numerous: 'numerous' as CoverageEnum,
        Occasional: 'occasional' as CoverageEnum,
        Patchy: 'patchy' as CoverageEnum,
        Periods: 'periods' as CoverageEnum,
        Scattered: 'scattered' as CoverageEnum,
        SlightChance: 'slight_chance' as CoverageEnum,
        Widespread: 'widespread' as CoverageEnum
    };
    export type WeatherEnum = 'blowing_dust' | 'blowing_sand' | 'blowing_snow' | 'drizzle' | 'fog' | 'freezing_fog' | 'freezing_drizzle' | 'freezing_rain' | 'freezing_spray' | 'frost' | 'hail' | 'haze' | 'ice_crystals' | 'ice_fog' | 'rain' | 'rain_showers' | 'sleet' | 'smoke' | 'snow' | 'snow_showers' | 'thunderstorms' | 'volcanic_ash' | 'water_spouts';
    export const WeatherEnum = {
        BlowingDust: 'blowing_dust' as WeatherEnum,
        BlowingSand: 'blowing_sand' as WeatherEnum,
        BlowingSnow: 'blowing_snow' as WeatherEnum,
        Drizzle: 'drizzle' as WeatherEnum,
        Fog: 'fog' as WeatherEnum,
        FreezingFog: 'freezing_fog' as WeatherEnum,
        FreezingDrizzle: 'freezing_drizzle' as WeatherEnum,
        FreezingRain: 'freezing_rain' as WeatherEnum,
        FreezingSpray: 'freezing_spray' as WeatherEnum,
        Frost: 'frost' as WeatherEnum,
        Hail: 'hail' as WeatherEnum,
        Haze: 'haze' as WeatherEnum,
        IceCrystals: 'ice_crystals' as WeatherEnum,
        IceFog: 'ice_fog' as WeatherEnum,
        Rain: 'rain' as WeatherEnum,
        RainShowers: 'rain_showers' as WeatherEnum,
        Sleet: 'sleet' as WeatherEnum,
        Smoke: 'smoke' as WeatherEnum,
        Snow: 'snow' as WeatherEnum,
        SnowShowers: 'snow_showers' as WeatherEnum,
        Thunderstorms: 'thunderstorms' as WeatherEnum,
        VolcanicAsh: 'volcanic_ash' as WeatherEnum,
        WaterSpouts: 'water_spouts' as WeatherEnum
    };
    export type IntensityEnum = 'very_light' | 'light' | 'moderate' | 'heavy';
    export const IntensityEnum = {
        VeryLight: 'very_light' as IntensityEnum,
        Light: 'light' as IntensityEnum,
        Moderate: 'moderate' as IntensityEnum,
        Heavy: 'heavy' as IntensityEnum
    };
    export type AttributesEnum = 'damaging_wind' | 'dry_thunderstorms' | 'flooding' | 'gusty_wind' | 'heavy_rain' | 'large_hail' | 'small_hail' | 'tornadoes';
    export const AttributesEnum = {
        DamagingWind: 'damaging_wind' as AttributesEnum,
        DryThunderstorms: 'dry_thunderstorms' as AttributesEnum,
        Flooding: 'flooding' as AttributesEnum,
        GustyWind: 'gusty_wind' as AttributesEnum,
        HeavyRain: 'heavy_rain' as AttributesEnum,
        LargeHail: 'large_hail' as AttributesEnum,
        SmallHail: 'small_hail' as AttributesEnum,
        Tornadoes: 'tornadoes' as AttributesEnum
    };
}