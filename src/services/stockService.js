import axios from 'axios';

const API_URL = 'https://sheetdb.io/api/v1/h7ts77nvypgw8?sheet=$AAPL';

export const stockService = {
  async getStockData() {
    try {
      const response = await axios.get(API_URL);
      return response.data; // Rückgabe der API-Daten
    } catch (error) {
      console.error('Error fetching stock data', error);
      throw error; // Fehler weiterwerfen
    }
  },
};
