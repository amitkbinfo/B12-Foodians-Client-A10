import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import AllReviews from "../pages/AllReviews";
import ReviewDetails from "../pages/ReviewDetails";
import AddReview from "../pages/AddReview";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
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
        loader: async ({params}) => fetch(`http://localhost:3000/reviews/${params.id}`),
        element: <ReviewDetails></ReviewDetails>
      },
      {
        path: "/add-review",
        element: <PrivateRoute><AddReview></AddReview></PrivateRoute>
      }
    ],
  },
]);
