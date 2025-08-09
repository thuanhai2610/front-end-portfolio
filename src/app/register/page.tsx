'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    alert(`Register with Email: ${email} and Password: ${password}`)
    // TODO: call API register here
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          required
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Register
        </button>
      </form>
      <p className="mt-4">
        Already have an account?{' '}
        <Link href="/login"
          className="text-blue-600 hover:underline">Login here
        </Link>
      </p>
    </div>
  )
}
