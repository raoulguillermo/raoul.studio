import { MongoClient } from 'mongodb'

const uri = process.env.DATABASE_URL

if (!uri) {
  throw new Error('DATABASE_URL is not set — cannot connect to MongoDB.')
}

// Reuse a single client across hot reloads in dev and across invocations in prod.
let clientPromise

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = new MongoClient(uri).connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  clientPromise = new MongoClient(uri).connect()
}

export default clientPromise
