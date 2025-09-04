import React, { useState } from 'react';
import { Search, TrendingUp, DollarSign, BarChart3, Target, Percent } from 'lucide-react';

const App = () => {
  const [filters, setFilters] = useState({
    peRatioMin: '',
    peRatioMax: '',
    priceMin: '',
    priceMax: '',
    rsiMin: '',
    rsiMax: '',
    profitExpectation1: '',
    profitExpectation2: '',
    pegRatioMin: '',
    pegRatioMax: '',
    paysDividends: '',
    dividendYieldMin: '',
    dividendYieldMax: ''
  });

  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleInputChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSearch = async () => {
    setIsSearching(true);
    
    // Simulate API call with mock data
    setTimeout(() => {
      const mockResults = [
        {
          symbol: 'AAPL',
          company: 'Apple Inc.',
          price: 175.23,
          peRatio: 28.5,
          rsi: 65.2,
          pegRatio: 2.1,
          dividendYield: 0.52,
          paysDividends: true
        },
        {
          symbol: 'MSFT',
          company: 'Microsoft Corp.',
          price: 342.11,
          peRatio: 32.1,
          rsi: 58.7,
          pegRatio: 1.8,
          dividendYield: 0.68,
          paysDividends: true
        },
        {
          symbol: 'GOOGL',
          company: 'Alphabet Inc.',
          price: 138.45,
          peRatio: 24.3,
          rsi: 72.1,
          pegRatio: 1.2,
          dividendYield: 0.0,
          paysDividends: false
        }
      ];
      
      setSearchResults(mockResults);
      setIsSearching(false);
    }, 1500);
  };

  const resetFilters = () => {
    setFilters({
      peRatioMin: '',
      peRatioMax: '',
      priceMin: '',
      priceMax: '',
      rsiMin: '',
      rsiMax: '',
      profitExpectation1: '',
      profitExpectation2: '',
      pegRatioMin: '',
      pegRatioMax: '',
      paysDividends: '',
      dividendYieldMin: '',
      dividendYieldMax: ''
    });
    setSearchResults([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-3">
            <TrendingUp className="text-blue-600" />
            NYSE Stock Filter
          </h1>
          <p className="text-gray-600">Filter stocks based on your investment criteria</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* P/E Ratio Filter */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <BarChart3 className="text-blue-500 w-5 h-5" />
                <h3 className="font-semibold text-gray-700">P/E Ratio</h3>
              </div>
              <div className="flex gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Min</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={filters.peRatioMin}
                    onChange={(e) => handleInputChange('peRatioMin', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Max</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={filters.peRatioMax}
                    onChange={(e) => handleInputChange('peRatioMax', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="100"
                  />
                </div>
              </div>
            </div>

            {/* Price Filter */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <DollarSign className="text-green-500 w-5 h-5" />
                <h3 className="font-semibold text-gray-700">Stock Price ($)</h3>
              </div>
              <div className="flex gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Min</label>
                  <input
                    type="number"
                    min="0"
                    max="5000"
                    value={filters.priceMin}
                    onChange={(e) => handleInputChange('priceMin', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Max</label>
                  <input
                    type="number"
                    min="0"
                    max="5000"
                    value={filters.priceMax}
                    onChange={(e) => handleInputChange('priceMax', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="5000"
                  />
                </div>
              </div>
            </div>

            {/* RSI Filter */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <BarChart3 className="text-purple-500 w-5 h-5" />
                <h3 className="font-semibold text-gray-700">RSI</h3>
              </div>
              <div className="flex gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Min</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={filters.rsiMin}
                    onChange={(e) => handleInputChange('rsiMin', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Max</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={filters.rsiMax}
                    onChange={(e) => handleInputChange('rsiMax', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="100"
                  />
                </div>
              </div>
            </div>

            {/* Profit Expectation 1 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <Target className="text-red-500 w-5 h-5" />
                <h3 className="font-semibold text-gray-700">Meet Profit Expectation 1</h3>
              </div>
              <div className="flex gap-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="profitExpectation1"
                    value="yes"
                    checked={filters.profitExpectation1 === 'yes'}
                    onChange={(e) => handleInputChange('profitExpectation1', e.target.value)}
                    className="mr-2 text-blue-600"
                  />
                  Yes
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="profitExpectation1"
                    value="no"
                    checked={filters.profitExpectation1 === 'no'}
                    onChange={(e) => handleInputChange('profitExpectation1', e.target.value)}
                    className="mr-2 text-blue-600"
                  />
                  No
                </label>
              </div>
            </div>

            {/* Profit Expectation 2 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <Target className="text-orange-500 w-5 h-5" />
                <h3 className="font-semibold text-gray-700">Meet Profit Expectation 2</h3>
              </div>
              <div className="flex gap-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="profitExpectation2"
                    value="yes"
                    checked={filters.profitExpectation2 === 'yes'}
                    onChange={(e) => handleInputChange('profitExpectation2', e.target.value)}
                    className="mr-2 text-blue-600"
                  />
                  Yes
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="profitExpectation2"
                    value="no"
                    checked={filters.profitExpectation2 === 'no'}
                    onChange={(e) => handleInputChange('profitExpectation2', e.target.value)}
                    className="mr-2 text-blue-600"
                  />
                  No
                </label>
              </div>
            </div>

            {/* PEG Ratio Filter */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <BarChart3 className="text-teal-500 w-5 h-5" />
                <h3 className="font-semibold text-gray-700">PEG Ratio</h3>
              </div>
              <div className="flex gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Min</label>
                  <input
                    type="number"
                    min="0"
                    max="3"
                    step="0.1"
                    value={filters.pegRatioMin}
                    onChange={(e) => handleInputChange('pegRatioMin', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Max</label>
                  <input
                    type="number"
                    min="0"
                    max="3"
                    step="0.1"
                    value={filters.pegRatioMax}
                    onChange={(e) => handleInputChange('pegRatioMax', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="3"
                  />
                </div>
              </div>
            </div>

            {/* Dividends Filter */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <Percent className="text-green-600 w-5 h-5" />
                <h3 className="font-semibold text-gray-700">Pays Dividends</h3>
              </div>
              <div className="flex gap-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="paysDividends"
                    value="yes"
                    checked={filters.paysDividends === 'yes'}
                    onChange={(e) => handleInputChange('paysDividends', e.target.value)}
                    className="mr-2 text-blue-600"
                  />
                  Yes
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="paysDividends"
                    value="no"
                    checked={filters.paysDividends === 'no'}
                    onChange={(e) => handleInputChange('paysDividends', e.target.value)}
                    className="mr-2 text-blue-600"
                  />
                  No
                </label>
              </div>
            </div>

            {/* Dividend Yield Filter */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <Percent className="text-yellow-500 w-5 h-5" />
                <h3 className="font-semibold text-gray-700">Dividend Yield (%)</h3>
              </div>
              <div className="flex gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Min</label>
                  <input
                    type="number"
                    min="0"
                    max="30"
                    step="0.1"
                    value={filters.dividendYieldMin}
                    onChange={(e) => handleInputChange('dividendYieldMin', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Max</label>
                  <input
                    type="number"
                    min="0"
                    max="30"
                    step="0.1"
                    value={filters.dividendYieldMax}
                    onChange={(e) => handleInputChange('dividendYieldMax', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="30"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={resetFilters}
              className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
            >
              Reset Filters
            </button>
            <button
              onClick={handleSearch}
              disabled={isSearching}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSearching ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Searching...
                </>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  Search
                </>
              )}
            </button>
          </div>
        </div>

        {/* Results Section */}
        {searchResults.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Search Results</h2>
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Symbol</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Company</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Price</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">P/E Ratio</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">RSI</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">PEG Ratio</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Div. Yield</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Dividends</th>
                  </tr>
                </thead>
                <tbody>
                  {searchResults.map((stock, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-blue-600">{stock.symbol}</td>
                      <td className="px-4 py-3">{stock.company}</td>
                      <td className="px-4 py-3">${stock.price.toFixed(2)}</td>
                      <td className="px-4 py-3">{stock.peRatio}</td>
                      <td className="px-4 py-3">{stock.rsi}</td>
                      <td className="px-4 py-3">{stock.pegRatio}</td>
                      <td className="px-4 py-3">{stock.dividendYield}%</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${stock.paysDividends ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {stock.paysDividends ? 'Yes' : 'No'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
