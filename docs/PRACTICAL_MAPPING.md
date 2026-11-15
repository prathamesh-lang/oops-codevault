# OOPS CodeVault — Practical Content Structure & Source Mapping

This document defines the authoritative 10-question sequence from the syllabus document (`OOP- Practical Problem Statement(1).pdf`), mapping each practical to its verified C++ source file, core concepts, and educational components.

---

## Authoritative Question Mapping

| No. | Canonical Title | Category | Original Workspace File | Downloadable Source (`public/codes/`) | Verified Baseline |
| :---: | :--- | :--- | :--- | :--- | :---: |
| **Q1** | Complex Number using Operator Overloading | Operator Overloading | `Q1_Complex_Number.cpp` | `Q1_Complex_Number.cpp` | Preserved |
| **Q2** | Staff Management & Salary Slip Calculation | Class Design & Records | `Practical2.cpp` | `Q2_Staff_Salary_Slip.cpp` | Preserved |
| **Q3** | Publication, Book & Tape with Exception Handling | Inheritance & Exceptions | *Missing in local root (was duplicate Matrix)* | `Q3_Publication_Book_Tape.cpp` | Implemented per PDF |
| **Q4** | Matrix Abstract Data Type (ADT) | ADT & 2D Arrays | `Q4_Matrix_ADT.cpp` (and `Exp-3.cpp`) | `Q4_Matrix_ADT.cpp` | Preserved |
| **Q5** | Constructors, Destructors & Multiple Inheritance | Constructors & Destructors | `Exp-5.cpp` (and `Exp-5.cpp.txt`) | `Q5_Constructors_Multiple_Inheritance.cpp` | Preserved |
| **Q6** | File Handling with Stream Classes (`ofstream`/`ifstream`) | File Handling | `Exp-6.cpp` | `Q6_File_Handling.cpp` | Preserved |
| **Q7** | Four Types of Inheritance Demonstration | Inheritance | `Exp-7.cpp` | `Q7_Types_of_Inheritance.cpp` | Preserved |
| **Q8** | Generic Library Management System using Class Templates | Templates & Generics | `Exp-8.cpp` | `Q8_Library_Class_Template.cpp` | Preserved |
| **Q9** | State Population Lookup using Map Associative Container | STL Containers | `Exp-9.cpp` | `Q9_Map_State_Population.cpp` | Preserved |
| **Q10** | ATM Machine Simulation with Exception Handling | Exception Handling | `Exp-10.cpp` | `Q10_ATM_Exception_Handling.cpp` | Preserved |

---

## Detail Breakdown of Each Practical

### Q1 — Complex Number using Operator Overloading
- **Problem Statement**: Implement a class Complex which represents the Complex Number data type. Implement the following Constructor (including a default constructor which creates the complex number 0+0i). Overload operator+ to add two complex numbers. Overload operator* to multiply two complex numbers. Overload operators << and >> to print and read Complex Numbers.
- **Concepts**: Operator Overloading, Classes and Objects, Default Constructor, Stream Operators `<<` and `>>`, Friend Functions.
- **Operations**: Default Initialization, Stream Extraction `>>`, Stream Insertion `<<`, Arithmetic `+`, Arithmetic `*`.

### Q2 — Staff Management and Salary Slip
- **Problem Statement**: To create a class staff having fields: Staff-id, name, salary and functions accept() and display(). Calculate DA=25% of basic salary, HRA=800, I-tax=15% of basic salary. Display the pay slip using appropriate output format. 1) To accept the data 2) To display the data 3) To sort the data by name.
- **Concepts**: Class Design, Data Encapsulation, Array of Objects, Salary Calculations, Bubble Sort by String Name, Formatted I/O with `<iomanip>`.
- **Formulas**: `DA = Bs * 0.25`, `HRA = 800`, `IT = Bs * 0.15`, `Net Salary = Bs + DA + HRA - IT`.

