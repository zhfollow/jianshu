import React, {
	Component,
	Fragment
} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './pages/home/index.js';
import Detail from './pages/detail/index.js'
import Login from './pages/login/index.js'
import {
	GlobalStyle
} from './style.js';
import {
	GlobaliconStyle
} from './statics/iconfont/iconfont.js';
import Header from './common/header/index.js';
import store from './store/index.js'
class App extends Component {
	render() {
		return (
			<Fragment>
				<Provider store={store}>
    			<GlobalStyle/>
    			<GlobaliconStyle/>
    			<BrowserRouter>
                    <Header />
    				<Route path='/' exact component={Home}>
    				</Route>
    				<Route path='/detail' exact component={Detail}>
    				</Route>
                    <Route path='/login' exact component={Login}>
                    </Route>
    			</BrowserRouter>
    			</Provider>
    		</Fragment>
		);
	}

}

export default App;