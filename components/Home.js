
import { useState } from 'react';

export default function Home() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('uscita');
  const [paymentMethod, setPaymentMethod] = useState('elettronico');
  const [category, setCategory] = useState('generale');

  const addTransaction = () => {
    const value = parseFloat(amount);
    if (isNaN(value) || !date) return;
    const updatedBalance = type === 'entrata' ? balance + value : balance - value;
    const newTransaction = { date, value, type, paymentMethod, category };
    setTransactions([...transactions, newTransaction]);
    setBalance(updatedBalance);
    setAmount('');
    setDate('');
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-accent">Saldo conto corrente: €{balance.toFixed(2)}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Importo" />
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="entrata">Entrata</option>
          <option value="uscita">Uscita</option>
        </select>
        <select value={paymentMethod} onChange={e => setPaymentMethod(e.target.value)}>
          <option value="elettronico">Pagamento elettronico</option>
          <option value="contante">Contante</option>
        </select>
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="generale">Generale</option>
          <option value="prelievo">Prelievo ATM</option>
        </select>
        <button onClick={addTransaction} className="bg-accent text-white">Aggiungi</button>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold text-purple">Transazioni</h2>
        <ul className="space-y-2">
          {transactions.map((t, i) => (
            <li key={i} className="bg-white text-black p-2 rounded shadow">
              {t.date} - €{t.value.toFixed(2)} ({t.type}, {t.paymentMethod}, {t.category})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
