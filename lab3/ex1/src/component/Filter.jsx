import React, { useState } from "react";
import { Card, Form, Row, Col } from "react-bootstrap";

export default function Filter({ onSearch, onFilter, onSort }) {
  const [searchText, setSearchText] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [sortOption, setSortOption] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    onSearch && onSearch(value);
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setYearFilter(value);
    onFilter && onFilter(value);
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOption(value);
    onSort && onSort(value);
  };

  return (
    <Card className="p-2 my-3 border-0">
      <Row className="align-items-center gx-3 gy-2">
        {/* Search */}
        <Col xs={12} md={4}>
          <Form.Control
            type="text"
            placeholder="Search title or description..."
            value={searchText}
            onChange={handleSearchChange}
          />
        </Col>

        {/* Filter */}
        <Col xs={6} md={4}>
          <Form.Select value={yearFilter} onChange={handleFilterChange}>
            <option value="">Filter by Year</option>
            <option value="<=2000">≤ 2000</option>
            <option value="2001-2015">2001 – 2015</option>
            <option value=">2015">2015</option>
          </Form.Select>
        </Col>

        {/* Sorting */}
        <Col xs={6} md={4}>
          <Form.Select value={sortOption} onChange={handleSortChange}>
            <option value="">Sort by...</option>
            <option value="year-asc">Year ↑</option>
            <option value="year-desc">Year ↓</option>
            <option value="title-asc">Title A → Z</option>
            <option value="title-desc">Title Z → A</option>
            <option value="duration-asc">Duration ↑</option>
            <option value="duration-desc">Duration ↓</option>
          </Form.Select>
        </Col>
      </Row>
    </Card>
  );
}
