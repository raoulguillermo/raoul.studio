import ProductLanding, { productMetadata } from '@/components/ProductLanding'

export function generateMetadata() {
  return productMetadata('poofy')
}

export default function Page() {
  return <ProductLanding slug="poofy" />
}
