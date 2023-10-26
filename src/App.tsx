import { Header } from './components/Header.tsx'
import { Task } from './components/Task.tsx'

import  './App.module.css'


export function App() {
  return (
    <div>
      <Header />
      <main>
        <Task />
      </main>
    </div>
  )
}


