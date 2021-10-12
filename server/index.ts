import express from 'express'

import {IGetUserAuthInfoRequest, IContract} from './definitions'

const app = express()

let contracts: IContract[] = [
    {
        id: '1pTsrFI29BEexmhOIh1USMxcLxR',
        name: 'SalesLoft',
        renewalDate:'1/10/2022',
        value: 50000
    },
    {
        id: '1pTswrX8ax9qRfCQ12JeFaUs8dk',
        name: 'Datadog',
        renewalDate:'6/10/2021',
        value: 30000
    },
    {
        id: '1pTswotqdFXl5aqM6QRQbTdkJVm',
        name: 'Sentry.io',
        renewalDate:'5/7/2022',
        value: 10000
    }
]

app.use((req: IGetUserAuthInfoRequest, res, next) => {  
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    res.setHeader('Access-Control-Allow-Origin', req.get('origin') || '')
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE')
  
    next()
  })
  
app.get('/healthcheck', (req, res) => {
    res.sendStatus(200)
})
  

app.get('/contracts', async (req: IGetUserAuthInfoRequest, res) => {
    console.log('Sending contracts...', contracts)
    return res.send(contracts)
})


/*
Implement the following update route

app.X('X', (req, res) => {
    
})
*/

app.listen(8080, () => {
    console.log(`Server is running at https://localhost:8080`);
  });
