import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import CategorySelectionPage from '@/components/pages/CategorySelectionPage';
import ProfilePage from '@/components/pages/ProfilePage';
import EasyAssessmentPage from '@/components/pages/EasyAssessmentPage';
import EasyFeedbackPage from '@/components/pages/EasyFeedbackPage';
import MediumAssessmentPage from '@/components/pages/MediumAssessmentPage';
import MediumFeedbackPage from '@/components/pages/MediumFeedbackPage';
import DifficultAssessmentPage from '@/components/pages/DifficultAssessmentPage';
import DifficultFeedbackPage from '@/components/pages/DifficultFeedbackPage';
import FinalReportPage from '@/components/pages/FinalReportPage';

// Layout component that includes ScrollToTop
function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        routeMetadata: {
          pageIdentifier: 'home',
        },
      },
      {
        path: "category",
        element: <CategorySelectionPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "assessment/easy",
        element: <EasyAssessmentPage />,
      },
      {
        path: "assessment/easy/feedback",
        element: <EasyFeedbackPage />,
      },
      {
        path: "assessment/medium",
        element: <MediumAssessmentPage />,
      },
      {
        path: "assessment/medium/feedback",
        element: <MediumFeedbackPage />,
      },
      {
        path: "assessment/difficult",
        element: <DifficultAssessmentPage />,
      },
      {
        path: "assessment/difficult/feedback",
        element: <DifficultFeedbackPage />,
      },
      {
        path: "assessment/final-report",
        element: <FinalReportPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
