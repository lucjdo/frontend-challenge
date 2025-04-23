import { useEffect, useState } from 'react'

import './App.css'
import { getTransactions } from './services/getTransactions'
import { Transaction } from './types/transactions'

function App() {
  const [transactions, setTransactions] = useState<Transaction[] | null>(null)
  const [filterFromDate, setFilterFromDate] = useState(null)
  const [filterToDate, setFilterToDate] = useState(null)

  useEffect(() => {
    const apiCall = async () => {
      getTransactions().then(({ data }) => setTransactions(data))
    }
    apiCall()
  }, [])

  const filteredTransactions = transactions?.filter((t) => {
    const fromTimestamp = Date.parse(filterFromDate || '')
    const toTimestamp = Date.parse(filterToDate || '')
    const transactionTimestamp = Date.parse(
      new Date(t.date).toLocaleDateString()
    )

    if (!fromTimestamp || !toTimestamp) return true

    return (
      transactionTimestamp > fromTimestamp && transactionTimestamp < toTimestamp
    )
  })

  return (
    <main>
      <h1>Transactions List</h1>
      <label>From</label>
      <input
        id='filter-from'
        type='string'
        value={filterFromDate || ''}
        onChange={(e) => setFilterFromDate(e.target.value)}
      />
      <label>To</label>
      <input
        id='filter-to'
        type='string'
        value={filterToDate || ''}
        onChange={(e) => setFilterToDate(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions?.map(({ id, date, amount, description }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{new Date(date).toLocaleDateString()}</td>
              <td>{description}</td>
              <td>{amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default App
