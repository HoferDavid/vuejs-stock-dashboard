import axios from 'axios';

const order = [
  'Mar 21',
  'Jun 21',
  'Sep 21',
  'Dec 21',
  'Mar 22',
  'Jun 22',
  'Sep 22',
  'Dec 22',
  'Mar 23',
  '""',
  '3 Aug 23',
  '2 Nov 23',
  '1 Feb 24',
  '2 Mai 24',
];

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

  async getRevenue() {
    try {
      const data = await this.getStockData();
      return order.map((key) => data[3]?.[key] || 'N/A');
    } catch (error) {
      console.error('error getting revenue data', error);
      throw error;
    }
  },
};
