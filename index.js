
const express = require('express')
const connection = require('./config/Conection.js')
// ========= ROUTES ============
const conectionRouter = require('./Routes/ConectionRouter.js')
const playersRouter = require('./Routes/PlayersRouter.js')
const CategoriesRouter = require('./Routes/CategoriesRouter.js')
const ServicePriceRouter = require('./Routes/ServicePriceRouter.js')
const ItemsRouter = require('./Routes/ItemRouter.js')
const SalesRouter = require('./Routes/SalesRouter.js')
const EmployeesRouter = require('./Routes/EmployeesRouter')
const ExpensesRouter = require('./Routes/ExpensesRouter.js')
const AbsencesRouter = require('./Routes/AbsencesRourter.js')
const PermissionsRouter = require('./Routes/PermissionsRouter.js')
const DirectDeductionRouter = require('./Routes/DirectDeductionRouter.js')
const DeductionRouter = require('./Routes/DeductionRouter.js')
const DirectIncentiveRouter = require('./Routes/DirectIncentiveRouter.js')
const IncentiveRouter = require('./Routes/IncentiveRouter.js')
const LoansRouter = require('./Routes/LoansRouter.js')
const NetRouter = require('./Routes/NetRouter.js')
const IN_OUT = require('./Routes/IN_OUTRouter.js')
const ReportsRouter = require('./Routes/ReportsMangmentRouter.js')
// ==========================
const bodyParser = require("body-parser")
const compression = require("compression")
const cors = require('cors');

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(compression())



app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  next();
});

app.use(cors({
   origin: "*",
}));


app.use(conectionRouter);
app.use(playersRouter);
app.use(CategoriesRouter);
app.use(ItemsRouter);
app.use(SalesRouter);
app.use(ServicePriceRouter);
app.use(EmployeesRouter);
app.use(AbsencesRouter);
app.use(PermissionsRouter);
app.use(DirectDeductionRouter);
app.use(DeductionRouter);
app.use(DirectIncentiveRouter);
app.use(IncentiveRouter);
app.use(LoansRouter);
app.use(NetRouter);
app.use(IN_OUT);
app.use(ExpensesRouter);
app.use(ReportsRouter);

app.get('/', (req, res) => {
  res.send(`<h1>LOGICO GYM SYS</h1>`)
})


const host = "192.168.1.15"
const host2 = "logicoai.ddns.net"
const port = process.env.PORT || 8080

app.listen(port, () => {

  console.log(`Example app listening on port ${port}`)

})

// app.listen(port,'192.168.1.15', () => {

//   console.log(`Example app listening on port ${port}`)

// })