import dotenv from 'dotenv'
import app from './app'
import router from './routes/restaurant';

dotenv.config()

const { PORT = 3000 } = process.env;

app.use('/restaurant', router);

app.listen(PORT, () => {
  console.log(`🚀  mission to mars running in port ${PORT}`)
})