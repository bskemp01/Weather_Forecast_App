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
import { QuantitativeValue } from './quantitativeValue';
import { RelativeLocation } from './relativeLocation';

export interface RelativeLocationJsonLd extends RelativeLocation { 
    geometry: GeometryString;
}