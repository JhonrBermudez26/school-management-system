// resources/js/components/panels/EstudiantesPanel.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
`;

const Th = styled.th`
  padding: 12px;
  background: #2c3e50;
  color: white;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background: #2c3e50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #34495e;
  }
`;

export default function EstudiantesPanel() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', grade: '', group: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const response = await axios.get('/api/students');
    setStudents(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`/api/students/${editingId}`, form);
    } else {
      await axios.post('/api/students', form);
    }
    setForm({ name: '', email: '', grade: '', group: '' });
    setEditingId(null);
    fetchStudents();
  };

  const handleEdit = (student) => {
    setForm(student);
    setEditingId(student.id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/students/${id}`);
    fetchStudents();
  };

  return (
    <div>
      <h2>Gestión de Estudiantes</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Nombre"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <Input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <Input
          placeholder="Grado"
          value={form.grade}
          onChange={(e) => setForm({ ...form, grade: e.target.value })}
        />
        <Input
          placeholder="Grupo"
          value={form.group}
          onChange={(e) => setForm({ ...form, group: e.target.value })}
        />
        <Button type="submit">{editingId ? 'Actualizar' : 'Crear'}</Button>
      </Form>
      <Table>
        <thead>
          <tr>
            <Th>Nombre</Th>
            <Th>Email</Th>
            <Th>Grado</Th>
            <Th>Grupo</Th>
            <Th>Acciones</Th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <Td>{student.name}</Td>
              <Td>{student.email}</Td>
              <Td>{student.grade}</Td>
              <Td>{student.group}</Td>
              <Td>
                <Button onClick={() => handleEdit(student)}>Editar</Button>
                <Button onClick={() => handleDelete(student.id)}>Eliminar</Button>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}