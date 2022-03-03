import dotenv from 'dotenv'
import app from './app'
import { ErrorMid } from './middlewares';
import router from './routes/restaurant';

dotenv.config()

const { PORT = 3000 } = process.env;

app.use('/restaurants', router);

app.use(ErrorMid);

app.listen(PORT, () => {
  console.log(`🚀  mission to mars running in port ${PORT}`)
})