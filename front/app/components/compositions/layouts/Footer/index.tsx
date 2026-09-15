import { FooterInner } from "./FooterInner"
import { FooterCopy } from "./FooterCopy"
import { FooterNav } from "./FooterNav"

export const Footer = () => {
  return (
    <footer className="mt-20 px-6 border-t border-muted">
      <FooterInner>
        <FooterCopy />
        <FooterNav />
      </FooterInner>
    </footer>
  )
}
