import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import AllReviews from "../pages/AllReviews";
import ReviewDetails from "../pages/ReviewDetails";
import AddReview from "../pages/AddReview";
import PrivateRoute from "./PrivateRoute";
import MyReview from "../pages/MyReview";
import UpdateReview from "../pages/UpdateReview";
import ErrorPage from "../pages/ErrorPage";
import MyFavorites from "../pages/MyFavorites";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/all-reviews",
        element: <AllReviews></AllReviews>
      },
      {
        path: "/review-details/:id",
        loader: async ({params}) => fetch(`https://foodians-server.vercel.app/reviews/${params.id}`),
        element: <PrivateRoute><ReviewDetails></ReviewDetails></PrivateRoute>
      },
      {
        path: "/add-review",
        element: <PrivateRoute><AddReview></AddReview></PrivateRoute>
      },
      {
        path: "/my-reviews",
        element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
      },
      {
        path: "/update-review/:id",
        loader: async ({params}) => fetch(`https://foodians-server.vercel.app/reviews/${params.id}`),
        element: <PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>
      },
      {
        path: "/my-favorites",
        element: <PrivateRoute><MyFavorites></MyFavorites></PrivateRoute>
      }
    ],
  },
]);
