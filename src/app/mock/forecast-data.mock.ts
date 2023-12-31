import { GridpointForecastPeriod } from '../models/NWS_API_Models/gridpointForecastPeriod';
import { DisplayGridPointForecast } from '../models/display-forecast.model';

export const periodsDataMock: GridpointForecastPeriod[] = [
  {
    number: 1,
    name: 'Today',
    startTime: '2023-09-18T09:00:00-05:00',
    endTime: '2023-09-18T18:00:00-05:00',
    isDaytime: true,
    temperature: 74,
    temperatureUnit: 'F',
    temperatureTrend: null,
    probabilityOfPrecipitation: {
      unitCode: 'wmoUnit:percent',
      value: null,
    },
    dewpoint: {
      unitCode: 'wmoUnit:degC',
      value: 14.444444444444445,
    },
    relativeHumidity: {
      unitCode: 'wmoUnit:percent',
      value: 93,
    },
    windSpeed: '5 mph',
    windDirection: 'NW',
    icon: 'https://api.weather.gov/icons/land/day/few?size=medium',
    shortForecast: 'Sunny',
    detailedForecast:
      'Sunny, with a high near 74. Northwest wind around 5 mph.',
  },
  {
    number: 2,
    name: 'Tonight',
    startTime: '2023-09-18T18:00:00-05:00',
    endTime: '2023-09-19T06:00:00-05:00',
    isDaytime: false,
    temperature: 53,
    temperatureUnit: 'F',
    temperatureTrend: null,
    probabilityOfPrecipitation: {
      unitCode: 'wmoUnit:percent',
      value: null,
    },
    dewpoint: {
      unitCode: 'wmoUnit:degC',
      value: 13.888888888888889,
    },
    relativeHumidity: {
      unitCode: 'wmoUnit:percent',
      value: 100,
    },
    windSpeed: '0 to 5 mph',
    windDirection: 'ENE',
    icon: 'https://api.weather.gov/icons/land/night/few?size=medium',
    shortForecast: 'Mostly Clear',
    detailedForecast:
      'Mostly clear, with a low around 53. East northeast wind 0 to 5 mph.',
  },
  {
    number: 3,
    name: 'Tuesday',
    startTime: '2023-09-19T06:00:00-05:00',
    endTime: '2023-09-19T18:00:00-05:00',
    isDaytime: true,
    temperature: 77,
    temperatureUnit: 'F',
    temperatureTrend: null,
    probabilityOfPrecipitation: {
      unitCode: 'wmoUnit:percent',
      value: null,
    },
    dewpoint: {
      unitCode: 'wmoUnit:degC',
      value: 14.444444444444445,
    },
    relativeHumidity: {
      unitCode: 'wmoUnit:percent',
      value: 96,
    },
    windSpeed: '0 to 5 mph',
    windDirection: 'SE',
    icon: 'https://api.weather.gov/icons/land/day/few?size=medium',
    shortForecast: 'Sunny',
    detailedForecast: 'Sunny, with a high near 77. Southeast wind 0 to 5 mph.',
  },
  {
    number: 4,
    name: 'Tuesday Night',
    startTime: '09/18/2023',
    endTime: '2023-09-20T06:00:00-05:00',
    isDaytime: false,
    temperature: 56,
    temperatureUnit: 'F',
    temperatureTrend: null,
    probabilityOfPrecipitation: {
      unitCode: 'wmoUnit:percent',
      value: null,
    },
    dewpoint: {
      unitCode: 'wmoUnit:degC',
      value: 13.888888888888889,
    },
    relativeHumidity: {
      unitCode: 'wmoUnit:percent',
      value: 88,
    },
    windSpeed: '5 mph',
    windDirection: 'E',
    icon: 'https://api.weather.gov/icons/land/night/few?size=medium',
    shortForecast: 'Mostly Clear',
    detailedForecast:
      'Mostly clear, with a low around 56. East wind around 5 mph.',
  },
  {
    number: 5,
    name: 'Wednesday',
    startTime: '2023-09-20T06:00:00-05:00',
    endTime: '2023-09-20T18:00:00-05:00',
    isDaytime: true,
    temperature: 80,
    temperatureUnit: 'F',
    temperatureTrend: null,
    probabilityOfPrecipitation: {
      unitCode: 'wmoUnit:percent',
      value: null,
    },
    dewpoint: {
      unitCode: 'wmoUnit:degC',
      value: 15,
    },
    relativeHumidity: {
      unitCode: 'wmoUnit:percent',
      value: 90,
    },
    windSpeed: '5 mph',
    windDirection: 'SSE',
    icon: 'https://api.weather.gov/icons/land/day/sct?size=medium',
    shortForecast: 'Mostly Sunny',
    detailedForecast:
      'Mostly sunny, with a high near 80. South southeast wind around 5 mph.',
  },
  {
    number: 6,
    name: 'Wednesday Night',
    startTime: '2023-09-20T18:00:00-05:00',
    endTime: '2023-09-21T06:00:00-05:00',
    isDaytime: false,
    temperature: 59,
    temperatureUnit: 'F',
    temperatureTrend: null,
    probabilityOfPrecipitation: {
      unitCode: 'wmoUnit:percent',
      value: null,
    },
    dewpoint: {
      unitCode: 'wmoUnit:degC',
      value: 15.555555555555555,
    },
    relativeHumidity: {
      unitCode: 'wmoUnit:percent',
      value: 88,
    },
    windSpeed: '5 mph',
    windDirection: 'SE',
    icon: 'https://api.weather.gov/icons/land/night/sct?size=medium',
    shortForecast: 'Partly Cloudy',
    detailedForecast:
      'Partly cloudy, with a low around 59. Southeast wind around 5 mph.',
  },
  {
    number: 7,
    name: 'Thursday',
    startTime: '2023-09-21T06:00:00-05:00',
    endTime: '2023-09-21T18:00:00-05:00',
    isDaytime: true,
    temperature: 80,
    temperatureUnit: 'F',
    temperatureTrend: null,
    probabilityOfPrecipitation: {
      unitCode: 'wmoUnit:percent',
      value: null,
    },
    dewpoint: {
      unitCode: 'wmoUnit:degC',
      value: 15.555555555555555,
    },
    relativeHumidity: {
      unitCode: 'wmoUnit:percent',
      value: 90,
    },
    windSpeed: '5 mph',
    windDirection: 'E',
    icon: 'https://api.weather.gov/icons/land/day/sct?size=medium',
    shortForecast: 'Mostly Sunny',
    detailedForecast:
      'Mostly sunny, with a high near 80. East wind around 5 mph.',
  },
  {
    number: 8,
    name: 'Thursday Night',
    startTime: '2023-09-21T18:00:00-05:00',
    endTime: '2023-09-22T06:00:00-05:00',
    isDaytime: false,
    temperature: 60,
    temperatureUnit: 'F',
    temperatureTrend: null,
    probabilityOfPrecipitation: {
      unitCode: 'wmoUnit:percent',
      value: null,
    },
    dewpoint: {
      unitCode: 'wmoUnit:degC',
      value: 16.111111111111111,
    },
    relativeHumidity: {
      unitCode: 'wmoUnit:percent',
      value: 91,
    },
    windSpeed: '5 mph',
    windDirection: 'E',
    icon: 'https://api.weather.gov/icons/land/night/sct?size=medium',
    shortForecast: 'Partly Cloudy',
    detailedForecast:
      'Partly cloudy, with a low around 60. East wind around 5 mph.',
  },
  {
    number: 9,
    name: 'Friday',
    startTime: '2023-09-22T06:00:00-05:00',
    endTime: '2023-09-22T18:00:00-05:00',
    isDaytime: true,
    temperature: 81,
    temperatureUnit: 'F',
    temperatureTrend: null,
    probabilityOfPrecipitation: {
      unitCode: 'wmoUnit:percent',
      value: null,
    },
    dewpoint: {
      unitCode: 'wmoUnit:degC',
      value: 16.111111111111111,
    },
    relativeHumidity: {
      unitCode: 'wmoUnit:percent',
      value: 87,
    },
    windSpeed: '5 mph',
    windDirection: 'E',
    icon: 'https://api.weather.gov/icons/land/day/few?size=medium',
    shortForecast: 'Sunny',
    detailedForecast: 'Sunny, with a high near 81. East wind around 5 mph.',
  },
  {
    number: 10,
    name: 'Friday Night',
    startTime: '2023-09-22T18:00:00-05:00',
    endTime: '2023-09-23T06:00:00-05:00',
    isDaytime: false,
    temperature: 58,
    temperatureUnit: 'F',
    temperatureTrend: null,
    probabilityOfPrecipitation: {
      unitCode: 'wmoUnit:percent',
      value: null,
    },
    dewpoint: {
      unitCode: 'wmoUnit:degC',
      value: 15,
    },
    relativeHumidity: {
      unitCode: 'wmoUnit:percent',
      value: 91,
    },
    windSpeed: '5 mph',
    windDirection: 'E',
    icon: 'https://api.weather.gov/icons/land/night/few?size=medium',
    shortForecast: 'Mostly Clear',
    detailedForecast: 'Mostly clear, with a low around 58.',
  },
  {
    number: 11,
    name: 'Saturday',
    startTime: '2023-09-23T06:00:00-05:00',
    endTime: '2023-09-23T18:00:00-05:00',
    isDaytime: true,
    temperature: 79,
    temperatureUnit: 'F',
    temperatureTrend: null,
    probabilityOfPrecipitation: {
      unitCode: 'wmoUnit:percent',
      value: null,
    },
    dewpoint: {
      unitCode: 'wmoUnit:degC',
      value: 15.555555555555555,
    },
    relativeHumidity: {
      unitCode: 'wmoUnit:percent',
      value: 90,
    },
    windSpeed: '5 mph',
    windDirection: 'ENE',
    icon: 'https://api.weather.gov/icons/land/day/few?size=medium',
    shortForecast: 'Sunny',
    detailedForecast: 'Sunny, with a high near 79.',
  },
  {
    number: 12,
    name: 'Saturday Night',
    startTime: '2023-09-23T18:00:00-05:00',
    endTime: '2023-09-24T06:00:00-05:00',
    isDaytime: false,
    temperature: 58,
    temperatureUnit: 'F',
    temperatureTrend: null,
    probabilityOfPrecipitation: {
      unitCode: 'wmoUnit:percent',
      value: null,
    },
    dewpoint: {
      unitCode: 'wmoUnit:degC',
      value: 15,
    },
    relativeHumidity: {
      unitCode: 'wmoUnit:percent',
      value: 94,
    },
    windSpeed: '5 mph',
    windDirection: 'E',
    icon: 'https://api.weather.gov/icons/land/night/sct?size=medium',
    shortForecast: 'Partly Cloudy',
    detailedForecast: 'Partly cloudy, with a low around 58.',
  },
  {
    number: 13,
    name: 'Sunday',
    startTime: '2023-09-24T06:00:00-05:00',
    endTime: '2023-09-24T18:00:00-05:00',
    isDaytime: true,
    temperature: 78,
    temperatureUnit: 'F',
    temperatureTrend: null,
    probabilityOfPrecipitation: {
      unitCode: 'wmoUnit:percent',
      value: 20,
    },
    dewpoint: {
      unitCode: 'wmoUnit:degC',
      value: 17.222222222222221,
    },
    relativeHumidity: {
      unitCode: 'wmoUnit:percent',
      value: 100,
    },
    windSpeed: '5 mph',
    windDirection: 'SSW',
    icon: 'https://api.weather.gov/icons/land/day/bkn/rain_showers,20?size=medium',
    shortForecast: 'Partly Sunny then Slight Chance Rain Showers',
    detailedForecast:
      'A slight chance of rain showers after 1pm. Partly sunny, with a high near 78. Chance of precipitation is 20%.',
  },
  {
    number: 14,
    name: 'Sunday Night',
    startTime: '2023-09-24T18:00:00-05:00',
    endTime: '2023-09-25T06:00:00-05:00',
    isDaytime: false,
    temperature: 60,
    temperatureUnit: 'F',
    temperatureTrend: null,
    probabilityOfPrecipitation: {
      unitCode: 'wmoUnit:percent',
      value: 20,
    },
    dewpoint: {
      unitCode: 'wmoUnit:degC',
      value: 17.222222222222221,
    },
    relativeHumidity: {
      unitCode: 'wmoUnit:percent',
      value: 95,
    },
    windSpeed: '5 mph',
    windDirection: 'SE',
    icon: 'https://api.weather.gov/icons/land/night/rain_showers,20?size=medium',
    shortForecast: 'Slight Chance Rain Showers',
    detailedForecast:
      'A slight chance of rain showers. Mostly cloudy, with a low around 60. Chance of precipitation is 20%.',
  },
];

