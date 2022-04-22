import { AppUI } from './AppUI.jsx';
import { Provider } from '../Context';

function App() {
    return (
        <Provider>
            <AppUI />
        </Provider>
    );
}

export default App;
