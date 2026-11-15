import type { Practical } from './types';

export const practicals6to10: Practical[] = [
  {
    id: 6,
    title: 'Practical 6 — File Handling',
    shortTitle: 'File Handling (ofstream & ifstream)',
    category: 'File Handling',
    originalProblem:
      'Write a C++ Write a program that creates an output file, writes information into the file, closes it, then reopens the same file as an input file and reads the stored information for display.',
    aim: 'To demonstrate sequential file I/O operations in C++ using ofstream to write data to disk and ifstream to read and display stored records.',
    concepts: [
      'File Handling Streams (<fstream>)',
      'Output Stream (ofstream)',
      'Input Stream (ifstream)',
      'Opening and Closing Files',
      'File Open Verification (is_open())',
      'Line-by-Line Reading (getline())',
    ],
    operations: [
      'Create and open "student.txt" with ofstream',
      'Check file creation status with is_open()',
      'Write structured student attributes (Name, Roll No, Division)',
      'Close output file stream',
      'Reopen "student.txt" with ifstream for reading',
      'Check input stream readiness',
      'Read and display stored content line by line using getline()',
      'Close input file stream',
    ],
    filename: 'Q6_File_Handling.cpp',
    sourceCode: `/*
PRACTICAL Q6: FILE HANDLING USING STREAM CLASSES

ALGORITHM:
1. Start the program.
2. Declare an ofstream object named 'fout'.
3. Open output file "student.txt" using fout.open("student.txt").
4. Verify if file opened successfully with fout.is_open(). If not, print error and terminate.
5. Write student records (Name, Roll No, Division) to the file using stream insertion operator (<<).
6. Close the output file using fout.close().
7. Declare an ifstream object named 'fin' and a string variable 'line'.
8. Open the same file for input using fin.open("student.txt").
9. Verify if file opened successfully with fin.is_open(). If not, print error and terminate.
10. Read the file line by line using while(getline(fin, line)) and print each line to the console.
11. Close the input file using fin.close().
12. Stop.
*/

#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main()
{
    ofstream fout;
    
    fout.open("student.txt");

    if (!fout.is_open())
    {
        cout << "File cannot be opened" << endl;
        return 0;
    }

    fout << "Name: Rohit Sharma" << endl;
    fout << "Roll No: 45" << endl;
    fout << "Division: A" << endl;

    fout.close();

    ifstream fin;
    string line;

    fin.open("student.txt");

    if (!fin.is_open())
    {
        cout << "File cannot be opened" << endl;
        return 0;
    }

    while (getline(fin, line))
    {
        cout << line << endl;
    }

    fin.close();

    return 0;
}`,
    lineCount: 62,
    algorithm: {
      steps: [
        'START',
        'Include <iostream>, <fstream>, and <string> header files.',
        'Instantiate ofstream object fout for writing.',
        'Open output file "student.txt" via fout.open("student.txt").',
        'Check fout.is_open(); if failed, display error and exit.',
        'Write records (Name: Rohit Sharma, Roll No: 45, Division: A) using << stream insertion.',
        'Explicitly close output file using fout.close() to flush write buffers to disk.',
        'Instantiate ifstream object fin and string variable line for reading.',
        'Open the same file "student.txt" for reading via fin.open("student.txt").',
        'Check fin.is_open(); if failed, display error and exit.',
        'Read each record line-by-line using while(getline(fin, line)) and print to console.',
        'Close input file with fin.close().',
        'STOP',
      ],
      explanation:
        'C++ handles files through standard stream classes in <fstream>. The ofstream class is derived from ostream and enables writing sequential data, whereas ifstream is derived from istream and provides reading capabilities. Calling close() ensures the operating system buffer flushes all buffered bytes onto persistent storage before the subsequent read operation begins.',
    },
    sampleOutput: {
      inputDescription: 'Program executes file creation, write, close, reopen, and read cycle automatically.',
      output: `Name: Rohit Sharma
Roll No: 45
Division: A`,
      note: 'The program successfully writes student records to student.txt, closes the stream, and reads back identical lines.',
    },
    vivaQuestions: [
      {
        question: 'What is the difference between ofstream and ifstream?',
        answer:
          'ofstream (output file stream) is used to create and write data to files. ifstream (input file stream) is used to read data from existing files. Both inherit from fstreambase.',
      },
      {
        question: 'Why is it crucial to close a file after writing?',
        answer:
          'Closing a file flushes any unflushed stream buffers to physical disk, releases file lock handles held by the operating system, and ensures subsequent read streams see the updated contents.',
      },
      {
        question: 'What does the is_open() function do?',
        answer:
          'is_open() returns a boolean indicating whether the stream is currently associated with an open file. It is the recommended method to check for missing files, permission errors, or disk write failures.',
      },
      {
        question: 'How does getline(fin, line) detect the end of the file?',
        answer:
          'getline() reads characters until it encounters a newline (\\n) or End-of-File (EOF). When EOF is reached and no characters are read, the stream enters a fail/eof state, causing the while condition to evaluate to false.',
      },
    ],
    importantNotes: [
      'Always call fout.close() before attempting to open the same file with ifstream; otherwise read buffers may not contain the written data.',
      'Always check is_open() before reading or writing to prevent undefined behavior.',
    ],
    keyClassesAndFunctions: [
      { name: 'ofstream', description: 'Stream class for writing data to files.' },
      { name: 'ifstream', description: 'Stream class for reading data from files.' },
      { name: 'is_open()', description: 'Checks whether the stream successfully associated with an open file.' },
      { name: 'getline(fin, line)', description: 'Reads an entire line of text including whitespace until newline.' },
    ],
  },
  {
    id: 7,
    title: 'Practical 7 — Types of Inheritance',
    shortTitle: 'Four Types of Inheritance',
    category: 'Inheritance',
    originalProblem:
      'Write C++ programs that illustrate how the following forms of inheritance are supported: a. Single inheritance b. Multiple inheritance c. Multilevel inheritance d. Hierarchical inheritance.',
    aim: 'To demonstrate all four primary forms of C++ inheritance: Single, Multiple, Multilevel, and Hierarchical through concise class hierarchies.',
    concepts: [
      'Single Inheritance',
      'Multiple Inheritance',
      'Multilevel Inheritance',
      'Hierarchical Inheritance',
      'Base & Derived Classes',
      'Code Reusability & Method Access',
    ],
    operations: [
      'Single Inheritance: B inherits from A',
      'Multiple Inheritance: E inherits from both C and D',
      'Multilevel Inheritance: H inherits from G, which inherits from F',
      'Hierarchical Inheritance: J and K inherit from common base I',
      'Instantiate derived objects and invoke inherited and specialized member functions',
    ],
    filename: 'Q7_Types_of_Inheritance.cpp',
    sourceCode: `/*
PRACTICAL Q7: TYPES OF INHERITANCE IN C++

ALGORITHM:
1. Start the program.
2. Define Single Inheritance:
      - Base class A with method showA().
      - Derived class B inheriting from A with method showB().
3. Define Multiple Inheritance:
      - Base class C with method showC().
      - Base class D with method showD().
      - Derived class E inheriting from both C and D with method showE().
4. Define Multilevel Inheritance:
      - Base class F with method showF().
      - Intermediate derived class G inheriting from F with method showG().
      - Further derived class H inheriting from G with method showH().
5. Define Hierarchical Inheritance:
      - Common base class I with method showI().
      - First derived class J inheriting from I with method showJ().
      - Second derived class K inheriting from I with method showK().
6. In main():
      - Demonstrate Single Inheritance by creating object of B and calling showA() and showB().
      - Demonstrate Multiple Inheritance by creating object of E and calling showC(), showD(), and showE().
      - Demonstrate Multilevel Inheritance by creating object of H and calling showF(), showG(), and showH().
      - Demonstrate Hierarchical Inheritance by creating objects of J and K, calling inherited and own methods.
7. Stop.
*/

#include <iostream>
using namespace std;

// Single Inheritance
class A {
public:
    void showA() {
        cout << "Class A" << endl;
    }
};

class B : public A {
public:
    void showB() {
        cout << "Class B" << endl;
    }
};

// Multiple Inheritance
class C {
public:
    void showC() {
        cout << "Class C" << endl;
    }
};

class D {
public:
    void showD() {
        cout << "Class D" << endl;
    }
};

class E : public C, public D {
public:
    void showE() {
        cout << "Class E" << endl;
    }
};

// Multilevel Inheritance
class F {
public:
    void showF() {
        cout << "Class F" << endl;
    }
};

class G : public F {
public:
    void showG() {
        cout << "Class G" << endl;
    }
};

class H : public G {
public:
    void showH() {
        cout << "Class H" << endl;
    }
};

// Hierarchical Inheritance
class I {
public:
    void showI() {
        cout << "Class I" << endl;
    }
};

class J : public I {
public:
    void showJ() {
        cout << "Class J" << endl;
    }
};

class K : public I {
public:
    void showK() {
        cout << "Class K" << endl;
    }
};

int main() {

    cout << "\\nSingle Inheritance:" << endl;
    B obj1;
    obj1.showA();
    obj1.showB();

    cout << "\\nMultiple Inheritance:" << endl;
    E obj2;
    obj2.showC();
    obj2.showD();
    obj2.showE();

    cout << "\\nMultilevel Inheritance:" << endl;
    H obj3;
    obj3.showF();
    obj3.showG();
    obj3.showH();

    cout << "\\nHierarchical Inheritance:" << endl;
    J obj4;
    K obj5;
    obj4.showI();
    obj4.showJ();
    obj5.showI();
    obj5.showK();

    return 0;
}`,
    lineCount: 139,
    algorithm: {
      steps: [
        'START',
        'Create Single Inheritance: Declare Base A and Derived B (class B : public A).',
        'Create Multiple Inheritance: Declare Base C, Base D, and Derived E (class E : public C, public D).',
        'Create Multilevel Inheritance: Declare Base F, Derived G (class G : public F), and Derived H (class H : public G).',
        'Create Hierarchical Inheritance: Declare Base I, and two Derived classes J and K (class J : public I; class K : public I).',
        'In main(), instantiate B and call showA() and showB().',
        'Instantiate E and call showC(), showD(), and showE().',
        'Instantiate H and call showF(), showG(), and showH().',
        'Instantiate J and K, calling showI() and showJ() for obj4, and showI() and showK() for obj5.',
        'STOP',
      ],
      explanation:
        'Inheritance is the mechanism by which one class acquires the properties and methods of another. This program provides clean, exam-friendly examples of the four primary inheritance topologies: 1) Single (one base, one derived), 2) Multiple (several bases, one derived), 3) Multilevel (chain of inheritance), and 4) Hierarchical (one base, several derived).',
    },
    sampleOutput: {
      inputDescription: 'Program executes all inheritance demonstrations sequentially.',
      output: `Single Inheritance:
Class A
Class B

Multiple Inheritance:
Class C
Class D
Class E

Multilevel Inheritance:
Class F
Class G
Class H

Hierarchical Inheritance:
Class I
Class J
Class I
Class K`,
      note: 'Every derived class successfully accesses all inherited base functions as well as its own members.',
    },
    vivaQuestions: [
      {
        question: 'What are the four primary types of inheritance demonstrated here?',
        answer:
          '1) Single inheritance: one derived class inherits from one base class. 2) Multiple inheritance: one derived class inherits from multiple base classes. 3) Multilevel inheritance: a derived class inherits from another derived class in a chain. 4) Hierarchical inheritance: multiple derived classes inherit from a single base class.',
      },
      {
        question: 'What is Hybrid Inheritance?',
        answer:
          'Hybrid inheritance is a combination of two or more types of inheritance (e.g., combining Multilevel and Multiple inheritance, often leading to the diamond problem).',
      },
      {
        question: 'What is the difference between public, protected, and private inheritance?',
        answer:
          'In public inheritance, public and protected members of the base stay public and protected in the derived class. In protected inheritance, both become protected. In private inheritance, both become private in the derived class.',
      },
      {
        question: 'What is the role of the virtual keyword in multiple inheritance?',
        answer:
          'Virtual base classes prevent duplicate copies of an ancestor base class from being created when multiple inheritance paths converge (resolving ambiguity in diamond inheritance).',
      },
    ],
    importantNotes: [
      'Keep class relationships clear and simple during viva exams so you can explain member access without confusion.',
      'Notice that in Hierarchical inheritance, class J and class K are independent siblings inheriting from class I.',
    ],
    keyClassesAndFunctions: [
      { name: 'class B : public A', description: 'Single inheritance example.' },
      { name: 'class E : public C, public D', description: 'Multiple inheritance example.' },
      { name: 'class H : public G (G : public F)', description: 'Multilevel inheritance chain.' },
      { name: 'class J : public I, class K : public I', description: 'Hierarchical inheritance siblings.' },
    ],
  },
  {
    id: 8,
    title: 'Practical 8 — Library Management System Using Class Templates',
    shortTitle: 'Generic Library Class Template',
    category: 'Templates & Generics',
    originalProblem:
      'Design and implement a generic Library Management System in C++ using Class Templates.',
    aim: 'To design a reusable, generic Library Management System using C++ Class Templates capable of managing collections of different data types (e.g., books, magazines, media).',
    concepts: [
      'Generic Programming',
      'Class Templates (template <class T>)',
      'Type Parameterization',
      'Template Instantiation',
      'Container Operations (add, traverse)',
    ],
    operations: [
      'Define generic template class Library<T>',
      'Manage internal array items[10] of type T',
      'Add items of type T via addItem(T item)',
      'Display stored collection via displayItems()',
      'Instantiate Library<string> for Book records',
      'Instantiate Library<string> for Magazine records',
    ],
    filename: 'Q8_Library_Class_Template.cpp',
    sourceCode: `/*
PRACTICAL Q8: GENERIC LIBRARY MANAGEMENT SYSTEM USING CLASS TEMPLATES

ALGORITHM:
1. Start the program.
2. Define template class Library: template <class T> class Library.
3. In Library, declare:
      - Generic array items[10] of type T to hold collection elements.
      - Integer count to track current item count, initialized to 0 in constructor.
4. Define member function addItem(T item):
      - Store item at items[count].
      - Increment count.
5. Define member function displayItems():
      - Loop from i = 0 to count - 1.
      - Output each items[i] to the console.
6. In main():
      - Instantiate Library<string> for books.
      - Add book titles using books.addItem(...).
      - Display books via books.displayItems().
      - Instantiate Library<string> for magazines.
      - Add magazine titles using magazines.addItem(...).
      - Display magazines via magazines.displayItems().
7. Stop.
*/

#include <iostream>
#include <string>
using namespace std;

template <class T>
class Library {
    T items[10];
    int count;

public:
    Library() {
        count = 0;
    }

    void addItem(T item) {
        items[count] = item;
        count++;
    }

    void displayItems() {
        for (int i = 0; i < count; i++) {
            cout << items[i] << endl;
        }
    }
};

int main() {
    Library<string> books;

    books.addItem("C++ Programming");
    books.addItem("Data Structures");
    books.addItem("Object Oriented Programming");

    cout << "Books in Library:" << endl;
    books.displayItems();

    Library<string> magazines;

    magazines.addItem("Science Today");
    magazines.addItem("Technology World");

    cout << "\\nMagazines in Library:" << endl;
    magazines.displayItems();

    return 0;
}`,
    lineCount: 68,
    algorithm: {
      steps: [
        'START',
        'Declare template <class T> before class definition.',
        'Define class Library with generic array items[10] of type T and integer count.',
        'In constructor Library(), set count = 0.',
        'Define addItem(T item) to insert an item into the array at items[count] and increment count.',
        'Define displayItems() to loop through index 0 to count - 1 and print each element.',
        'In main(), instantiate template class with concrete type string: Library<string> books.',
        'Call books.addItem() for multiple titles.',
        'Call books.displayItems() to list books.',
        'Instantiate Library<string> magazines, add items, and display.',
        'STOP',
      ],
      explanation:
        'Templates provide compile-time polymorphism and generic programming in C++. By parameterizing the class with template <class T>, the Library container can store any type (such as strings, integers, or custom structs) without code duplication. The compiler generates specialized class definitions at compile time for each concrete type used.',
    },
    sampleOutput: {
      inputDescription: 'Program executes template addition and traversal automatically.',
      output: `Books in Library:
C++ Programming
Data Structures
Object Oriented Programming

Magazines in Library:
Science Today
Technology World`,
      note: 'The template class operates generically across collections.',
    },
    vivaQuestions: [
      {
        question: 'What is generic programming?',
        answer:
          'Generic programming is a programming paradigm where code is written in terms of types to-be-specified-later that are then instantiated upon use with specific types provided as parameters.',
      },
      {
        question: 'What is the syntax difference between class templates and function templates?',
        answer:
          'A class template begins with "template <class T> class ClassName { ... };", whereas a function template begins with "template <class T> ReturnType functionName(T param) { ... };".',
      },
      {
        question: 'Can templates be used with custom user-defined classes or structs?',
        answer:
          'Yes. A template container like Library<T> can be instantiated as Library<BookRecord> or Library<Student>, provided the custom class supports required operations like assignment and stream output.',
      },
      {
        question: 'What is template specialization?',
        answer:
          'Template specialization allows defining an alternative custom implementation of a template when a specific data type (e.g., char* or bool) is passed.',
      },
    ],
    importantNotes: [
      'Class templates must be instantiated by specifying the type inside angle brackets: Library<string> or Library<int>.',
      'The compiler generates a unique class for every distinct type argument.',
    ],
    keyClassesAndFunctions: [
      { name: 'template <class T> class Library', description: 'Generic library container parameterized by type T.' },
      { name: 'addItem(T item)', description: 'Adds an item of type T into generic storage.' },
      { name: 'displayItems()', description: 'Iterates and prints all stored items.' },
    ],
  },
  {
    id: 9,
    title: 'Practical 9 — Map Associative Container',
    shortTitle: 'State Population Map Lookup',
    category: 'STL Containers',
    originalProblem:
      'Write a program in C++ to use map associative container. The keys will be the names of states and the values will be the populations of the states. When the program runs, the user is prompted to type the name of a state. The program then looks in the map, using the state name as an index and returns the population of the state.',
    aim: 'To demonstrate the use of the C++ STL map associative container by storing state-population key-value pairs, performing search lookups, and handling non-existent keys safely.',
    concepts: [
      'Standard Template Library (STL)',
      'Associative Containers',
      'std::map<Key, Value>',
      'Key-Value Pairs & String Keys',
      'Logarithmic Search (O(log n))',
      'Iterators & Missing Key Handling',
    ],
    operations: [
      'Declare std::map<string, long long>',
      'Insert state and population pairs (Maharashtra, Gujarat, Karnataka, Rajasthan, Goa)',
      'Prompt user to enter state name',
      'Search map using states.find(state)',
      'Output population if found via it->second',
      'Handle not-found condition safely using states.end()',
    ],
    filename: 'Q9_Map_State_Population.cpp',
    sourceCode: `/*
PRACTICAL Q9: STATE POPULATION LOOKUP USING MAP ASSOCIATIVE CONTAINER

ALGORITHM:
1. Start the program.
2. Include <iostream> and <map> headers.
3. In main(), declare an STL map associative container: map<string, long long> states.
4. Populate the map with key-value pairs (State Name as key, Population as value):
      states["Maharashtra"] = 126000000;
      states["Gujarat"]     = 71000000;
      states["Karnataka"]   = 68000000;
      states["Rajasthan"]   = 81000000;
      states["Goa"]         = 1600000;
5. Declare string variable 'state'.
6. Prompt user to enter a state name.
7. Use states.find(state) to search the map for the entered key.
8. If the iterator does not equal states.end():
      - Display the population using iterator->second.
9. Otherwise:
      - Display "State not found."
10. Stop.
*/

#include <iostream>
#include <map>
#include <string>
using namespace std;

int main() {
    map<string, long long> states;

    // Illustrative population figures
    states["Maharashtra"] = 126000000;
    states["Gujarat"] = 71000000;
    states["Karnataka"] = 68000000;
    states["Rajasthan"] = 81000000;
    states["Goa"] = 1600000;

    string state;

    cout << "Enter State Name: ";
    cin >> state;

    map<string, long long>::iterator it;
    it = states.find(state);

    if (it != states.end()) {
        cout << "Population of " << state << " = " << it->second << endl;
    }
    else {
        cout << "State not found." << endl;
    }

    return 0;
}`,
    lineCount: 53,
    algorithm: {
      steps: [
        'START',
        'Include <iostream>, <map>, and <string>.',
        'In main(), declare std::map<string, long long> states.',
        'Insert key-value pairs: "Maharashtra" -> 126000000, "Gujarat" -> 71000000, "Karnataka" -> 68000000, "Rajasthan" -> 81000000, "Goa" -> 1600000.',
        'Prompt user: "Enter State Name: " and read string into variable state.',
        'Search the map using iterator it = states.find(state).',
        'If it != states.end(), print "Population of [state] = [it->second]".',
        'Else, print "State not found.".',
        'STOP',
      ],
      explanation:
        'std::map is an associative container that stores elements formed by a combination of a mapped key value and a mapped element, following a specific order. Internally implemented as a self-balancing binary search tree (typically a Red-Black Tree), std::map provides O(log n) lookup, insertion, and deletion. Using find() avoids inadvertently inserting default-constructed elements that the subscript operator ([]) would create upon a miss.',
    },
    sampleOutput: {
      inputDescription: 'User enters existing state name "Maharashtra"',
      sampleInput: 'Maharashtra',
      output: `Enter State Name: Population of Maharashtra = 126000000`,
      note: 'State found in map: returns stored population value.',
    },
    errorCaseOutput: {
      inputDescription: 'User enters non-existent state name "Delhi"',
      sampleInput: 'Delhi',
      output: `Enter State Name: State not found.`,
      note: 'Safe handling when key is not present in container.',
    },
    vivaQuestions: [
      {
        question: 'What underlying data structure does std::map use in C++?',
        answer:
          'std::map is typically implemented as a self-balancing Binary Search Tree, specifically a Red-Black Tree. This guarantees O(log n) time complexity for search, insertion, and deletion.',
      },
      {
        question: 'Why is states.find(key) preferred over states[key] when checking for key existence?',
        answer:
          'If the key does not exist, the bracket operator states[key] automatically inserts a new entry with a default-initialized value (0 for numbers). find() simply returns end() without modifying the map.',
      },
      {
        question: 'What is the difference between std::map and std::unordered_map?',
        answer:
          'std::map stores keys in sorted order with O(log n) search time. std::unordered_map uses a hash table, has no ordered traversal, but offers average O(1) search time.',
      },
      {
        question: 'What does an iterator point to in a map?',
        answer:
          'An iterator in std::map points to a std::pair<const Key, Value>. it->first accesses the key and it->second accesses the mapped value.',
      },
    ],
    importantNotes: [
      'Population figures are clearly labeled illustrative values for academic simulation.',
      'Using long long prevents integer overflow for large population values.',
    ],
    keyClassesAndFunctions: [
      { name: 'std::map<string, long long>', description: 'Associative key-value container with string keys and 64-bit integer values.' },
      { name: 'states.find(state)', description: 'Searches for key and returns an iterator to the element or end().' },
      { name: 'it->second', description: 'Accesses the mapped population value associated with the iterator.' },
    ],
  },
  {
    id: 10,
    title: 'Practical 10 — Real-Time Application Simulation and Exceptions',
    shortTitle: 'ATM Application Simulation & Exceptions',
    category: 'Exception Handling',
    originalProblem:
      'Develop a C++ program for simulation of any real time application with required functionalities. For eg. ATM machine with functionalities like checking account balance, with drawing, and depositing money. Use try, catch, and finally blocks to handle potential exceptions such as insufficient funds (throwing Arithmetic Exception) and invalid input (throwing Illegal Argument Exception). Ensure that the application continues to run smoothly after handling exceptions.',
    aim: 'To simulate a real-time ATM machine with balance checking, deposits, withdrawals, and robust C++ exception handling that catches insufficient funds and invalid amounts while keeping the application loop running smoothly.',
    concepts: [
      'Real-Time Application Simulation',
      'Object State & Balance Management',
      'Exception Handling (try, throw, catch)',
      'Input Validation (non-positive amounts)',
      'Business Rules (insufficient funds)',
      'Continuous Loop & Post-Exception Recovery',
      'Idiomatic C++ vs Java finally Note',
    ],
    operations: [
      'Initialize ATM account with initial balance Rs. 5000',
      'Check current balance',
      'Deposit money with exception throw for amount <= 0',
      'Withdraw money with exception throw for amount <= 0 and amount > balance',
      'Interactive menu loop (1: Balance, 2: Deposit, 3: Withdraw, 4: Exit)',
      'Continuous smooth execution after handling exceptions',
    ],
    filename: 'Q10_ATM_Exception_Handling.cpp',
    sourceCode: `/*
PRACTICAL Q10: REAL-TIME ATM APPLICATION SIMULATION WITH EXCEPTION HANDLING

ALGORITHM:
1. Start the program.
2. Define class ATM with private float attribute 'balance'.
3. In ATM constructor, initialize balance = 5000.
4. Implement checkBalance(): display current balance.
5. Implement deposit():
      - Read amount from user.
      - In try block: if amount <= 0, throw "Invalid deposit amount".
      - Otherwise, balance = balance + amount; display success and new balance.
      - In catch block (const char* error): display "Exception: " << error.
6. Implement withdraw():
      - Read amount from user.
      - In try block:
            a. If amount <= 0, throw "Invalid withdrawal amount".
            b. If amount > balance, throw "Insufficient balance".
            c. Otherwise, balance = balance - amount; display success and new balance.
      - In catch block (const char* error): display "Exception: " << error.
7. In main():
      - Instantiate ATM atm.
      - Execute interactive do-while menu loop:
            1: Check Balance
            2: Deposit Money
            3: Withdraw Money
            4: Exit
      - Continue loop after handling any exceptions until choice 4 is selected.
8. Stop.
*/

#include <iostream>
using namespace std;

class ATM
{
    float balance;

public:
    ATM()
    {
        balance = 5000;
    }

    void checkBalance()
    {
        cout << "Balance = Rs. " << balance << endl;
    }

    void deposit()
    {
        float amount;
        cout << "Enter deposit amount: ";
        cin >> amount;

        try
        {
            if (amount <= 0)
                throw "Invalid deposit amount";

            balance = balance + amount;
            cout << "Amount deposited successfully." << endl;
            cout << "Balance = Rs. " << balance << endl;
        }
        catch (const char* error)
        {
            cout << "Exception: " << error << endl;
        }
    }

    void withdraw()
    {
        float amount;
        cout << "Enter withdrawal amount: ";
        cin >> amount;

        try
        {
            if (amount <= 0)
                throw "Invalid withdrawal amount";

            if (amount > balance)
                throw "Insufficient balance";

            balance = balance - amount;
            cout << "Amount withdrawn successfully." << endl;
            cout << "Balance = Rs. " << balance << endl;
        }
        catch (const char* error)
        {
            cout << "Exception: " << error << endl;
        }
    }
};

int main()
{
    ATM atm;
    int choice;

    do
    {
        cout << "\\n----- ATM MENU -----" << endl;
        cout << "1. Check Balance" << endl;
        cout << "2. Deposit Money" << endl;
        cout << "3. Withdraw Money" << endl;
        cout << "4. Exit" << endl;

        cout << "Enter your choice: ";
        cin >> choice;

        if (choice == 1)
            atm.checkBalance();
        else if (choice == 2)
            atm.deposit();
        else if (choice == 3)
            atm.withdraw();
        else if (choice == 4)
            cout << "Thank you for using ATM." << endl;
        else
            cout << "Invalid choice." << endl;

    } while (choice != 4);

    return 0;
}`,
    lineCount: 119,
    algorithm: {
      steps: [
        'START',
        'Define class ATM with private attribute balance initialized to 5000 in constructor.',
        'Implement checkBalance() printing current balance value.',
        'Implement deposit(): Read amount; within try block check if amount <= 0; if true, throw error string; else update balance and print success. Catch exception and log error.',
        'Implement withdraw(): Read amount; within try block check if amount <= 0 (invalid amount) or amount > balance (insufficient funds); if true, throw appropriate error string; else deduct amount and print success. Catch exception and log error.',
        'In main(), initialize ATM instance atm.',
        'Run do-while menu loop with options: 1) Balance, 2) Deposit, 3) Withdraw, 4) Exit.',
        'Execute selected operation, catching any thrown exceptions gracefully without terminating the program.',
        'Loop continues until user enters choice 4.',
        'STOP',
      ],
      explanation:
        'This practical simulates a real-time banking kiosk. Crucially, C++ exception handling ensures abnormal inputs (negative deposit, overdraft) do not corrupt system state or terminate execution. The application loop continues seamlessly after catching exceptions. Note: C++ does not possess a native "finally" keyword like Java; cleanup is idiomatically handled via destructors (RAII) or explicit continuation steps.',
    },
    sampleOutput: {
      inputDescription: 'Sequence: 1 (Check Balance = 5000) -> 2 (Deposit 1500) -> 3 (Withdraw 2000) -> 3 (Withdraw 10000 [triggers exception]) -> 4 (Exit)',
      sampleInput: '1\n2 1500\n3 2000\n3 10000\n4',
      output: `----- ATM MENU -----
1. Check Balance
2. Deposit Money
3. Withdraw Money
4. Exit
Enter your choice: Balance = Rs. 5000

----- ATM MENU -----
1. Check Balance
2. Deposit Money
3. Withdraw Money
4. Exit
Enter your choice: Enter deposit amount: Amount deposited successfully.
Balance = Rs. 6500

----- ATM MENU -----
1. Check Balance
2. Deposit Money
3. Withdraw Money
4. Exit
Enter your choice: Enter withdrawal amount: Amount withdrawn successfully.
Balance = Rs. 4500

----- ATM MENU -----
1. Check Balance
2. Deposit Money
3. Withdraw Money
4. Exit
Enter your choice: Enter withdrawal amount: Exception: Insufficient balance

----- ATM MENU -----
1. Check Balance
2. Deposit Money
3. Withdraw Money
4. Exit
Enter your choice: Thank you for using ATM.`,
      note: 'Notice the exception "Insufficient balance" is handled cleanly, and the ATM menu continues running smoothly afterwards.',
    },
    vivaQuestions: [
      {
        question: 'Does C++ have a native "finally" block like Java or C#?',
        answer:
          'No, standard C++ does not have a "finally" keyword. In C++, cleanup operations and resource management are handled idiomatically through RAII (Resource Acquisition Is Initialization), where class destructors automatically execute when variables go out of scope, whether normal or during stack unwinding.',
      },
      {
        question: 'Why does the application continue running smoothly after catching an exception?',
        answer:
          'Because the try-catch block is situated inside the method invoked within the do-while loop. Once the catch block finishes executing, control returns to the loop, presenting the menu again without program abortion.',
      },
      {
        question: 'What types can be thrown in C++?',
        answer:
          'In C++, any type can be thrown: primitives (int, double), string literals (const char*), standard exception classes (std::exception, std::runtime_error), or custom user-defined classes.',
      },
      {
        question: 'What happens if a thrown exception is not caught?',
        answer:
          'If no matching catch block is found, the C++ runtime calls std::terminate(), which by default aborts the program execution.',
      },
    ],
    importantNotes: [
      'The problem statement references Java-style terminology ("Arithmetic Exception", "finally"). The C++ code provides the idiomatic, exam-accurate C++ implementation and explains this difference clearly in practical notes.',
      'Always catch exceptions by reference or const pointer to avoid unnecessary copying or object slicing.',
    ],
    keyClassesAndFunctions: [
      { name: 'class ATM', description: 'Simulates account state and financial transactions.' },
      { name: 'checkBalance()', description: 'Inspects and outputs current balance.' },
      { name: 'deposit()', description: 'Validates and deposits funds with exception throwing.' },
      { name: 'withdraw()', description: 'Checks for overdraft and deducts funds with exception throwing.' },
    ],
  },
];
