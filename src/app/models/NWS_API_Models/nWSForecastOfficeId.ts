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

/**
 * Three-letter identifier for a NWS office.
 */
export type NWSForecastOfficeId = 'AKQ' | 'ALY' | 'BGM' | 'BOX' | 'BTV' | 'BUF' | 'CAE' | 'CAR' | 'CHS' | 'CLE' | 'CTP' | 'GSP' | 'GYX' | 'ILM' | 'ILN' | 'LWX' | 'MHX' | 'OKX' | 'PBZ' | 'PHI' | 'RAH' | 'RLX' | 'RNK' | 'ABQ' | 'AMA' | 'BMX' | 'BRO' | 'CRP' | 'EPZ' | 'EWX' | 'FFC' | 'FWD' | 'HGX' | 'HUN' | 'JAN' | 'JAX' | 'KEY' | 'LCH' | 'LIX' | 'LUB' | 'LZK' | 'MAF' | 'MEG' | 'MFL' | 'MLB' | 'MOB' | 'MRX' | 'OHX' | 'OUN' | 'SHV' | 'SJT' | 'SJU' | 'TAE' | 'TBW' | 'TSA' | 'ABR' | 'APX' | 'ARX' | 'BIS' | 'BOU' | 'CYS' | 'DDC' | 'DLH' | 'DMX' | 'DTX' | 'DVN' | 'EAX' | 'FGF' | 'FSD' | 'GID' | 'GJT' | 'GLD' | 'GRB' | 'GRR' | 'ICT' | 'ILX' | 'IND' | 'IWX' | 'JKL' | 'LBF' | 'LMK' | 'LOT' | 'LSX' | 'MKX' | 'MPX' | 'MQT' | 'OAX' | 'PAH' | 'PUB' | 'RIW' | 'SGF' | 'TOP' | 'UNR' | 'BOI' | 'BYZ' | 'EKA' | 'FGZ' | 'GGW' | 'HNX' | 'LKN' | 'LOX' | 'MFR' | 'MSO' | 'MTR' | 'OTX' | 'PDT' | 'PIH' | 'PQR' | 'PSR' | 'REV' | 'SEW' | 'SGX' | 'SLC' | 'STO' | 'TFX' | 'TWC' | 'VEF' | 'AER' | 'AFC' | 'AFG' | 'AJK' | 'ALU' | 'GUM' | 'HPA' | 'HFO' | 'PPG' | 'STU' | 'NH1' | 'NH2' | 'ONA' | 'ONP';

