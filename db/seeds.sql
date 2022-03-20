INSERT INTO department (name)
VALUES
('Management'),
('Financial'),
('Administration'),
('Sales'),
('Humanities');

INSERT INTO role (title, salary, department_id)
VALUES
('General Manager', 110000, 1),
('Lead Sales', 70000, 4),
('Accountant', 80000, 2),
('Receptionist', 50000, 3),
('Human Resource Manager', 75000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Guy', 'One', 1, NULL),
('Girl', 'Two', 2, 1),
('Guy', 'Three', 3, 1),
('Girl', 'Four', 4, 1),
('Guy', 'Five', 5, 1);