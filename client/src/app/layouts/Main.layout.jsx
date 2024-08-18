import { Navbar } from '@shared/components/Navbar'
import { Contacts } from '@shared/components/Contacts'
import { Sidebar } from '@shared/components/Sidebar'

export const MainLayout = ({ children }) => 
  <div className="main-container">
    <header className="header">
      <Navbar />
    </header>
    <Sidebar />
    <main className="content">
      { children }
    </main>
    <Contacts />
  </div>
