// api/stocks.js - Simplified Version
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    // For now, return sample data with some variation to test filtering
    const sampleStocks = [
      {
        symbol: 'AAPL',
        company: 'Apple Inc.',
        price: 175.23,
        peRatio: '28.5',
        rsi: '65.2',
        pegRatio: '2.1',
        dividendYield: '0.52',
        paysDividends: true
      },
      {
        symbol: 'MSFT',
        company: 'Microsoft Corp.',
        price: 342.11,
        peRatio: '32.1',
        rsi: '58.7',
        pegRatio: '1.8',
        dividendYield: '0.68',
        paysDividends: true
      },
      {
        symbol: 'GOOGL',
        company: 'Alphabet Inc.',
        price: 138.45,
        peRatio: '24.3',
        rsi: '72.1',
        pegRatio: '1.2',
        dividendYield: '0.0',
        paysDividends: false
      },
      {
        symbol: 'TSLA',
        company: 'Tesla Inc.',
        price: 235.67,
        peRatio: '45.2',
        rsi: '55.4',
        pegRatio: '2.8',
        dividendYield: '0.0',
        paysDividends: false
      },
      {
        symbol: 'JPM',
        company: 'JPMorgan Chase',
        price: 145.89,
        peRatio: '12.3',
        rsi: '42.1',
        pegRatio: '1.1',
        dividendYield: '2.8',
        paysDividends: true
      }
    ];

    res.status(200).json({
      success: true,
      data: sampleStocks,
      count: sampleStocks.length,
      message: 'API working - using sample data'
    });
    
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
}
