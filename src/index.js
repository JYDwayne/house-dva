import dva from 'dva';
import './index.css';

//引入model
import modelProduct from './models/modelProducts';
import modelComment from './models/modelComment';

// 1. Initialize
const app = dva({
   initialState: {
    // products: {
    	
    // }
    // comment: {
    // }
   }
 });

// 2. Plugins
// app.use({});

// 3. Model
// app.model(modelProduct);
// app.model(modelComment);


// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
