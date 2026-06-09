import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Auth & Public Pages
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import AdminDashboard from "./Pages/AdminDashboard";
import MainLayout from "./layouts/MainLayout";
import Companies from "./Pages/Companies";

// Developer Base Layout
import DeveloperLayout from "./Pages/Developer/DeveloperLayout";

import ProtectedRoute from "./components/ProtectedRoute";

// Developer Sub-Pages
import Dashboard from "./Pages/Developer/Dashboard";
import CompaniesPage from "./Pages/Developer/CompaniesPage";
import JobsPage from "./Pages/Developer/JobsPage";
import ApplicationsPage from "./Pages/Developer/ApplicationsPage"; 
import AppliedJobs from "./Pages/AppliedJobs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* General User Routes (wrapped in MainLayout for sidebar) */}
       <Route
  element={
    <ProtectedRoute>
      <MainLayout />
    </ProtectedRoute>
  }
>
  <Route path="/home" element={<Home />} />
  <Route path="/companies" element={<Companies />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/applied-jobs" element={<AppliedJobs />} />
</Route>
<Route
  path="/admin" element={<ProtectedRoute><AdminDashboard /> </ProtectedRoute>}
/>
<Route
  path="/dashboard"
  element={<ProtectedRoute><DeveloperLayout /></ProtectedRoute>}
>          <Route index element={<Dashboard />} />
          <Route path="companies" element={<CompaniesPage />} />
          <Route path="jobs" element={<JobsPage />} />
          <Route path="applications" element={<ApplicationsPage />} />
        </Route>

        {/* Fallback Route: Redirect any unknown URLs to login */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;