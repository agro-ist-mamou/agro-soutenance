import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Chargement...');

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL)
      .then((res) => res.text())
      .then(setMessage)
      .catch(() => setMessage('Impossible de joindre le backend'));
  }, []);

  return <h1>{message}</h1>;
}

export default App;