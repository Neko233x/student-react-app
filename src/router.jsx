import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import StudentDetailPage from "./pages/StudentDetailPage";
import StudentSumbitPage from "./pages/StudentSumbitPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/student/:id",
    element: <StudentDetailPage />,
  },
  {
    path: "/student/submit",
    element: <StudentSumbitPage />,
  },
]);
