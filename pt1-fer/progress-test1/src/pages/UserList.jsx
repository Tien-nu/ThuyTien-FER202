import React, { useEffect, useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import UserFilter from '../components/UserFilter';
import UserTable from '../components/UserTable';
import * as api from '../services/api';
import { useAuth } from '../contexts/AuthContext.jsx';

function UserList() {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
    const { user } = useAuth();
    const currentUser = user;
  useEffect(() => {
    const fetchUsers = async () => {
      const data = await api.getUsers();
      setUsers(data);
      setFiltered(data);
    };
    fetchUsers();
  }, []);

  const handleFilter = (criteria) => {
    const { search, role, status } = criteria;
    let result = [...users];

    if (search) {
      result = result.filter(
        (u) =>
          u.username.toLowerCase().includes(search.toLowerCase()) ||
          u.fullName.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (role && role !== 'all') result = result.filter((u) => u.role === role);
    if (status && status !== 'all') result = result.filter((u) => u.status === status);

    setFiltered(result);
  };

  const handleBan = (id) => {
  // Tìm user bị chọn
    const targetUser = users.find((u) => u.id === id);

    // Nếu người bị chọn là admin → không cho phép
    if (targetUser.role === 'admin') {
        alert('❌ Không thể ban tài khoản admin khác.');
        return;
    }

    // Nếu là chính mình → không cho phép
    if (targetUser.id === currentUser.id) {
        alert('❌ Bạn không thể tự ban chính mình.');
        return;
    }

    // Nếu hợp lệ thì cập nhật trạng thái
    setUsers((prev) =>
        prev.map((u) => (u.id === id ? { ...u, status: 'banned' } : u))
    );
    setFiltered((prev) =>
        prev.map((u) => (u.id === id ? { ...u, status: 'banned' } : u))
    );

    alert(`✅ Đã ban tài khoản: ${targetUser.username}`);
};


  return (
    <Container className="mt-4">
      <Card>
        <Card.Header><h4>User Management</h4></Card.Header>
        <Card.Body>
          <UserFilter onFilter={handleFilter} />
          <UserTable users={filtered} onBan={handleBan} currentUser={user} />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default UserList;
