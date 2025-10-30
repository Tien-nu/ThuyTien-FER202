import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useMovieState, useMovieDispatch } from "../contexts/MovieContext";

const FilterBar = () => {
  const { genres, movies } = useMovieState();
  const { dispatch, fetchMovies } = useMovieDispatch();

  // ✅ State để lưu dữ liệu gốc không bị mất khi lọc
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    // Lần đầu tiên hoặc khi movies thay đổi → lưu dữ liệu gốc
    if (movies && movies.length > 0) {
      setAllMovies(movies);
    }
  }, [movies]);

  const [filters, setFilters] = useState({
    search: "",
    genre: "",
    sort: "",
    duration: "",
  });

  // ✅ Áp dụng bộ lọc
  const handleFilter = () => {
    let filtered = [...allMovies];

    // Tìm kiếm theo tên phim
    if (filters.search) {
      filtered = filtered.filter((m) =>
        m.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Lọc theo thể loại
    if (filters.genre) {
      filtered = filtered.filter((m) => m.genreId === parseInt(filters.genre));
    }

    // Lọc theo thời lượng
    if (filters.duration === "short") {
      filtered = filtered.filter((m) => parseInt(m.duration) < 90);
    } else if (filters.duration === "long") {
      filtered = filtered.filter((m) => parseInt(m.duration) >= 120);
    }

    // Sắp xếp theo tên
    if (filters.sort === "asc")
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    else if (filters.sort === "desc")
      filtered.sort((a, b) => b.title.localeCompare(a.title));

    dispatch({ type: "SET_MOVIES", payload: filtered });
  };

  // ✅ Reset bộ lọc
  const handleReset = async () => {
    setFilters({ search: "", genre: "", sort: "", duration: "" });
    await fetchMovies(); // Gọi API để lấy lại dữ liệu gốc
  };

  return (
    <Form className="border p-4 mb-4">
      <Row className="align-items-end g-3">
        {/* 🔍 Tìm kiếm */}
        <Col md={3}>
          <Form.Group controlId="search">
            <Form.Label className="fw-semibold">🔍 Tìm kiếm phim</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập tên phim..."
              value={filters.search}
              onChange={(e) =>
                setFilters({ ...filters, search: e.target.value })
              }
            />
          </Form.Group>
        </Col>

        {/* 🎭 Thể loại */}
        <Col md={3}>
          <Form.Group controlId="genre">
            <Form.Label className="fw-semibold">🎭 Thể loại</Form.Label>
            <Form.Select
              value={filters.genre}
              onChange={(e) =>
                setFilters({ ...filters, genre: e.target.value })
              }
            >
              <option value="">Tất cả</option>
              {genres.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>

        {/* ⏱️ Thời lượng */}
        <Col md={2}>
          <Form.Group controlId="duration">
            <Form.Label className="fw-semibold">⏱️ Thời lượng</Form.Label>
            <Form.Select
              value={filters.duration}
              onChange={(e) =>
                setFilters({ ...filters, duration: e.target.value })
              }
            >
              <option value="">Tất cả</option>
              <option value="short">Dưới 90 phút</option>
              <option value="long">Trên 120 phút</option>
            </Form.Select>
          </Form.Group>
        </Col>

        {/* 🔤 Sắp xếp */}
        <Col md={2}>
          <Form.Group controlId="sort">
            <Form.Label className="fw-semibold">🔤 Sắp xếp</Form.Label>
            <Form.Select
              value={filters.sort}
              onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
            >
              <option value="">Mặc định</option>
              <option value="asc">Tên A → Z</option>
              <option value="desc">Tên Z → A</option>
            </Form.Select>
          </Form.Group>
        </Col>

        {/* Nút hành động */}
        <Col md={2} className="d-flex gap-2">
          <Button
            variant="primary"
            onClick={handleFilter}
            className="flex-fill fw-semibold"
          >
            Áp dụng
          </Button>
          <Button
            variant="secondary"
            onClick={handleReset}
            className="flex-fill fw-semibold"
          >
            Reset
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FilterBar;
