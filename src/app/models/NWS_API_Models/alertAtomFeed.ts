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
import { AlertAtomEntry } from './alertAtomEntry';
import { AlertAtomFeedAuthor } from './alertAtomFeedAuthor';

/**
 * An alert feed in Atom format
 */
export interface AlertAtomFeed { 
    id?: string;
    generator?: string;
    updated?: string;
    author?: AlertAtomFeedAuthor;
    title?: string;
    entry?: Array<AlertAtomEntry>;
}