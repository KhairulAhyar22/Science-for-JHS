import Drawer from "../utils/drawer";
import UrlParser from "../routes/url-parser";
import routes from "../routes/routes";

class App {
  constructor({ button, drawer, content }) {
    this.Button = button;
    this.Drawer = drawer;
    this.Content = content;

    this.appShell();
  }

  appShell() {
    Drawer.init({
      button: this.Button,
      drawer: this.Drawer,
      content: this.Content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this.Content.innerHTML = await page.render();
  }
};
 
export default App;