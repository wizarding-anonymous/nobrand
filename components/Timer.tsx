import { useEffect, useState } from 'react'
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns'

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const launchDate = new Date(process.env.NEXT_PUBLIC_LAUNCH_DATE || '2024-06-01T00:00:00Z')

    const updateTimer = () => {
      const now = new Date()
      
      if (now >= launchDate) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = differenceInDays(launchDate, now)
      const hours = differenceInHours(launchDate, now) % 24
      const minutes = differenceInMinutes(launchDate, now) % 60
      const seconds = differenceInSeconds(launchDate, now) % 60

      setTimeLeft({ days, hours, minutes, seconds })
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          До старта продаж
        </h2>
        
        <div className="flex justify-center gap-4 md:gap-8">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="text-center">
              <div className="bg-gray-900 rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[120px] glow">
                <div className="text-3xl md:text-5xl font-bold text-accent">
                  {value.toString().padStart(2, '0')}
                </div>
              </div>
              <div className="mt-2 text-sm md:text-base text-gray-400">
                {unit === 'days' && 'Дней'}
                {unit === 'hours' && 'Часов'}
                {unit === 'minutes' && 'Минут'}
                {unit === 'seconds' && 'Секунд'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
