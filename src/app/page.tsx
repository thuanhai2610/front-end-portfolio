import Link from 'next/link'
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to Next.js Home Page</h1>
      <div className="space-x-4">
        <Link href="/login"
           className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Login
        </Link>
        <Link href="/register"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Register
        </Link>
      </div>
    </div>
  )
}
