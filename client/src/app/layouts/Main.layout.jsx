import { Contacts } from '@shared/components/Contacts'
import { Sidebar } from '@shared/components/Sidebar'
import { Header } from '@shared/components/Header'

export const MainLayout = ({ children }) => 
  <div className="main-container">
    <Header />
    <Sidebar />
    <main className="content">
      { children }
    </main>
    <Contacts />
  </div>
