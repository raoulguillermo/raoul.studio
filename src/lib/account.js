// The signed-in user, for server pages. Server-only.

import { redirect } from 'next/navigation'
import { headers } from 'next/headers'

import { poofy } from './poofy'
import { getToken } from './session'

// null when signed out or the token has expired.
export async function getUser() {
  const token = await getToken()
  if (!token) return null
  const { status, data } = await poofy('/api/me', { token })
  return status === 200 && data.user ? { token, user: data.user } : null
}

// Signed out → the login page, coming back to this page afterwards.
export async function requireUser() {
  const session = await getUser()
  if (session) return session
  const h = await headers()
  const path = h.get('x-path') || '/account'
  const query = h.get('x-search') || ''
  redirect(`/login?next=${encodeURIComponent(path + query)}`)
}
