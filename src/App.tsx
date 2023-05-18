
import { TableVoladura } from "./componentes/TablaVoladura";
import { Navigation } from "./router/Navigation";
import './styles/styles.css'
import './index.css'
import { VoladuraProvider } from "./context/VoladuraContext";

const AppState= ({children}:any)=>{
  return (
    <VoladuraProvider>
      {children}
    </VoladuraProvider>
  )
}
function App() {
  return (
    <AppState>
    <Navigation/>
    </AppState>
  );
}

export default App;
