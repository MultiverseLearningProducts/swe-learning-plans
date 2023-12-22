# Oracle SQL

Oracle SQL is a powerful database query language used to interact with Oracle Database. It allows users to retrieve, manipulate, and manage data stored in relational databases. This learning plan is designed to guide you through the fundamental concepts of Oracle SQL over the course of several sessions. By the end of this plan, you should have a solid foundation in querying databases using Oracle SQL.

## Learning Plan Tasks

1. [Introduction to Databases & Getting Started with Oracle SQL](#1-introduction-to-databases--getting-started-with-oracle-sql)
2. [SQL Queries](#2-sql-queries)
3. [Joining, Grouping, and Summarizing Data](#3-joining-grouping-and-summarizing-data)
4. [Subqueries, Views, and Indexes](#4-subqueries-views-and-indexes)
5. [Advanced SQL Concepts](#5-advanced-sql-concepts)
6. [Optimizing Queries & Best Practices](#6-optimizing-queries--best-practices)
7. [Build Something Using Oracle SQL!](#7-build-something-using-oracle-sql-🔨)

## #checkoutTheDocs 🔍

- **Oracle**: [Oracle SQL Language Reference](https://docs.oracle.com/en/database/oracle/oracle-database/19/lnpls/index.html)
- **Oracle**: [Oracle SQL Developer](https://www.oracle.com/database/sqldeveloper/)
- **W3Schools**: [SQL Quick Reference](https://www.w3schools.com/sql/sql_quickref.asp)

## 1. Introduction to Databases & Getting Started with Oracle SQL

This section covers the following topics:
- **Understand Databases and SQL**: Learn about the fundamental concepts of databases, including what they are, their purpose, and the role of SQL in interacting with them.
- **Install Oracle Database**: Install Oracle Database on your machine.
- **Setup SQL Developer**: Download and install Oracle SQL Developer, a free integrated development environment (IDE) for Oracle Database.
- **Connect to a Database**: Learn how to connect to an Oracle Database using SQL Developer.

By completing these tasks you should have a good understanding of why developers utilize databases, how to install Oracle Database, how to setup Oracle SQL Developer, and connect to your first database.

### Tasks

1. Understand Databases and SQL
    - **Database Fundamentals**: Research the fundamental concepts of databases. 
    - **Why Databases**: Explore what databases are, their purpose, and the role of SQL in interacting with them.
    - **Relational vs. Non-Relational Databases**: Research the difference between relational and non-relational databases and be able to explain the benefits and drawbacks of each type of database.
2. Install Oracle Database
    - **Install Oracle Database**: Navigate to [Oracle Database Downloads](https://www.oracle.com/uk/database/technologies/oracle19c-windows-downloads.html) page and download the most recent version of Oracle Database.
3. Setup SQL Developer
    - **Instal Oracle SQL Developer**: Download and install [Oracle SQL Developer](https://www.oracle.com/database/sqldeveloper/), a free integrated development environment (IDE) for Oracle Database.
4. Connect to a Database
    - **Explore the Getting Started Documentation**: Explore the [Getting Started with Oracle SQL Developer](https://www.oracle.com/webfolder/technetwork/tutorials/obe/db/sqldev/r40/sqldev4.0_GS/sqldev4.0_GS.html) documentation to learn how to setup a Database connection.
    - **Create a Database**: Create an empty Oracle Database.
    - **Connect to a Database**: Connect to an Oracle Database using SQL Developer.

## 2. SQL Queries

This section covers the following topics:
- Learn about SQL concepts of tables, rows, columns, and databases
- Learn how to write basic queries using `SELECT`, `FROM`, and `WHERE` clauses
- Understand how to sort data using `ORDER BY`
- Learn how to limit and paginate data using `LIMIT` and `OFFSET`
- Learn how to filter and sort data using advanced `WHERE` clauses

By completing these tasks you should be comfortable with filtering, sorting, and paginating data using SQL. You can continue to practice and reinforce your understanding by working through practice exercises and applying what you have learned in real-world scenarios.

### Tasks

1. Understand basic concepts such as tables, rows, columns, and databases
    - **Rows and Columns**: Research and read about the basic concepts of SQL such as tables, rows, columns, and databases
    - **`CREATE` and `INSERT INTO`**: Explore how to create a table with the `CREATE` command and how to add rows using the `INSERT INTO` command.
    - **Create a Table**: Practice creating a simple database and table using Oracle SQL. Additionally, be sure to add rows of data into the table you created.

2. Learn how to write basic queries using `SELECT`, `FROM`, and `WHERE` clauses
    - **Essential SQL Queries**: Research and read about the basic syntax of SQL queries, including `SELECT`, `FROM`, and `WHERE` clauses
    - **Practice SQL Queries**: Practice writing basic queries to retrieve data from a table
3. Modifying Data
    - **INSERT Statement**: Learn how to insert new rows into a table using the `INSERT` statement.
    - **UPDATE Statement**: Understand how to modify existing data using the `UPDATE` statement.
    - **DELETE Statement**: Learn how to delete rows from a table using the `DELETE` statement.
4. Understand how to sort data using `ORDER BY`
    - **SQL Operators**: Experiment with different query conditions using operators such as `=`, `<>`, `>`, `<`, `>=`, and `<=`
    - **`ORDER BY` Clause**: Explore the `ORDER BY` clause to sort query results.
5. Learn how to limit and paginate data using `LIMIT` and `OFFSET
    - **`LIMIT` and `OFFSET` Clauses**: Learn how to limit the number of rows returned and implement pagination.
6. Filtering and Sorting Data
    - **Advanced `WHERE` Conditions**: Explore advanced filtering techniques using logical operators, comparisons, and pattern matching.
    - **Sorting with Multiple Columns**: Understand how to sort query results based on multiple columns.
    - **Practice Filtering and Sorting**: Practice writing filtering and sorting queries to retrieve data from a table.

## 3. Joining, Grouping, and Summarizing Data

This section covers the following topics:

- Learn how to join tables using `INNER JOIN`, `LEFT JOIN`, and `RIGHT JOIN`
- Understand how to group data using `GROUP` BY
- Learn how to filter grouped data using `HAVING`

By completing these tasks you should be comfortable with joining tables and grouping and summarizing data in SQL. You can continue to practice and reinforce your understanding by working through practice exercises and applying what you have learned in real-world scenarios.

### Tasks

1. Learn how to join tables using `INNER JOIN`, `LEFT JOIN`, and `RIGHT JOIN`

   - Understand the concept of table joins and the different types of joins available in SQL
   - Practice joining two tables using `INNER JOIN`, `LEFT JOIN`, and `RIGHT JOIN` clauses
   - Learn how to join more than two tables using nested joins

2. Understand how to group data using `GROUP BY`

   - Understand the concept of grouping data in SQL
   - Practice using the `GROUP BY` clause to group data based on one or more columns
   - Learn how to use aggregate functions such as `SUM`, `COUNT`, `AVG`, `MIN`, and `MAX` to summarize data within groups
3. Learn how to filter grouped data using `HAVING`

   - Understand how to use the `HAVING` clause to filter data based on aggregate functions
   - Practice combining `GROUP BY` and `HAVING` clauses to filter and summarize data

## 4. Subqueries, Views, and Indexes

This section covers the following topics:
- Learn about single-row, multi-row, and correlated subqueries to get data to use in a main query.
- Learn how to create a view using the `CREATE VIEW` command
- Learn about how indexes and how they can be used to optimize query performance.

By completing these tasks you should be comfortable with creating subqueries, views, and indexes in SQL. You can continue to practice and reinforce your understanding by working through practice exercises and applying what you have learned in real-world scenarios.

### Tasks

1. Subqueries
    - Research what SQL subqueries are and be able to explain the use cases for single-row, multi-row, and correlated subqueries.
    - Create single-row subqueries to retrieve data from one table and use it in the main query.
    - Create multi-row subqueries that return multiple rows for comparison.
    - Create correlated subqueries that reference columns from the outer query.

2. Create Views
    - Research the concept of views in SQL and their utility when working with a SQL database.
    - Create a virtual table using the `CREATE VIEW` statement.

3. Indexes
    - Research what SQL indexes are and be able to explain their utility when working with SQL databases
    - Create indexes in a table using the `CREATE INDEX` command and query data in a table using these index values.

## 5. Advanced SQL Concepts

This section covers the following topics:
- Learn about analytic functions
- Learn about how to partition data
- Learn about materialized views

By completing these tasks you should have a good understanding of some advanced SQL concepts and understand the use cases for analytic functions, data partition, and materialized views.

### Tasks

1. Analytic Functions
    - Research [analytic functions](https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/Analytic-Functions.html#GUID-527832F7-63C0-4445-8C16-307FA5084056) and understand their use cases.
    - Create analytic functions to compute an aggregate value based on a group of rows.

2. Partitioning Data
    - Research [Oracle Partitioning](https://www.oracle.com/database/technologies/partitioning.html) and explain how it can be used to improve query performance.

3. Materialized Viewed
    - Learn about materialized views and their use in storing precomputed results.
    - Create a materialized view in an an Oracle database using [`CREATE MATERIALIZED VIEW`](https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/CREATE-MATERIALIZED-VIEW.html#GUID-EE262CA4-01E5-4618-B659-6165D993CA1B)

## 6. Optimizing Queries & Best Practices

This section covers the following topics:
- Learn various techniques to optimize SQL queries
- Analyze past SQL queries against SQL coding best practices
- Learn about database design principles and apply these principles in new database creation.

By completing these tasks you should have a good understanding of techniques to optimize SQL queries, how to align SQL queries to coding best practices, and how to design SQL databases that are both efficient and scalable.

### Tasks

1. Query Optimization Techniques
    - Research why query optimization is important for programmers working in SQL databases
    - Understand techniques for optimizing SQL queries, including
        - Indexing
        - Query rewriting
        - Analyzing execution plans
2. SQL Coding Standards
    - Research SQL coding standards including how to write clean, efficient, and maintainable SQL code.
    - Analyze SQL code you have previously written and align this code to SQL coding standards.
3. Database Design Principles
    - Understand the principles of good database design to create efficient and scalable databases.
    - Design a database using these database design principles 

## 7. Build Something Using Oracle SQL! 🔨

Here are a few project ideas that you can work on to practice your Oracle SQL skills:

- **Movie or Book Database**: Create a database of your favorite movies or books with details such as title, author/ director, release year, genre, and rating. Write SQL queries to retrieve specific data, such as all the movies released in a particular year or all the books in a specific genre.
- **E-Commerce Database**: Build a simple e-commerce website database that stores information about customers, orders, and products. Write SQL queries to retrieve customer order history or to track inventory levels.
- **News Database**: Design a database for a blog or news website that stores articles, authors, and comments. Write SQL queries to display the most popular articles, show recent comments, or retrieve articles by a specific author.
- **Social Media Member Management**: Create a social media database that stores information about users, posts, and comments. Write SQL queries to display a user's posts, retrieve all comments on a post, or show the most active users.
- **Sports Information Database**: Build a database for a sports team or league that stores information about players, games, and scores. Write SQL queries to retrieve information about a specific game, show the top-scoring players, or display a team's win-loss record.

## Next Steps 🚀

- **Real-world Projects**: Apply your skills to real-world projects or contribute to open-source projects.
- **Certification**: Consider pursuing Oracle SQL certifications to validate your skills.
- **Explore Advanced Topics**: Dive deeper into advanced Oracle SQL topics such as PL/SQL, performance tuning, and database administration.