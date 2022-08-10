import Page from '../components/Page'
import * as gtag from '../lib/gtag'

export default function Lessons() {
    const addToPlaylist = () => {
        gtag.event({
            action: "add_to_playlist",
            category: "elearning",
            label: "Item added",
            value: "Lessons"

        })
    }
  return (
    <Page>
      <h1>Lessons coming soon</h1>
      <ul>
        <div>
            1. Al-Fatiha <br></br>
            <button onClick={() => addToPlaylist()}> Add lesson to playlist</button>
            <br></br>
        </div>
        <br></br>
        2. Al-Baqarah <br></br>  <br></br>
        3. Aal-Imran <br></br> <br></br>
        4. Al-Nisa <br></br> <br></br>
      </ul>
     
    </Page>
  )
}
