import AddItems from './AddItems';
import Search from './Search';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useState } from "react";



function App() {
  const [items, setItems] = useState([JSON.parse(localStorage.getItem('To-Do-List'))]);

  const [Nvar, setNvar] = useState(" ");

  const [search, setSearch] = useState(" ")

  const addItme = (item) => {
    const id = Date.now()
    const newarr = { id, checked: false, item };
    const listItem = [...items, newarr]
    setItems(listItem)
    localStorage.setItem("To-Do-List", JSON.stringify(listItem))
  }

  const handleCheck = (id) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(newItems);
    localStorage.setItem("To-Do-List", JSON.stringify(newItems))
  };

  const onremove = (id) => {
    const newItems = items.filter((item) =>
      item.id !== id
    );
    setItems(newItems);
    localStorage.setItem("To-Do-List", JSON.stringify(newItems))
  };

  const sub = (e) => {
    e.preventDefault()
    if (!Nvar) return;
    console.log(Nvar);
    addItme(Nvar)

  };
  return (
    <>
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
            item.item?.toLowerCase().includes(search.toLowerCase())
          )}
          handleCheck={handleCheck}
          onremove={onremove}
        />
        <Footer
          items={items.length}
        />

      </div>
    </>
  );
}

export default App;
