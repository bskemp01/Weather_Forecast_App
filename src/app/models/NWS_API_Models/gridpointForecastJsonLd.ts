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
import { GeometryString } from './geometryString';
import { GridpointForecast } from './gridpointForecast';
import { GridpointForecastPeriod } from './gridpointForecastPeriod';
import { GridpointForecastUnits } from './gridpointForecastUnits';
import { ISO8601Interval } from './iSO8601Interval';
import { JsonLdContext } from './jsonLdContext';
import { QuantitativeValue } from './quantitativeValue';

export interface GridpointForecastJsonLd extends GridpointForecast { 
    context: JsonLdContext;
    geometry: GeometryString;
}