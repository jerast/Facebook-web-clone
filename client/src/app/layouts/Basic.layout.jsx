import { Header } from '@shared/components/Header'

export const BasicLayout = ({ children }) => 
  <div className="basic-container">
    <Header />
    <main className="content">
      { children }
    </main>
  </div>
