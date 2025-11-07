//AppRoutes.js định nghĩa các route cho ứng dụng sử dụng React Router
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx'; // Import useAuth
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage'; 
import { PaymentProvider } from '../contexts/PaymentContext.jsx';
import UserList from '../pages/UserList.jsx';
// Component để bảo vệ các route cần xác thực
const PrivateRoute = ({ children }) => {
    // Lấy trực tiếp isAuthenticated từ useAuth()
    const { isAuthenticated } = useAuth(); 
    
    // Nếu chưa đăng nhập, chuyển hướng đến /login
    return isAuthenticated ? children : <Navigate to="/login" />;
};

const AdminRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (user?.role !== 'admin') {
    // ⚠️ Nếu không phải admin, quay lại trang chủ
    return <Navigate to="/home" />;
  }

  return children;
};

const AppRoutes = () => {
    return (
        <Router>
            <PaymentProvider>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" replace />} />
                    
                    <Route path="/login" element={<LoginPage />} />
                    
                    <Route 
                        path="/home" 
                        element={
                            <PrivateRoute>
                                <DashboardPage /> 
                            </PrivateRoute>
                        } 
                    />
                    
                    <Route
                        path="/users"
                        element={
                        <AdminRoute>
                            <UserList />
                        </AdminRoute>
                        }
                    />
                                
                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
            </PaymentProvider>
        </Router>
    );
};

export default AppRoutes;
