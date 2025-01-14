import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import MainLayout from './layouts/MainLayout.jsx';
import Home from './Pages/Home.jsx';
import ListedBook from './Pages/ListedBook.jsx';
import ReadBook from './Pages/ReadBook.jsx';
import BookDetails from './components/BookDetails.jsx';
import Gallery from './Pages/Gallery.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './Pages/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/listedBooks",
        element:<ListedBook></ListedBook>,
      },
      {
        path: "/pagesToRead",
        element:<ReadBook></ReadBook>,
      },
      {
        path: "/bookDetails/:id",
        element:<BookDetails></BookDetails>,
      },
      {
        path: "/bookGallery",
        element:<Gallery></Gallery>,
      },
      {
        path: "/about",
        element:<About></About>,
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer/>,
    <RouterProvider router={router} />
  </React.StrictMode>,
)
