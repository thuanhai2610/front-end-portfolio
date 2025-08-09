'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoanding ] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
const api = 'http://localhost:3001'
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
     setLoanding(true);
     setError('');
     try {
      const res = await fetch(`${api}/auth/login`, {
        method: 'POST',
        headers : {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify({email, password})
      })
      const data = await res.json();
      console.log(data)
      if (res.ok) {
        localStorage.setItem('token', data.access_token)
        router.push('/dashboard');
      } else {
        setError(data.message || 'Login failed');
      }
     } catch (error) {
      setError('Network error. Please try again!')
      console.error('Login error :', error);
     } finally {
      setLoanding(false);
     }

  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3 w-80">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
      <p className="mt-4">
        Don&apos;t have an account?{' '}
        <Link href="/register" className="text-blue-600 hover:underline">Register here
        </Link>
      </p>
    </div>
  )
}
