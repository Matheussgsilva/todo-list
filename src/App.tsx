import { useState } from 'react';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddItem } from './components/AddItem';

import * as C from './App.styles'

function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Tarefa Exemplo', done: false},
    { id: 2, name: 'Tarefa Exemplo Finalizada', done: true},
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  } 

  return (
    <C.Container>
      <C.Area>
        <C.Header>📝 Lista de Tarefas</C.Header>

        <AddItem onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </C.Area>
    </C.Container>
  );
}

export default App;
