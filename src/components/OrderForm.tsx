import { useState } from 'react'
import type { FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSite } from '../SiteContext'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function OrderForm() {
  const { order, contact, name } = useSite()
  const [status, setStatus] = useState<Status>('idle')
  const [params] = useSearchParams()
  // /encomendas?tipo=bolo (botão "Pedir orçamento") traz a mensagem já com os campos a preencher
  const presetMessage = params.get('tipo') === 'bolo' ? (order.customCakeTemplate ?? '') : ''

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // Sem endpoint configurado: abre o email do cliente com o pedido preenchido
    if (!order.formEndpoint) {
      const body = [
        `${order.labels.name}: ${data.get('name')}`,
        `${order.labels.email}: ${data.get('email')}`,
        `${order.labels.phone}: ${data.get('phone')}`,
        '',
        String(data.get('message') ?? ''),
      ].join('\n')
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
        `Pedido - ${name}`,
      )}&body=${encodeURIComponent(body)}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(order.formEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (!res.ok) throw new Error(String(res.status))
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        {order.labels.name}
        <input type="text" name="name" required autoComplete="name" />
      </label>
      <label>
        {order.labels.email}
        <input type="email" name="email" required autoComplete="email" />
      </label>
      <label>
        {order.labels.phone}
        <input type="tel" name="phone" autoComplete="tel" />
      </label>
      <label>
        {order.labels.message}
        <textarea name="message" rows={presetMessage ? 9 : 6} required defaultValue={presetMessage} key={presetMessage} />
      </label>

      <button type="submit" className="btn" disabled={status === 'sending'}>
        {order.submitLabel}
      </button>

      {status === 'sent' && <p className="form__msg form__msg--ok">{order.sentMessage}</p>}
      {status === 'error' && <p className="form__msg form__msg--err">{order.errorMessage}</p>}
    </form>
  )
}
