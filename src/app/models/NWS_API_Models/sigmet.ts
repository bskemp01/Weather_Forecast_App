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
import { ATSUIdentifier } from './aTSUIdentifier';

export interface Sigmet { 
    id?: string;
    issueTime?: Date;
    fir?: string;
    atsu?: ATSUIdentifier;
    sequence?: string;
    phenomenon?: string;
    start?: Date;
    end?: Date;
}