### Q3 — Publication, Book and Tape
- **Problem Statement**: Imagine a publishing company which does marketing for book and audio cassette versions. Create a class publication that stores the title (a string) and price (type float) of publications. From this class derive two classes: book which adds a page count (type int) and tape which adds a playing time in minutes (type float). Write a program that instantiates the book and tape class, allows user to enter data and displays the data members. If an exception is caught, replace all the data member values with zero values.
- **Concepts**: Hierarchical Inheritance, Protected Access Specifier, Exception Handling (`try`, `throw`, `catch`), Zero-Reset on Error.
- **Validation**: Price > 0, Page Count > 0, Playing Time > 0. Catch resets title to `""`, price to `0.0`, and respective derived attributes to `0`.

### Q4 — Matrix ADT
- **Problem Statement**: Write a C++program to implement the matrix ADT using a class. The operations supported by this ADT are: a. Reading a matrix. b. Addition of matrices. c. Printing a matrix. d. Subtraction of matrices. e. Multiplication of matrices.
- **Concepts**: Abstract Data Type, 2D Arrays, Dimension Validation (bounds checking between 1 and 5), Matrix Arithmetic Compatibility Rules.
- **Rules**: Addition/Subtraction requires `row == m.row && col == m.col`. Multiplication requires `col == m.row`.

### Q5 — Constructors, Destructors and Multiple Inheritance
- **Problem Statement**: Write a program to illustrate default constructor, parameterized constructor and copy constructors. Program should illustrate the order of execution of constructors and destructors when a new class is derived from more than one base class.
- **Concepts**: Default Constructor, Parameterized Constructor, Copy Constructor (`const Derived &`), Multiple Inheritance (`class Derived : public Base1, public Base2`), Constructor Execution Order (Base1 -> Base2 -> Derived), Destructor Execution Order in Reverse.

### Q6 — File Handling
- **Problem Statement**: Write a C++ program that creates an output file, writes information into the file, closes it, then reopens the same file as an input file and reads the stored information for display.
- **Concepts**: Stream Classes (`ofstream`, `ifstream`), File Open/Close, `is_open()` error validation, sequential write and line-by-line read (`getline`).

### Q7 — Types of Inheritance
- **Problem Statement**: Write C++ programs that illustrate how the following forms of inheritance are supported: a. Single inheritance b. Multiple inheritance c. Multilevel inheritance d. Hierarchical inheritance.
- **Concepts**:
  - Single: `B : public A`
  - Multiple: `E : public C, public D`
  - Multilevel: `H : public G`, `G : public F`
  - Hierarchical: `J : public I`, `K : public I`

### Q8 — Library Management System Using Class Templates
- **Problem Statement**: Design and implement a generic Library Management System in C++ using Class Templates.
- **Concepts**: Generic Programming, Class Templates (`template <class T> class Library`), Type Independence (e.g. `Library<string>`), Array Container, Adding and Traversing Items.

### Q9 — Map Associative Container
- **Problem Statement**: Write a program in C++ to use map associative container. The keys will be the names of states and the values will be the populations of the states. When the program runs, the user is prompted to type the name of a state. The program then looks in the map, using the state name as an index and returns the population of the state.
- **Concepts**: STL Associative Containers, `std::map<string, long long>`, Key-Value Pairs, Red-Black Tree Lookup (`O(log n)`), Iterators, Handling Missing Keys with `find() == end()`.

### Q10 — Real-Time Application Simulation and Exceptions
- **Problem Statement**: Develop a C++ program for simulation of any real time application with required functionalities. For eg. ATM machine with functionalities like checking account balance, with drawing, and depositing money. Use try, catch, and finally blocks to handle potential exceptions such as insufficient funds (throwing Arithmetic Exception) and invalid input (throwing Illegal Argument Exception). Ensure that the application continues to run smoothly after handling exceptions.
- **Concepts**: Application Simulation, Interactive Menu Loop, Balance Maintenance, Exception Handling, Validation (`amount <= 0`, `amount > balance`), Idiomatic C++ Cleanup (RAII / persistent menu loop without invalid native `finally` keyword).
