import { google } from 'googleapis';
export async function getBlanksData() {
  try {
    const target = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
    const jwt = new google.auth.JWT(
      'blanks@blanks.iam.gserviceaccount.com',
      null,
      ("-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDAKDFvkxHJpxaw\njQ2sLCWk9BZYJhweov0DRx8I/tgNv2xwGBjT+uVsnPt+Ef2OZ/yHre6IWUTHv+5w\nYYXaTWPNHWBk4WsNDCjon4PPLQ5cimZBtEbsrTNHwwy+D5zFVg5bSE4l2qpEhh6x\nqdHWFQviN1m7UY8sPf22JV6LPrNg1AF7eU3C2kMYIwMhDrfqch+AYDg+0C6l95IH\nQDXaYHaKRWrQ0Op7Gga5+yL6izv21DE6uRcopPiVx5p1x3olTDQT50fbUp+dcv+G\n201303J+wrC5Dp576hVTxEKD7wNfU7bYU3Mw8RcOV4uUz7Wrj+3G9IPr7b++eIX5\n2l5ABTg5AgMBAAECggEABFlEg8+9FiZhEJN4oj4I3LqmFiOdUkzXqK8qMs7AU/tS\nOG012UzzIT9M6mr8z9q8RSkjXf7rMWa/aNgEKqRtZEh3FIFiJf7xnrtxb7WyKVem\nfcksgRG1uI40/R4nAEj0yo27MFx1AFeqsn7zNULvrGnFRER8bCtmUQIifsiR+wMh\n1hIq4L2qrDPDM+l8TMmp9f3EKbGH6NqGZWKxcuGsBCVCo+HUfb1sY8MT/VSHripZ\njS8Vq7zMVqNgq7JCYpGcWYZTSVPx5I80405rPIX8FPYOKoE/+VA9woc/MD9Cbmzs\nEQUiTBHl1msvzb1brGmonpSLX4nT7uCZaNgMJnotuwKBgQD3c7jInbiSLeUfqC/J\nEw6NdFrIqxEgD7UTeLtt/DgRynuso8KADrL7FOYKQQq+rmPDmMR/VSEO8LFTujIT\nbxN8N/BRU5l8316yWYpyVKsAiQmGDYx9BwMbYTRR9Mu/YGdTvo/0L77rBLR2Z7pI\nLu3uoBbUQlVeOmkCrJro1NAAhwKBgQDGy3vj5DmVNLs+djEVoUiwDZ8rm2TL1omB\npndnXpU1hBsTgQEeSwwW+dYcQAOqliJnGL2k1LqWDuJxH3nFRU+LcqzOBzVmqUrL\nuNd6v4cK5WN5zGAEMHw8stdyTPQHF6GJOi21KsKDb39uMdwjZKQesnH9UeC8THoE\ncqcbsHrxPwKBgF52RKIA44aaEo9lKui9Z57EPivAcgclN+C5BAPWdqkD/PZIhWVR\nNy32KmLbtXhZJihy1wAsxTPo2ii2OYuFqZCP4iOJoFw1APdgiyNeAvFvXr1Xyrun\nw53eG5T1uBnUeV1Ur6tt1pns798Ldec8UwP3BP/+WoxgC9pDfddH9iddAoGATSu2\n11vEYsCKo4+8NDpc/kL7dDEpqtuIm7Tki1MzNwgmfqbIqVrWwaCQ1nyfL7yCdGUt\nUWxnVlNG4kUmv0bNv0NwA7bWqxiy+Wyy8WqiYL91o1WMPHQZ9nIyoqNu48XvplbY\nYYjM47sHy949J9wsveHl0EHVrSM/BrT/XAdhYn8CgYEA7fCU3UnJb3bURO5Z1o7p\nNAqzroM64EiCGaAbOORJ1l+pCnFQHZ15uQeMYAa/AqvGPs3STN0zA1fpy+0eEs3E\no0qdvxZEXkCmlYbMFYhyMODnt2oUi/ObtQ2SI3HYWhBeYX82GDit3GtfywPZMjGL\nbHwhFO4BXDIn6xVRJHWED6U=\n-----END PRIVATE KEY-----\n" || '').replace(/\\n/g, '\n'),
      target
    );

    const sheets = google.sheets({ version: 'v4', auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: '1JN7Fb2KT2ln1UJiVxyHPU0ICMVE0KV4BGG2USaQXbAA',
      range: 'Sheet1', // sheet name
    });

    const rows = response.data.values;
    if (rows.length) {
      return rows.slice(1, 10).map((row) => {
        return {
          sku: row[0] || null,
          gender: row[1] || null,
          fit: row[2] || null,
          category: row[3] || null,
          stylecol: row[4] || null,
          stylename: row[5] || null,
          colors: row[6] || null,
          totalStock: row[16] || null,
          price: row[19] || null,
          sizes: [
            {
              small: row[8] || null
            },
            {
              medium: row[9] || null
            },
            {
              large: row[10] || null
            },
            {
              xlarge: row[11] || null
            },
            {
              xxlarge: row[12] || null
            },
            {
              xxxlarge: row[13] || null
            }
          ]
        };
      });
    }
  } catch (err) {
    console.log(err);
  }
  return [];
}