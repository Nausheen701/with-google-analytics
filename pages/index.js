import Page from '../components/Page'

export default function Home() {
  return (
    <Page>
      <h1>This is the home page</h1>
      <div>
        <button onClick={() => addToCart()}>Add to cart</button>
      </div>
    </Page>
  )
}
