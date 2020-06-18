const mongoose=require('mongoose');
const Customer=require("./models/customers");
const databaseName = 'customers'
describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    const url = `mongodb://127.0.0.1/${databaseName}`
    connection = await mongoose.connect(url, { useNewUrlParser: true })
    });
    db = await connection.db(global.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  afterEach(async () => {
    await Customer.deleteMany()
  });

  it('Should save user to database', async done => {
    // Sends request...
    const res = await request.post('/customer')
    .send({
        _id:1,
        name: 'Zell',
        phone: '8139476518'
      })

  // Searches the user in the database
      const costomer = await Customer.findOne({ _id: 1 })

  // Ensures response contains name and email 
      expect(user.name).toBeTruthy()
      expect(user.phone).toBeTruthy()

    done()
  });

  
