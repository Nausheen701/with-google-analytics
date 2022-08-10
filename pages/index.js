import Page from '../components/Page'
import * as gtag from '../lib/gtag'

export default function Home() {
const addToCart = () => {
  gtag.event({
    action: "add_to_cart", 
    category: "ecommerce", 
    label: "Item added", 
    value: "Lessons"

  })
}

  return (
    <Page>
      <h1>This is the home page</h1>
      <div>
        <button onClick={() => addToCart()}>Add to cart</button>
      </div>
    </Page>
  )
}
