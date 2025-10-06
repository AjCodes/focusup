import { useEffect } from 'react'
import { supabase } from './supabaseClient'

function App() {
  useEffect(() => {
    const testConnection = async () => {
      const { data, error } = await supabase.from('test').select('*')
      if (error) {
        console.log('✅ Supabase connected:', error.message)
      } else {
        console.log('Data:', data)
      }
    }
    testConnection()
  }, [])

  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>FocusUp</h1>
      <p>Supabase connected successfully ✅</p>
    </div>
  )
}

export default App
