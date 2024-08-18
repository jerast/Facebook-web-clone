import { Navbar } from '@shared/components/Navbar'
import { Contacts } from '@shared/components/Contacts'
import { Sidebar } from '@shared/components/Sidebar'

export const MainLayout = ({ children }) => 
  <div className="main-container">
    <header className="main-header">
      <Navbar />
    </header>
    <Sidebar />
    <main className="main-content">
      { children }
    </main>
    <Contacts />
  </div>
