import AddItems from './AddItems';
import Search from './Search';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("To-Do-List");
    return saved ? JSON.parse(saved) : [];
  });

  const [Nvar, setNvar] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("To-Do-List", JSON.stringify(items));
  }, [items]);

  const addItem = (text) => {
    setItems(prev => [
      ...prev,
      { id: Date.now(), checked: false, item: text }
    ]);
  };

  const handleCheck = (id) => {
    setItems(prev =>
      prev.map(it =>
        it.id === id ? { ...it, checked: !it.checked } : it
      )
    );
  };

  const onRemove = (id) => {
    setItems(prev => prev.filter(it => it.id !== id));
  };

  const sub = (e) => {
    e.preventDefault();
    if (!Nvar) return;
    addItem(Nvar);
    setNvar("");
  };

  return (
    <div className="app">
      <Header />

      <AddItems
        puthusu={Nvar}
        setPuthusu={setNvar}
        sub={sub}
      />

      <Search
        search={search}
        setSearch={setSearch}
      />

      <Content
  items={items.filter(item =>
    typeof item?.item === "string" &&
    item.item.toLowerCase().includes(search.toLowerCase())
  )}
  handleCheck={handleCheck}
  onremove={onRemove}
/>


      <Footer items={items.length} />
    </div>
  );
}

export default App;
