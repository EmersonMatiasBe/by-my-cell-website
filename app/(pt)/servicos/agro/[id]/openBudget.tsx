'use client'
import Button from '@/components/ui/button/index'

export default function OpenBudget() {
  function openPage() {
    const url = 'https://orcamento.bymycell.com/'
    window.open(url, '_blank')
  }

  return (
    <Button.Primary
      className="text-white mt-10 h-20 max-w-[800px] mx-auto"
      onClick={() => openPage()}
    >
      Fazer um Orçamento
    </Button.Primary>
  )
}
