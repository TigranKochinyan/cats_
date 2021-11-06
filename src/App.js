import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";

import SideBar from './components/SideBar';
import ImagesContainer from './components/IamagesContainer';

import './App.scss';

function App() {
  return (
    <div className="App">
		<Router>
			<SideBar />
			<Routes>
				<Route exact path="/" element={<ImagesContainer />} />
				<Route exact path="/:categoryName" element={<ImagesContainer />} />
			</Routes>
		</Router>
    </div>
  );
}

export default App;
