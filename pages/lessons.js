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
            <button onClick={() => addToPlaylist()}> Add lesson to your playlist</button>
            <br></br>
        </div><br></br>
        <div>
            2. Al-Baqarah <br></br>
            <button onClick={() => addToPlaylist()}> Add lesson to your playlist</button>
            <br></br>
        </div><br></br>
        <div>
            3. Aal-Imran <br></br>
            <button onClick={() => addToPlaylist()}> Add lesson to your playlist</button>
            <br></br>
        </div><br></br>
        <div>
           4. Al-Nisa <br></br>
            <button onClick={() => addToPlaylist()}> Add lesson to your playlist</button>
            <br></br>
        </div><br></br>
       
      </ul>
     
    </Page>
  )
}
