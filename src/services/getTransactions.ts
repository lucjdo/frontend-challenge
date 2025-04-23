const MOCK_TRANSACTIONS = [
  {
    id: 1,
    date: 1742742294000,
    description: 'Transaction description',
    amount: 20
  },
  {
    id: 2,
    date: 1740323094000,
    description: 'Transaction description',
    amount: 20
  },
  {
    id: 3,
    date: 1737644694000,
    description: 'Transaction description',
    amount: 20
  },
  {
    id: 4,
    date: 1742742294000,
    description: 'Transaction description',
    amount: 20
  }
]

export function getTransactions() {
  const transactionsPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: MOCK_TRANSACTIONS })
    }, 300)
  })
  return MOCK_TRANSACTIONS
}
