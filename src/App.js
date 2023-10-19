import { Route, Routes } from 'react-router'
import {Brands, Categories, Dashboard, Firms, Login, Products, Profile, Purchases, Register, Sales} from './pages'
import Layout from './components/Layout/Layout'
import PrivateRouter from './PrivateRouter'
import { geocode } from './Gecode'


const App = () => {


geocode('One Apple Park Way Cupertino CA 95014')

  return (

    <>
    
      
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path='/stock' element={<PrivateRouter/>}>
          <Route path='/stock' element={<Layout/>}>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='brands' element={<Brands/>}/>
            <Route path='firms' element={<Firms/>}/>
            <Route path='products' element={<Products/>}/>
            <Route path='sales' element={<Sales/>}/>
            <Route path='categories' element={<Categories/>}/>
            <Route path='profile' element={<Profile/>}/>
            <Route path='purchases' element={<Purchases/>}/>
          </Route>
        </Route>
      </Routes>

    </>
  )
}

export default App