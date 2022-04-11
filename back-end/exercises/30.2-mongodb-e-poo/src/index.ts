import RecordController from './Controllers/RecordController';
import IRecord from './Interfaces/IRecord';
import CustomRouter from './Routes/Router';
import App from './server';

const server = new App();

const recordController = new RecordController();

const recordRouter = new CustomRouter<IRecord>();

recordRouter.addRoute(recordController);

server.addRouter(recordRouter.router);

server.startServer();
