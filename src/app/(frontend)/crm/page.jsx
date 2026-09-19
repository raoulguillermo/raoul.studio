import ProductLanding, { productMetadata } from '@/components/ProductLanding'

export function generateMetadata() {
  return productMetadata('crm')
}

export default function Page() {
  return <ProductLanding slug="crm" />
}
