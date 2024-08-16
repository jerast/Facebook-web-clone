import Logo from '@app/assets/svg/logo.svg?react'
import { uiFooter } from '@app/config/uiConstants'

export const AuthLayout = ({ children }) => 
  <>
    <main className="auth">
      <Logo className="auth__logo" />
      
      { children }
    </main>
    <footer className="footer">
      <ul className="footer__languages">
        {
          uiFooter.languages.map(item => <li key={item}>{ item }</li>)
        }
      </ul>
      <hr className="footer__divisor" />
      <ul className="footer__apps">
        {
          uiFooter.links.map(item => <li key={item}>{ item }</li>)
        }
      </ul>
      <span className="footer__copyright">Meta © 2024</span>
    </footer>
  </>
  
