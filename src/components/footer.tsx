import { Copyright } from 'lucide-react'

export function Footer() {
  return (
    <footer className="flex items-center justify-center space-x-1 text-sm">
      <Copyright size={20} />
      <p>Guaruba {new Date().getFullYear()}. Todos os direitos reservados.</p>
    </footer>
  )
}