export const NWSForecastOfficeId = {
    AKQ: 'AKQ' as NWSForecastOfficeId,
    ALY: 'ALY' as NWSForecastOfficeId,
    BGM: 'BGM' as NWSForecastOfficeId,
    BOX: 'BOX' as NWSForecastOfficeId,
    BTV: 'BTV' as NWSForecastOfficeId,
    BUF: 'BUF' as NWSForecastOfficeId,
    CAE: 'CAE' as NWSForecastOfficeId,
    CAR: 'CAR' as NWSForecastOfficeId,
    CHS: 'CHS' as NWSForecastOfficeId,
    CLE: 'CLE' as NWSForecastOfficeId,
    CTP: 'CTP' as NWSForecastOfficeId,
    GSP: 'GSP' as NWSForecastOfficeId,
    GYX: 'GYX' as NWSForecastOfficeId,
    ILM: 'ILM' as NWSForecastOfficeId,
    ILN: 'ILN' as NWSForecastOfficeId,
    LWX: 'LWX' as NWSForecastOfficeId,
    MHX: 'MHX' as NWSForecastOfficeId,
    OKX: 'OKX' as NWSForecastOfficeId,
    PBZ: 'PBZ' as NWSForecastOfficeId,
    PHI: 'PHI' as NWSForecastOfficeId,
    RAH: 'RAH' as NWSForecastOfficeId,
    RLX: 'RLX' as NWSForecastOfficeId,
    RNK: 'RNK' as NWSForecastOfficeId,
    ABQ: 'ABQ' as NWSForecastOfficeId,
    AMA: 'AMA' as NWSForecastOfficeId,
    BMX: 'BMX' as NWSForecastOfficeId,
    BRO: 'BRO' as NWSForecastOfficeId,
    CRP: 'CRP' as NWSForecastOfficeId,
    EPZ: 'EPZ' as NWSForecastOfficeId,
    EWX: 'EWX' as NWSForecastOfficeId,
    FFC: 'FFC' as NWSForecastOfficeId,
    FWD: 'FWD' as NWSForecastOfficeId,
    HGX: 'HGX' as NWSForecastOfficeId,
    HUN: 'HUN' as NWSForecastOfficeId,
    JAN: 'JAN' as NWSForecastOfficeId,
    JAX: 'JAX' as NWSForecastOfficeId,
    KEY: 'KEY' as NWSForecastOfficeId,
    LCH: 'LCH' as NWSForecastOfficeId,
    LIX: 'LIX' as NWSForecastOfficeId,
    LUB: 'LUB' as NWSForecastOfficeId,
    LZK: 'LZK' as NWSForecastOfficeId,
    MAF: 'MAF' as NWSForecastOfficeId,
    MEG: 'MEG' as NWSForecastOfficeId,
    MFL: 'MFL' as NWSForecastOfficeId,
    MLB: 'MLB' as NWSForecastOfficeId,
    MOB: 'MOB' as NWSForecastOfficeId,
    MRX: 'MRX' as NWSForecastOfficeId,
    OHX: 'OHX' as NWSForecastOfficeId,
    OUN: 'OUN' as NWSForecastOfficeId,
    SHV: 'SHV' as NWSForecastOfficeId,
    SJT: 'SJT' as NWSForecastOfficeId,
    SJU: 'SJU' as NWSForecastOfficeId,
    TAE: 'TAE' as NWSForecastOfficeId,
    TBW: 'TBW' as NWSForecastOfficeId,
    TSA: 'TSA' as NWSForecastOfficeId,
    ABR: 'ABR' as NWSForecastOfficeId,
    APX: 'APX' as NWSForecastOfficeId,
    ARX: 'ARX' as NWSForecastOfficeId,
    BIS: 'BIS' as NWSForecastOfficeId,
    BOU: 'BOU' as NWSForecastOfficeId,
    CYS: 'CYS' as NWSForecastOfficeId,
    DDC: 'DDC' as NWSForecastOfficeId,
    DLH: 'DLH' as NWSForecastOfficeId,
    DMX: 'DMX' as NWSForecastOfficeId,
    DTX: 'DTX' as NWSForecastOfficeId,
    DVN: 'DVN' as NWSForecastOfficeId,
    EAX: 'EAX' as NWSForecastOfficeId,
    FGF: 'FGF' as NWSForecastOfficeId,
    FSD: 'FSD' as NWSForecastOfficeId,
    GID: 'GID' as NWSForecastOfficeId,
    GJT: 'GJT' as NWSForecastOfficeId,
    GLD: 'GLD' as NWSForecastOfficeId,
    GRB: 'GRB' as NWSForecastOfficeId,
    GRR: 'GRR' as NWSForecastOfficeId,
    ICT: 'ICT' as NWSForecastOfficeId,
    ILX: 'ILX' as NWSForecastOfficeId,
    IND: 'IND' as NWSForecastOfficeId,
    IWX: 'IWX' as NWSForecastOfficeId,
    JKL: 'JKL' as NWSForecastOfficeId,
    LBF: 'LBF' as NWSForecastOfficeId,
    LMK: 'LMK' as NWSForecastOfficeId,
    LOT: 'LOT' as NWSForecastOfficeId,
    LSX: 'LSX' as NWSForecastOfficeId,
    MKX: 'MKX' as NWSForecastOfficeId,
    MPX: 'MPX' as NWSForecastOfficeId,
    MQT: 'MQT' as NWSForecastOfficeId,
    OAX: 'OAX' as NWSForecastOfficeId,
    PAH: 'PAH' as NWSForecastOfficeId,
    PUB: 'PUB' as NWSForecastOfficeId,
    RIW: 'RIW' as NWSForecastOfficeId,
    SGF: 'SGF' as NWSForecastOfficeId,
    TOP: 'TOP' as NWSForecastOfficeId,
    UNR: 'UNR' as NWSForecastOfficeId,
    BOI: 'BOI' as NWSForecastOfficeId,
    BYZ: 'BYZ' as NWSForecastOfficeId,
    EKA: 'EKA' as NWSForecastOfficeId,
    FGZ: 'FGZ' as NWSForecastOfficeId,
    GGW: 'GGW' as NWSForecastOfficeId,
    HNX: 'HNX' as NWSForecastOfficeId,
    LKN: 'LKN' as NWSForecastOfficeId,
    LOX: 'LOX' as NWSForecastOfficeId,
    MFR: 'MFR' as NWSForecastOfficeId,
    MSO: 'MSO' as NWSForecastOfficeId,
    MTR: 'MTR' as NWSForecastOfficeId,
    OTX: 'OTX' as NWSForecastOfficeId,
    PDT: 'PDT' as NWSForecastOfficeId,
    PIH: 'PIH' as NWSForecastOfficeId,
    PQR: 'PQR' as NWSForecastOfficeId,
    PSR: 'PSR' as NWSForecastOfficeId,
    REV: 'REV' as NWSForecastOfficeId,
    SEW: 'SEW' as NWSForecastOfficeId,
    SGX: 'SGX' as NWSForecastOfficeId,
    SLC: 'SLC' as NWSForecastOfficeId,
    STO: 'STO' as NWSForecastOfficeId,
    TFX: 'TFX' as NWSForecastOfficeId,
    TWC: 'TWC' as NWSForecastOfficeId,
    VEF: 'VEF' as NWSForecastOfficeId,
    AER: 'AER' as NWSForecastOfficeId,
    AFC: 'AFC' as NWSForecastOfficeId,
    AFG: 'AFG' as NWSForecastOfficeId,
    AJK: 'AJK' as NWSForecastOfficeId,
    ALU: 'ALU' as NWSForecastOfficeId,
    GUM: 'GUM' as NWSForecastOfficeId,
    HPA: 'HPA' as NWSForecastOfficeId,
    HFO: 'HFO' as NWSForecastOfficeId,
    PPG: 'PPG' as NWSForecastOfficeId,
    STU: 'STU' as NWSForecastOfficeId,
    NH1: 'NH1' as NWSForecastOfficeId,
    NH2: 'NH2' as NWSForecastOfficeId,
    ONA: 'ONA' as NWSForecastOfficeId,
    ONP: 'ONP' as NWSForecastOfficeId
};