import ProductLanding, { productMetadata } from '@/components/ProductLanding'

export function generateMetadata() {
  return productMetadata('no-cms')
}

export default function Page() {
  return <ProductLanding slug="no-cms" />
}
