import "./App.css"
import { Route, Switch } from "react-router-dom"
import Cities from "./Pages/Cities"
import Blogs from "./Pages/Blogs"
import Blogdetail from "./Pages/BlogDetail"

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/" component={Cities} />
          <Route exact path="/blogs/:city_id" component={Blogs} />
          <Route exact path="/blogdetail/:post_id" component={Blogdetail} />
        </Switch>
      </main>
    </div>
  )
}

export default App
