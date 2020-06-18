const mongoose=require('mongoose');
const axios=require('axios')
const Customer=require("./src/models/customers");
const databaseName = 'customers'

describe('insert', () => {

  beforeAll(async () => {
    const url = `mongodb://127.0.0.1:27017/${databaseName}`
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  afterEach(async () => {
    await Customer.deleteMany()
  });

  test('Should save user to database', async done => {
    // Sends request...
    let res = await axios.post('http://localhost:3001/customer', {
      _id: 1,
      name: 'Zell',
      phone: '8139476518'
    });
    
    // Searches the user in the database
    const customer = await Customer.findOne({ name: 'Zell' })

    // Ensures response
    expect(JSON.stringify(customer)).toEqual(JSON.stringify(res.data))

    done()
  });
});