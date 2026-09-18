import ProductLanding, { productMetadata } from '@/components/ProductLanding'

export function generateMetadata() {
  return productMetadata('voice-ai')
}

export default function Page() {
  return <ProductLanding slug="voice-ai" />
}
