const axios = require('axios');

// Data untuk 10 permintaan bulk
const bulkData = 
[
  { "order_number": "ORDFE-000A1Y-BULK001", "amount": 30000, "user_id": 1 },
  { "order_number": "ORDFE-000A1Y-BULK002", "amount": 45000, "user_id": 2 },
  { "order_number": "ORDFE-000A1Y-BULK003", "amount": 60000, "user_id": 3 },
  { "order_number": "ORDFE-000A1Y-BULK004", "amount": 75000, "user_id": 4 },
  { "order_number": "ORDFE-000A1Y-BULK005", "amount": 50000, "user_id": 5 },
  { "order_number": "ORDFE-000A1Y-BULK006", "amount": 85000, "user_id": 6 },
  { "order_number": "ORDFE-000A1Y-BULK007", "amount": 90000, "user_id": 7 },
  { "order_number": "ORDFE-000A1Y-BULK008", "amount": 120000, "user_id": 8 },
  { "order_number": "ORDFE-000A1Y-BULK009", "amount": 110000, "user_id": 9 },
  { "order_number": "ORDFE-000A1Y-BULK010", "amount": 130000, "user_id": 10 },
  { "order_number": "ORDFE-000A1Y-BULK011", "amount": 30000, "user_id": 1 },
  { "order_number": "ORDFE-000A1Y-BULK012", "amount": 45000, "user_id": 2 },
  { "order_number": "ORDFE-000A1Y-BULK013", "amount": 60000, "user_id": 3 },
  { "order_number": "ORDFE-000A1Y-BULK014", "amount": 75000, "user_id": 4 },
  { "order_number": "ORDFE-000A1Y-BULK015", "amount": 50000, "user_id": 5 },
  { "order_number": "ORDFE-000A1Y-BULK016", "amount": 85000, "user_id": 6 },
  { "order_number": "ORDFE-000A1Y-BULK017", "amount": 90000, "user_id": 7 },
  { "order_number": "ORDFE-000A1Y-BULK018", "amount": 120000, "user_id": 8 },
  { "order_number": "ORDFE-000A1Y-BULK019", "amount": 110000, "user_id": 9 },
  { "order_number": "ORDFE-000A1Y-BULK020", "amount": 130000, "user_id": 10 },
  { "order_number": "ORDFE-000A1Y-BULK021", "amount": 30000, "user_id": 1 },
  { "order_number": "ORDFE-000A1Y-BULK022", "amount": 45000, "user_id": 2 },
  { "order_number": "ORDFE-000A1Y-BULK023", "amount": 60000, "user_id": 3 },
  { "order_number": "ORDFE-000A1Y-BULK024", "amount": 75000, "user_id": 4 },
  { "order_number": "ORDFE-000A1Y-BULK025", "amount": 50000, "user_id": 5 },
  { "order_number": "ORDFE-000A1Y-BULK026", "amount": 85000, "user_id": 6 },
  { "order_number": "ORDFE-000A1Y-BULK027", "amount": 90000, "user_id": 7 },
  { "order_number": "ORDFE-000A1Y-BULK028", "amount": 120000, "user_id": 8 },
  { "order_number": "ORDFE-000A1Y-BULK029", "amount": 110000, "user_id": 9 },
  { "order_number": "ORDFE-000A1Y-BULK030", "amount": 130000, "user_id": 10 },
  { "order_number": "ORDFE-000A1Y-BULK031", "amount": 30000, "user_id": 1 },
  { "order_number": "ORDFE-000A1Y-BULK032", "amount": 45000, "user_id": 2 },
  { "order_number": "ORDFE-000A1Y-BULK033", "amount": 60000, "user_id": 3 },
  { "order_number": "ORDFE-000A1Y-BULK034", "amount": 75000, "user_id": 4 },
  { "order_number": "ORDFE-000A1Y-BULK035", "amount": 50000, "user_id": 5 },
  { "order_number": "ORDFE-000A1Y-BULK036", "amount": 85000, "user_id": 6 },
  { "order_number": "ORDFE-000A1Y-BULK037", "amount": 90000, "user_id": 7 },
  { "order_number": "ORDFE-000A1Y-BULK038", "amount": 120000, "user_id": 8 },
  { "order_number": "ORDFE-000A1Y-BULK039", "amount": 110000, "user_id": 9 },
  { "order_number": "ORDFE-000A1Y-BULK040", "amount": 130000, "user_id": 10 },
  { "order_number": "ORDFE-000A1Y-BULK041", "amount": 30000, "user_id": 1 },
  { "order_number": "ORDFE-000A1Y-BULK042", "amount": 45000, "user_id": 2 },
  { "order_number": "ORDFE-000A1Y-BULK043", "amount": 60000, "user_id": 3 },
  { "order_number": "ORDFE-000A1Y-BULK044", "amount": 75000, "user_id": 4 },
  { "order_number": "ORDFE-000A1Y-BULK045", "amount": 50000, "user_id": 5 },
  { "order_number": "ORDFE-000A1Y-BULK046", "amount": 85000, "user_id": 6 },
  { "order_number": "ORDFE-000A1Y-BULK047", "amount": 90000, "user_id": 7 },
  { "order_number": "ORDFE-000A1Y-BULK048", "amount": 120000, "user_id": 8 },
  { "order_number": "ORDFE-000A1Y-BULK049", "amount": 110000, "user_id": 9 },
  { "order_number": "ORDFE-000A1Y-BULK050", "amount": 130000, "user_id": 10 },
  { "order_number": "ORDFE-000A1Y-BULK051", "amount": 30000, "user_id": 1 },
  { "order_number": "ORDFE-000A1Y-BULK052", "amount": 45000, "user_id": 2 },
  { "order_number": "ORDFE-000A1Y-BULK053", "amount": 60000, "user_id": 3 },
  { "order_number": "ORDFE-000A1Y-BULK054", "amount": 75000, "user_id": 4 },
  { "order_number": "ORDFE-000A1Y-BULK055", "amount": 50000, "user_id": 5 },
  { "order_number": "ORDFE-000A1Y-BULK056", "amount": 85000, "user_id": 6 },
  { "order_number": "ORDFE-000A1Y-BULK057", "amount": 90000, "user_id": 7 },
  { "order_number": "ORDFE-000A1Y-BULK058", "amount": 120000, "user_id": 8 },
  { "order_number": "ORDFE-000A1Y-BULK059", "amount": 110000, "user_id": 9 },
  { "order_number": "ORDFE-000A1Y-BULK060", "amount": 130000, "user_id": 10 },
  { "order_number": "ORDFE-000A1Y-BULK061", "amount": 30000, "user_id": 1 },
  { "order_number": "ORDFE-000A1Y-BULK062", "amount": 45000, "user_id": 2 },
  { "order_number": "ORDFE-000A1Y-BULK063", "amount": 60000, "user_id": 3 },
  { "order_number": "ORDFE-000A1Y-BULK064", "amount": 75000, "user_id": 4 },
  { "order_number": "ORDFE-000A1Y-BULK065", "amount": 50000, "user_id": 5 },
  { "order_number": "ORDFE-000A1Y-BULK066", "amount": 85000, "user_id": 6 },
  { "order_number": "ORDFE-000A1Y-BULK067", "amount": 90000, "user_id": 7 },
  { "order_number": "ORDFE-000A1Y-BULK068", "amount": 120000, "user_id": 8 },
  { "order_number": "ORDFE-000A1Y-BULK069", "amount": 110000, "user_id": 9 },
  { "order_number": "ORDFE-000A1Y-BULK070", "amount": 130000, "user_id": 10 },
  { "order_number": "ORDFE-000A1Y-BULK071", "amount": 30000, "user_id": 1 },
  { "order_number": "ORDFE-000A1Y-BULK072", "amount": 45000, "user_id": 2 },
  { "order_number": "ORDFE-000A1Y-BULK073", "amount": 60000, "user_id": 3 },
  { "order_number": "ORDFE-000A1Y-BULK074", "amount": 75000, "user_id": 4 },
  { "order_number": "ORDFE-000A1Y-BULK075", "amount": 50000, "user_id": 5 },
  { "order_number": "ORDFE-000A1Y-BULK076", "amount": 85000, "user_id": 6 },
  { "order_number": "ORDFE-000A1Y-BULK077", "amount": 90000, "user_id": 7 },
  { "order_number": "ORDFE-000A1Y-BULK078", "amount": 120000, "user_id": 8 },
  { "order_number": "ORDFE-000A1Y-BULK079", "amount": 110000, "user_id": 9 },
  { "order_number": "ORDFE-000A1Y-BULK080", "amount": 130000, "user_id": 10 },
  { "order_number": "ORDFE-000A1Y-BULK081", "amount": 30000, "user_id": 1 },
  { "order_number": "ORDFE-000A1Y-BULK082", "amount": 45000, "user_id": 2 },
  { "order_number": "ORDFE-000A1Y-BULK083", "amount": 60000, "user_id": 3 },
  { "order_number": "ORDFE-000A1Y-BULK084", "amount": 75000, "user_id": 4 },
  { "order_number": "ORDFE-000A1Y-BULK085", "amount": 50000, "user_id": 5 },
  { "order_number": "ORDFE-000A1Y-BULK086", "amount": 85000, "user_id": 6 },
  { "order_number": "ORDFE-000A1Y-BULK087", "amount": 90000, "user_id": 7 },
  { "order_number": "ORDFE-000A1Y-BULK088", "amount": 120000, "user_id": 8 },
  { "order_number": "ORDFE-000A1Y-BULK089", "amount": 110000, "user_id": 9 },
  { "order_number": "ORDFE-000A1Y-BULK090", "amount": 130000, "user_id": 10 },
  { "order_number": "ORDFE-000A1Y-BULK091", "amount": 30000, "user_id": 1 },
  { "order_number": "ORDFE-000A1Y-BULK092", "amount": 45000, "user_id": 2 },
  { "order_number": "ORDFE-000A1Y-BULK093", "amount": 60000, "user_id": 3 },
  { "order_number": "ORDFE-000A1Y-BULK094", "amount": 75000, "user_id": 4 },
  { "order_number": "ORDFE-000A1Y-BULK095", "amount": 50000, "user_id": 5 },
  { "order_number": "ORDFE-000A1Y-BULK096", "amount": 85000, "user_id": 6 },
  { "order_number": "ORDFE-000A1Y-BULK097", "amount": 90000, "user_id": 7 },
  { "order_number": "ORDFE-000A1Y-BULK098", "amount": 120000, "user_id": 8 },
  { "order_number": "ORDFE-000A1Y-BULK099", "amount": 110000, "user_id": 9 },
  { "order_number": "ORDFE-000A1Y-BULK100", "amount": 130000, "user_id": 10 }
]


// Fungsi untuk mengirim permintaan POST
const sendPaymentRequest = async (data) => {
  try {
    const response = await axios.post('http://localhost:5000/api/payments', data);
    console.log(`Response for ${data.order_number}:`, response.data);
  } catch (error) {
    console.error(`Error for ${data.order_number}:`, error.response ? error.response.data : error.message);
  }
};

// Mengirim 10 permintaan secara paralel
const testBulkRequests = async () => {
  await Promise.all(bulkData.map(data => sendPaymentRequest(data)));
};

testBulkRequests();
