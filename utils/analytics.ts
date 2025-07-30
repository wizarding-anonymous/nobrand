export async function trackEvent(event: string, data?: any) {
  try {
    // Отправка в наш API
    await fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event,
        data,
        domain: window.location.hostname,
      }),
    })

    // Яндекс.Метрика
    if (typeof window !== 'undefined' && (window as any).ym) {
      (window as any).ym(
        process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID,
        'reachGoal',
        event,
        data
      )
    }
  } catch (error) {
    console.error('Analytics error:', error)
  }
}
