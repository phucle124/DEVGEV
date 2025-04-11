IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'devgen_db')
BEGIN
    CREATE DATABASE devgen_db;
END;
GO

USE devgen_db;
GO

IF OBJECT_ID('users', 'U') IS NULL
BEGIN
    CREATE TABLE users (
        id INT PRIMARY KEY IDENTITY(1,1),
        username NVARCHAR(50) NOT NULL UNIQUE,
        email NVARCHAR(100) NOT NULL UNIQUE,
        password NVARCHAR(255) NOT NULL,
        full_name NVARCHAR(100),
        created_at DATETIME DEFAULT GETDATE(),
        updated_at DATETIME DEFAULT GETDATE()
    );
END;
GO

IF OBJECT_ID('projects', 'U') IS NULL
BEGIN
    CREATE TABLE projects (
        id INT PRIMARY KEY IDENTITY(1,1),
        name NVARCHAR(100) NOT NULL,
        description NVARCHAR(MAX),
        status NVARCHAR(20) DEFAULT 'active',
        created_by INT FOREIGN KEY REFERENCES users(id),
        created_at DATETIME DEFAULT GETDATE(),
        updated_at DATETIME DEFAULT GETDATE()
    );
END;
GO

IF OBJECT_ID('tasks', 'U') IS NULL
BEGIN
    CREATE TABLE tasks (
        id INT PRIMARY KEY IDENTITY(1,1),
        project_id INT FOREIGN KEY REFERENCES projects(id),
        title NVARCHAR(100) NOT NULL,
        description NVARCHAR(MAX),
        status NVARCHAR(20) DEFAULT 'todo',
        assigned_to INT FOREIGN KEY REFERENCES users(id),
        due_date DATE,
        created_at DATETIME DEFAULT GETDATE(),
        updated_at DATETIME DEFAULT GETDATE()
    );
END;
GO

IF OBJECT_ID('comments', 'U') IS NULL
BEGIN
    CREATE TABLE comments (
        id INT PRIMARY KEY IDENTITY(1,1),
        task_id INT FOREIGN KEY REFERENCES tasks(id),
        user_id INT FOREIGN KEY REFERENCES users(id),
        content NVARCHAR(MAX) NOT NULL,
        created_at DATETIME DEFAULT GETDATE(),
        updated_at DATETIME DEFAULT GETDATE()
    );
END;
GO

IF OBJECT_ID('courses', 'U') IS NULL
BEGIN
    CREATE TABLE courses (
        id INT PRIMARY KEY IDENTITY(1,1),
        name NVARCHAR(100) NOT NULL,
        description NVARCHAR(MAX),
        created_by INT FOREIGN KEY REFERENCES users(id),
        created_at DATETIME DEFAULT GETDATE(),
        updated_at DATETIME DEFAULT GETDATE()
    );
END;
GO

IF OBJECT_ID('exams', 'U') IS NULL
BEGIN
    CREATE TABLE exams (
        id INT PRIMARY KEY IDENTITY(1,1),
        course_id INT FOREIGN KEY REFERENCES courses(id),
        title NVARCHAR(100) NOT NULL,
        date DATE NOT NULL,
        created_at DATETIME DEFAULT GETDATE(),
        updated_at DATETIME DEFAULT GETDATE()
    );
END;
GO
