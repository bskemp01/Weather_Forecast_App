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
import { JsonLdContext } from './jsonLdContext';
import { QuantitativeValue } from './quantitativeValue';

export interface ObservationStation { 
    context?: JsonLdContext;
    geometry?: GeometryString;
    id?: string;
    type?: ObservationStation.TypeEnum;
    elevation?: QuantitativeValue;
    stationIdentifier?: string;
    name?: string;
    timeZone?: string;
    /**
     * A link to the NWS public forecast zone containing this station.
     */
    forecast?: string;
    /**
     * A link to the NWS county zone containing this station.
     */
    county?: string;
    /**
     * A link to the NWS fire weather forecast zone containing this station.
     */
    fireWeatherZone?: string;
}
export namespace ObservationStation {
    export type TypeEnum = 'wx:ObservationStation';
    export const TypeEnum = {
        WxObservationStation: 'wx:ObservationStation' as TypeEnum
    };
}