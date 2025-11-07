import { Card, Form, Row, Col, Button } from 'react-bootstrap';
import { usePayments } from '../contexts/PaymentContext';
import React, { useState, useEffect } from "react";

const FilterBar = () => {
    // Giả định có state quản lý filter/sort được truyền từ PaymentContext
    const { dispatch, fetchPayments, payments} = usePayments(); 
    const [allPayments, setAllPayments] = useState([]);

    useEffect(() => {
        // Lần đầu tiên hoặc khi movies thay đổi → lưu dữ liệu gốc
        if (payments && payments.length > 0) {
        setAllPayments(payments);
        }
    }, [payments]);

    const [filters, setFilters] = useState({
        search: "",
        semester: "",
        courseName: "",
        amount: "",
    });

    const handleFilter = () => {
        let filtered = [...allPayments];

        // Tìm kiếm theo tên phim
        if (filters.search) {
        filtered = filtered.filter((m) =>
            m.courseName.toLowerCase().includes(filters.search.toLowerCase())
        );
        }

        // Lọc theo thể loại
        if (filters.semester) {
            filtered = filtered.filter(
                (m) =>
                m.semester &&
                m.semester.toLowerCase().includes(filters.semester.trim().toLowerCase())
            );
        }



        // Lọc theo thời lượng
        if (filters.courseName) {
            filtered = filtered.filter(
                (m) => m.courseName.toLowerCase() === filters.courseName.toLowerCase()
            );
        }

        // Sắp xếp theo tên
        if (filters.sort === "course-asc") {
            filtered.sort((a, b) => a.courseName.localeCompare(b.courseName));
            } 
            else if (filters.sort === "course-desc") {
            filtered.sort((a, b) => b.courseName.localeCompare(a.courseName));
            } 
            else if (filters.sort === "date-asc") {
            filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
            } 
            else if (filters.sort === "date-desc") {
            filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
            } 
            else if (filters.sort === "amount-asc") {
            filtered.sort((a, b) => a.amount - b.amount);
            } 
            else if (filters.sort === "amount-desc") {
            filtered.sort((a, b) => b.amount - a.amount);
        }

        dispatch({ type: "SET_PAYMENTS", payload: filtered });
    };

  // ✅ Reset bộ lọc
  const handleReset = async () => {
    setFilters({ search: "", semester: "", courseName: "", amount: "" });
    await fetchPayments(); // Gọi API để lấy lại dữ liệu gốc
  };

    return (
        <Card className="mb-4 shadow-sm">
            <Card.Header as="h5">Bộ lọc, Tìm kiếm & Sắp xếp</Card.Header>
            <Card.Body>
                <Form>
                    <Row className="g-3">
                        {/* Search by semester or course name  */}
                        <Col xs={12} lg={4}>
                            <Form.Group>
                                <Form.Label>Tìm kiếm (Semester/Course)</Form.Label>
                                <Form.Control type="text" placeholder="Search by semester or course name" 
                                value={filters.search}
                                onChange={(e) =>
                                    setFilters({ ...filters, search: e.target.value })
                                }
                                />
                            </Form.Group>
                        </Col>
                        
                        {/* Filter by Semester  */}
                        <Col xs={6} md={4} lg={2}>
                            <Form.Group>
                                <Form.Label>Lọc theo Semester</Form.Label>
                                <Form.Select
                                    value={filters.semester}
                                    onChange={(e) =>
                                        setFilters({ ...filters, semester: e.target.value })
                                    }
                                    >
                                    <option value="">All Semesters</option>
                                    <option value="Spring">Spring</option>
                                    <option value="Summer">Summer</option>
                                    <option value="Fall">Fall</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>

                        {/* Filter by Course name */}
                        <Col xs={6} md={4} lg={2}>
                            <Form.Group>
                                <Form.Label>Lọc theo Course</Form.Label>
                                <Form.Select
                                    value={filters.courseName}
                                    onChange={(e) =>
                                        setFilters({ ...filters, courseName: e.target.value })
                                    }
                                    >
                                    <option value="">All Courses</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="Database Systems">Database Systems</option>
                                    <option value="Mobile Programming">Mobile Programming</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        
                        {/* Sorting */}
                        <Col xs={12} md={4} lg={4}>
                            <Form.Group>
                                <Form.Label>Sắp xếp theo:</Form.Label>
                                <Form.Select
                                    value={filters.sort}
                                    onChange={(e) =>
                                        setFilters({ ...filters, sort: e.target.value })
                                    }
                                    >
                                    <option value="">-- Select --</option>
                                    <option value="course-asc">Course name ascending</option>
                                    <option value="course-desc">Course name descending</option>
                                    <option value="date-asc">Date ascending</option>
                                    <option value="date-desc">Date descending</option>
                                    <option value="amount-asc">Amount ascending</option>
                                    <option value="amount-desc">Amount descending</option>
                                </Form.Select>

                            </Form.Group>
                        </Col>
                        {/* Apply & Reset buttons */}
                        <Col xs={12} lg={12} className="d-flex gap-2 mt-3">
                            <Button variant="primary" onClick={handleFilter}>
                                Áp dụng bộ lọc
                            </Button>
                            <Button variant="secondary" onClick={handleReset}>
                                Reset
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default FilterBar;