export const gridpointForecastDataMock: DisplayGridPointForecast[] = [
  {
    samePeriod: [
      {
        number: 1,
        name: 'Today',
        startTime: '09/18/2023',
        endTime: '09/18/2023',
        isDaytime: true,
        temperature: 74,
        temperatureUnit: 'F',
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: 'wmoUnit:percent',
          value: null,
        },
        dewpoint: {
          unitCode: 'wmoUnit:degC',
          value: 14.444444444444445,
        },
        relativeHumidity: {
          unitCode: 'wmoUnit:percent',
          value: 93,
        },
        windSpeed: '5 mph',
        windDirection: 'NW',
        icon: 'https://api.weather.gov/icons/land/day/few?size=medium',
        shortForecast: 'Sunny',
        detailedForecast:
          'Sunny, with a high near 74. Northwest wind around 5 mph.',
      },
      {
        number: 2,
        name: 'Tonight',
        startTime: '09/18/2023',
        endTime: '09/19/2023',
        isDaytime: false,
        temperature: 53,
        temperatureUnit: 'F',
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: 'wmoUnit:percent',
          value: null,
        },
        dewpoint: {
          unitCode: 'wmoUnit:degC',
          value: 13.888888888888889,
        },
        relativeHumidity: {
          unitCode: 'wmoUnit:percent',
          value: 100,
        },
        windSpeed: '0 to 5 mph',
        windDirection: 'ENE',
        icon: 'https://api.weather.gov/icons/land/night/few?size=medium',
        shortForecast: 'Mostly Clear',
        detailedForecast:
          'Mostly clear, with a low around 53. East northeast wind 0 to 5 mph.',
      },
    ],
  },
  {
    samePeriod: [
      {
        number: 3,
        name: 'Tuesday',
        startTime: '09/19/2023',
        endTime: '09/19/2023',
        isDaytime: true,
        temperature: 77,
        temperatureUnit: 'F',
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: 'wmoUnit:percent',
          value: null,
        },
        dewpoint: {
          unitCode: 'wmoUnit:degC',
          value: 14.444444444444445,
        },
        relativeHumidity: {
          unitCode: 'wmoUnit:percent',
          value: 96,
        },
        windSpeed: '0 to 5 mph',
        windDirection: 'SE',
        icon: 'https://api.weather.gov/icons/land/day/few?size=medium',
        shortForecast: 'Sunny',
        detailedForecast:
          'Sunny, with a high near 77. Southeast wind 0 to 5 mph.',
      },
      {
        number: 4,
        name: 'Tuesday Night',
        startTime: '09/19/2023',
        endTime: '09/20/2023',
        isDaytime: false,
        temperature: 56,
        temperatureUnit: 'F',
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: 'wmoUnit:percent',
          value: null,
        },
        dewpoint: {
          unitCode: 'wmoUnit:degC',
          value: 13.888888888888889,
        },
        relativeHumidity: {
          unitCode: 'wmoUnit:percent',
          value: 88,
        },
        windSpeed: '5 mph',
        windDirection: 'E',
        icon: 'https://api.weather.gov/icons/land/night/few?size=medium',
        shortForecast: 'Mostly Clear',
        detailedForecast:
          'Mostly clear, with a low around 56. East wind around 5 mph.',
      },
    ],
  },
  {
    samePeriod: [
      {
        number: 5,
        name: 'Wednesday',
        startTime: '09/20/2023',
        endTime: '09/20/2023',
        isDaytime: true,
        temperature: 80,
        temperatureUnit: 'F',
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: 'wmoUnit:percent',
          value: null,
        },
        dewpoint: {
          unitCode: 'wmoUnit:degC',
          value: 15,
        },
        relativeHumidity: {
          unitCode: 'wmoUnit:percent',
          value: 90,
        },
        windSpeed: '5 mph',
        windDirection: 'SSE',
        icon: 'https://api.weather.gov/icons/land/day/sct?size=medium',
        shortForecast: 'Mostly Sunny',
        detailedForecast:
          'Mostly sunny, with a high near 80. South southeast wind around 5 mph.',
      },
      {
        number: 6,
        name: 'Wednesday Night',
        startTime: '09/20/2023',
        endTime: '09/21/2023',
        isDaytime: false,
        temperature: 59,
        temperatureUnit: 'F',
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: 'wmoUnit:percent',
          value: null,
        },
        dewpoint: {
          unitCode: 'wmoUnit:degC',
          value: 15.555555555555555,
        },
        relativeHumidity: {
          unitCode: 'wmoUnit:percent',
          value: 88,
        },
        windSpeed: '5 mph',
        windDirection: 'SE',
        icon: 'https://api.weather.gov/icons/land/night/sct?size=medium',
        shortForecast: 'Partly Cloudy',
        detailedForecast:
          'Partly cloudy, with a low around 59. Southeast wind around 5 mph.',
      },
    ],
  },
  {
    samePeriod: [
      {
        number: 7,
        name: 'Thursday',
        startTime: '09/21/2023',
        endTime: '09/21/2023',
        isDaytime: true,
        temperature: 80,
        temperatureUnit: 'F',
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: 'wmoUnit:percent',
          value: null,
        },
        dewpoint: {
          unitCode: 'wmoUnit:degC',
          value: 15.555555555555555,
        },
        relativeHumidity: {
          unitCode: 'wmoUnit:percent',
          value: 90,
        },
        windSpeed: '5 mph',
        windDirection: 'E',
        icon: 'https://api.weather.gov/icons/land/day/sct?size=medium',
        shortForecast: 'Mostly Sunny',
        detailedForecast:
          'Mostly sunny, with a high near 80. East wind around 5 mph.',
      },
      {
        number: 8,
        name: 'Thursday Night',
        startTime: '09/21/2023',
        endTime: '09/22/2023',
        isDaytime: false,
        temperature: 60,
        temperatureUnit: 'F',
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: 'wmoUnit:percent',
          value: null,
        },
        dewpoint: {
          unitCode: 'wmoUnit:degC',
          value: 16.111111111111111,
        },
        relativeHumidity: {
          unitCode: 'wmoUnit:percent',
          value: 91,
        },
        windSpeed: '5 mph',
        windDirection: 'E',
        icon: 'https://api.weather.gov/icons/land/night/sct?size=medium',
        shortForecast: 'Partly Cloudy',
        detailedForecast:
          'Partly cloudy, with a low around 60. East wind around 5 mph.',
      },
    ],
  },
  {
    samePeriod: [
      {
        number: 9,
        name: 'Friday',
        startTime: '09/22/2023',
        endTime: '09/22/2023',
        isDaytime: true,
        temperature: 81,
        temperatureUnit: 'F',
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: 'wmoUnit:percent',
          value: null,
        },
        dewpoint: {
          unitCode: 'wmoUnit:degC',
          value: 16.111111111111111,
        },
        relativeHumidity: {
          unitCode: 'wmoUnit:percent',
          value: 87,
        },
        windSpeed: '5 mph',
        windDirection: 'E',
        icon: 'https://api.weather.gov/icons/land/day/few?size=medium',
        shortForecast: 'Sunny',
        detailedForecast: 'Sunny, with a high near 81. East wind around 5 mph.',
      },
      {
        number: 10,
        name: 'Friday Night',
        startTime: '09/22/2023',
        endTime: '09/23/2023',
        isDaytime: false,
        temperature: 58,
        temperatureUnit: 'F',
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: 'wmoUnit:percent',
          value: null,
        },
        dewpoint: {
          unitCode: 'wmoUnit:degC',
          value: 15,
        },
        relativeHumidity: {
          unitCode: 'wmoUnit:percent',
          value: 91,
        },
        windSpeed: '5 mph',
        windDirection: 'E',
        icon: 'https://api.weather.gov/icons/land/night/few?size=medium',
        shortForecast: 'Mostly Clear',
        detailedForecast: 'Mostly clear, with a low around 58.',
      },
    ],
  },
  {
    samePeriod: [
      {
        number: 11,
        name: 'Saturday',
        startTime: '09/23/2023',
        endTime: '09/23/2023',
        isDaytime: true,
        temperature: 79,
        temperatureUnit: 'F',
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: 'wmoUnit:percent',
          value: null,
        },
        dewpoint: {
          unitCode: 'wmoUnit:degC',
          value: 15.555555555555555,
        },
        relativeHumidity: {
          unitCode: 'wmoUnit:percent',
          value: 90,
        },
        windSpeed: '5 mph',
        windDirection: 'ENE',
        icon: 'https://api.weather.gov/icons/land/day/few?size=medium',
        shortForecast: 'Sunny',
        detailedForecast: 'Sunny, with a high near 79.',
      },
      {
        number: 12,
        name: 'Saturday Night',
        startTime: '09/23/2023',
        endTime: '09/24/2023',
        isDaytime: false,
        temperature: 58,
        temperatureUnit: 'F',
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: 'wmoUnit:percent',
          value: null,
        },
        dewpoint: {
          unitCode: 'wmoUnit:degC',
          value: 15,
        },
        relativeHumidity: {
          unitCode: 'wmoUnit:percent',
          value: 94,
        },
        windSpeed: '5 mph',
        windDirection: 'E',
        icon: 'https://api.weather.gov/icons/land/night/sct?size=medium',
        shortForecast: 'Partly Cloudy',
        detailedForecast: 'Partly cloudy, with a low around 58.',
      },
    ],
  },
  {
    samePeriod: [
      {
        number: 13,
        name: 'Sunday',
        startTime: '09/24/2023',
        endTime: '09/24/2023',
        isDaytime: true,
        temperature: 78,
        temperatureUnit: 'F',
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: 'wmoUnit:percent',
          value: 20,
        },
        dewpoint: {
          unitCode: 'wmoUnit:degC',
          value: 17.222222222222221,
        },
        relativeHumidity: {
          unitCode: 'wmoUnit:percent',
          value: 100,
        },
        windSpeed: '5 mph',
        windDirection: 'SSW',
        icon: 'https://api.weather.gov/icons/land/day/bkn/rain_showers,20?size=medium',
        shortForecast: 'Partly Sunny then Slight Chance Rain Showers',
        detailedForecast:
          'A slight chance of rain showers after 1pm. Partly sunny, with a high near 78. Chance of precipitation is 20%.',
      },
      {
        number: 14,
        name: 'Sunday Night',
        startTime: '09/24/2023',
        endTime: '09/25/2023',
        isDaytime: false,
        temperature: 60,
        temperatureUnit: 'F',
        temperatureTrend: null,
        probabilityOfPrecipitation: {
          unitCode: 'wmoUnit:percent',
          value: 20,
        },
        dewpoint: {
          unitCode: 'wmoUnit:degC',
          value: 17.222222222222221,
        },
        relativeHumidity: {
          unitCode: 'wmoUnit:percent',
          value: 95,
        },
        windSpeed: '5 mph',
        windDirection: 'SE',
        icon: 'https://api.weather.gov/icons/land/night/rain_showers,20?size=medium',
        shortForecast: 'Slight Chance Rain Showers',
        detailedForecast:
          'A slight chance of rain showers. Mostly cloudy, with a low around 60. Chance of precipitation is 20%.',
      },
    ],
  },
];
