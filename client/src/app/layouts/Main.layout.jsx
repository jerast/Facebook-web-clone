import { Navbar } from '@shared/components/Navbar'
import { Contacts } from '@shared/components/Contacts'
import { AppsSidebar } from '@shared/components/AppsSidebar'

export const MainLayout = ({ children }) => 
  <main className="main">
    <Navbar />
    <AppsSidebar />
    <section className="content">
      { children }
    </section>
    <Contacts />
  </main>
