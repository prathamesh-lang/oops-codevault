import type { Practical } from './types';

export const practicals1to5: Practical[] = [
  {
    id: 1,
    title: 'Practical 1 — Complex Number using Operator Overloading',
    shortTitle: 'Complex Number Operations',
    category: 'Operator Overloading',
    originalProblem:
      'Implement a class Complex which represents the Complex Number data type. Implement the following Constructor (including a default constructor which creates the complex number 0+0i). Overload operator+ to add two complex numbers. Overload operator* to multiply two complex numbers. Overload operators << and >> to print and read Complex Numbers.',
    aim: 'To implement a C++ class representing complex numbers with constructors and overloaded arithmetic (+, *) and stream extraction/insertion (>>, <<) operators.',
    concepts: [
      'Classes & Objects',
      'Default Constructor',
      'Operator Overloading',
      'Friend Stream Operators (<<, >>)',
      'Complex Arithmetic',
    ],
    operations: [
      'Default initialization (0 + 0i)',
      'Input stream extraction (>>)',
      'Output stream insertion (<<)',
      'Complex addition (+)',
      'Complex multiplication (*)',
    ],
    filename: 'Q1_Complex_Number.cpp',
    sourceCode: `/*
PRACTICAL Q1: COMPLEX NUMBER USING OPERATOR OVERLOADING

ALGORITHM:
1. Start the program.
2. Define a class Complex with real and imaginary data members.
3. Define a default constructor to initialize both parts to zero.
4. Overload >> to read the real and imaginary parts.
5. Overload << to display a complex number.
6. Overload + to add the real parts and imaginary parts separately.
7. Overload * using:
      Real part = (a*c) - (b*d)
      Imaginary part = (a*d) + (b*c)
8. In main(), create two Complex objects and read their values.
9. Calculate addition and multiplication using overloaded operators.
10. Display both input numbers and the results.
11. Stop.

*/

#include <iostream>
using namespace std;

class Complex
{
    int real, imag;

public:

    // Default constructor: creates 0 + 0i
    Complex()
    {
        real = 0;
        imag = 0;
    }

    // Overload + operator
    Complex operator+(Complex C)
    {
        Complex temp;
        temp.real = real + C.real;
        temp.imag = imag + C.imag;
        return temp;
    }

    // Overload * operator
    Complex operator*(Complex C)
    {
        Complex temp;
        temp.real = (real * C.real) - (imag * C.imag);
        temp.imag = (real * C.imag) + (imag * C.real);
        return temp;
    }

    // Overload >> operator for input
    friend istream& operator>>(istream& in, Complex& C)
    {
        in >> C.real >> C.imag;
        return in;
    }

    // Overload << operator for output
    friend ostream& operator<<(ostream& out, Complex C)
    {
        out << C.real;

        if (C.imag >= 0)
            out << " + " << C.imag << "i";
        else
            out << " - " << -C.imag << "i";

        return out;
    }
};

int main()
{
    Complex C1, C2, Sum, Product;

    cout << "Enter first complex number (real imaginary): ";
    cin >> C1;

    cout << "Enter second complex number (real imaginary): ";
    cin >> C2;

    Sum = C1 + C2;
    Product = C1 * C2;

    cout << "\\nFirst Complex Number: " << C1;
    cout << "\\nSecond Complex Number: " << C2;
    cout << "\\nAddition: " << Sum;
    cout << "\\nMultiplication: " << Product << endl;

    return 0;
}`,
    lineCount: 95,
    algorithm: {
      steps: [
        'START',
        'Define class Complex with private integer attributes real and imag.',
        'Define default constructor Complex() initializing real = 0 and imag = 0 (representing 0 + 0i).',
        'Overload binary operator+ to add corresponding real and imaginary parts and return a new Complex instance.',
        'Overload binary operator* using algebraic formula (a*c - b*d) + (a*d + b*c)i and return the resulting object.',
        'Declare friend operator>>(istream&, Complex&) to read real and imaginary values, returning stream reference for chaining.',
        'Declare friend operator<<(ostream&, Complex) to format and output number as "a + bi" or "a - bi", returning stream reference.',
        'In main(), declare Complex instances C1, C2, Sum, and Product.',
        'Prompt and read C1 and C2 from standard input.',
        'Compute Sum = C1 + C2 and Product = C1 * C2.',
        'Display inputs and calculated results using overloaded << operator.',
        'STOP',
      ],
      explanation:
        'This program showcases fundamental operator overloading in C++. Arithmetic operators (+ and *) are member functions taking a Complex object by value and returning a temporary Complex object with the computed result. The stream operators (<< and >>) cannot be member functions because their left-hand operand is an istream or ostream, not a Complex object; hence, they are implemented as friend functions returning stream references to support cascading (e.g., cin >> a >> b).',
    },
    sampleOutput: {
      inputDescription: 'User inputs two complex numbers: 3 + 4i and 1 + 2i',
      sampleInput: '3 4\n1 2',
      output: `Enter first complex number (real imaginary): Enter second complex number (real imaginary): 

First Complex Number: 3 + 4i
Second Complex Number: 1 + 2i
Addition: 4 + 6i
Multiplication: -5 + 10i`,
      note: 'Multiplication verification: (3*1 - 4*2) + (3*2 + 4*1)i = (3 - 8) + (6 + 4)i = -5 + 10i.',
    },
    vivaQuestions: [
      {
        question: 'Why must stream operators (<< and >>) be overloaded as friend functions instead of member functions?',
        answer:
          'In operator overloading, the left-hand operand invokes the member function. For "cin >> c", the left operand is an istream object. Since we cannot modify the standard istream class to add a member function for our Complex type, we must define it as a non-member friend function.',
      },
      {
        question: 'Why do stream extraction and insertion operators return a reference to istream/ostream?',
        answer:
          'Returning a stream reference allows operator chaining, such as "cin >> c1 >> c2;" or "cout << c1 << c2;". The result of the first operation is the stream itself, which then feeds the second operation.',
      },
      {
        question: 'What is the purpose of a default constructor?',
        answer:
          'A default constructor requires no arguments. It initializes member variables to valid default states (here, 0 + 0i) when an object is instantiated without arguments, preventing indeterminate garbage values.',
      },
      {
        question: 'Can you overload the dot operator (.) or scope resolution operator (::)?',
        answer:
          'No. In C++, operators that cannot be overloaded are: member access (.), pointer-to-member (.*), scope resolution (::), ternary conditional (?:), and sizeof.',
      },
    ],
    importantNotes: [
      'Always return the stream reference (istream& / ostream&) from friend stream operators to allow chaining.',
      'Ensure proper handling of negative imaginary components in operator<< so output formats cleanly as "a - bi" rather than "a + -bi".',
      'The default constructor satisfies the syllabus requirement for initializing complex numbers to 0 + 0i.',
    ],
    keyClassesAndFunctions: [
      { name: 'Complex()', description: 'Default constructor initializing real = 0, imag = 0.' },
      { name: 'operator+(Complex C)', description: 'Member function overloading addition for complex numbers.' },
      { name: 'operator*(Complex C)', description: 'Member function overloading multiplication for complex numbers.' },
      { name: 'friend operator>>(istream&, Complex&)', description: 'Non-member friend function reading complex parts from input.' },
      { name: 'friend operator<<(ostream&, Complex)', description: 'Non-member friend function printing formatted complex number.' },
    ],
  },
  {
    id: 2,
    title: 'Practical 2 — Staff Management and Salary Slip',
    shortTitle: 'Staff Salary Slip & Sorting',
    category: 'Class Design & Records',
    originalProblem:
      'To create a class staff having fields: Staff-id, name, salary and functions accept() and display(). Calculate DA=25% of basic salary, HRA=800, I-tax=15% of basic salary. Display the pay slip using appropriate output format. 1) To accept the data 2) To display the data 3) To sort the data by name',
    aim: 'To design a C++ class for staff records that accepts employee data, computes allowances and tax deductions according to institutional rules, displays formatted salary slips, and sorts records alphabetically by name.',
    concepts: [
      'Classes & Data Members',
      'Array of Objects',
      'Financial Computations',
      'Formatted Output (<iomanip>)',
      'Alphabetical Bubble Sort',
    ],
    operations: [
      'Accept staff details (ID, Name, Basic Salary)',
      'Calculate allowances (DA = 25%, HRA = 800) and deductions (IT = 15%)',
      'Compute Net Salary = Basic + DA + HRA - IT',
      'Display tabular salary slip using setw()',
      'Sort records alphabetically by staff name',
    ],
    filename: 'Q2_Staff_Salary_Slip.cpp',
    sourceCode: `/*
PRACTICAL Q2: STAFF MANAGEMENT AND SALARY SLIP CALCULATION

ALGORITHM:
1. Start the program.
2. Define class Staff with data members: Name, Id, Bs (Basic Salary), Da, Hra, It, Ns (Net Salary).
3. In Accept(), prompt user for Name, Id, and Basic Salary (Bs).
4. In Salary(), calculate:
      DA  = 25% of Bs (Bs * 0.25)
      HRA = 800
      IT  = 15% of Bs (Bs * 0.15)
      Net Salary = Bs + DA + HRA - IT
5. In Display(), print the staff record in a formatted table row using setw().
6. In main(), read number of records n and create an array of Staff objects.
7. Accept details for all n staff members and display the payslips before sorting.
8. Sort the array of records alphabetically by Name using Bubble Sort.
9. Display the payslips after sorting.
10. Stop.
*/

#include <iostream>
#include <iomanip>
#include <string>
using namespace std;

class Staff
{
private:
    string Id;
    float Bs, Da, Hra, It, Ns;

public:
    string Name;

    void Accept()
    {
        cout << "===== Enter Details =====\\n\\n";
        cout << "Enter Name: ";
        cin >> Name;
        cout << "Enter Id: ";
        cin >> Id;
        cout << "Enter Bs: ";
        cin >> Bs;
        cout << endl;

        Salary();
    }

    void Salary()
    {
        Da = Bs * 0.25f;
        Hra = 800;
        It = Bs * 0.15f;
        Ns = Bs + Da + Hra - It;
    }

    void Display()
    {
        cout << "| ";
        cout << left 
             << setw(12) << Name << " | "
             << setw(8)  << Id << " | "
             << setw(10) << Bs << " | "
             << setw(10) << Da << " | "
             << setw(10) << Hra << " | "
             << setw(10) << It << " | "
             << setw(10) << Ns << " | " << endl;
    }
};

int main()
{
    int n, i, j;
    cout << "Enter No. of Data: ";
    cin >> n;
    cout << endl;

    Staff Ob[n], temp;

    for (i = 0; i < n; i++)
    {
        Ob[i].Accept();
    }

    cout << "===== Before Sorting Staff Slip =====\\n\\n";
    cout << "| ";
    cout << left 
         << setw(12) << "Name" << " | "
         << setw(8)  << "ID" << " | "
         << setw(10) << "Basic" << " | "
         << setw(10) << "DA" << " | "
         << setw(10) << "HRA" << " | "
         << setw(10) << "IT" << " | "
         << setw(10) << "Net Sal" << " | " << endl;

    for (i = 0; i < n; i++)
    {
        Ob[i].Display();
    }

    for (i = 0; i < n - 1; i++)
    {
        for (j = 0; j < n - i - 1; j++)
        {
            if (Ob[j].Name > Ob[j + 1].Name)
            {
                temp = Ob[j + 1];
                Ob[j + 1] = Ob[j];
                Ob[j] = temp;
            }
        }
    }

    cout << "\\n===== After Sorting Staff Slip =====\\n\\n";
    cout << "| ";
    cout << left 
         << setw(12) << "Name" << " | "
         << setw(8)  << "ID" << " | "
         << setw(10) << "Basic" << " | "
         << setw(10) << "DA" << " | "
         << setw(10) << "HRA" << " | "
         << setw(10) << "IT" << " | "
         << setw(10) << "Net Sal" << " | " << endl;

    for (i = 0; i < n; i++)
    {
        Ob[i].Display();
    }

    return 0;
}`,
    lineCount: 131,
    algorithm: {
      steps: [
        'START',
        'Define class Staff with private members Id, Bs, Da, Hra, It, Ns, and public member Name.',
        'Define Accept() member function to read employee Name, Id, and Basic Salary (Bs).',
        'Inside Accept(), invoke Salary() method to compute financial components.',
        'In Salary(), compute DA = Bs * 0.25, assign HRA = 800, compute IT = Bs * 0.15, and Net Salary = Bs + DA + HRA - IT.',
        'In Display(), print records in aligned tabular columns using std::left and std::setw().',
        'In main(), prompt for total records n and instantiate an array of Staff objects Ob[n].',
        'Iterate through array calling Ob[i].Accept() for each record.',
        'Display header table and print un-sorted records via Ob[i].Display().',
        'Sort staff records alphabetically by Name using Bubble Sort comparison Ob[j].Name > Ob[j+1].Name.',
        'Display the sorted payslip table.',
        'STOP',
      ],
      explanation:
        'This practical illustrates encapsulation and object arrays in business record processing. The Staff class bundles identity attributes with financial rules. Private fields ensure data integrity while public member functions provide controlled interfaces. The sorting step demonstrates comparing std::string objects using relational operators (>), swapping entire Staff objects during Bubble Sort.',
    },
    sampleOutput: {
      inputDescription: 'Two staff records: Suresh (Basic 20,000) and Amit (Basic 30,000)',
      sampleInput: '2\nSuresh S101 20000\nAmit S102 30000',
      output: `Enter No. of Data: 

===== Enter Details =====

Enter Name: Enter Id: Enter Bs: 

===== Enter Details =====

Enter Name: Enter Id: Enter Bs: 

===== Before Sorting Staff Slip =====

| Name         | ID       | Basic      | DA         | HRA        | IT         | Net Sal    | 
| Suresh       | S101     | 20000      | 5000       | 800        | 3000       | 22800      | 
| Amit         | S102     | 30000      | 7500       | 800        | 4500       | 33800      | 

===== After Sorting Staff Slip =====

| Name         | ID       | Basic      | DA         | HRA        | IT         | Net Sal    | 
| Amit         | S102     | 30000      | 7500       | 800        | 4500       | 33800      | 
| Suresh       | S101     | 20000      | 5000       | 800        | 3000       | 22800      | `,
      note: 'Notice alphabetical sorting places Amit before Suresh. Net salaries are correctly evaluated as: Suresh: 20000+5000+800-3000 = 22800; Amit: 30000+7500+800-4500 = 33800.',
    },
    vivaQuestions: [
      {
        question: 'Why are Id, Bs, Da, Hra, It, and Ns kept private while Name is public?',
        answer:
          'Financial figures and internal IDs should be protected from accidental modification outside the class (encapsulation). Name is made accessible so sorting algorithms in main can directly compare staff names, or a getter method getName() could alternatively be used.',
      },
      {
        question: 'How does setw() from <iomanip> work in formatted output?',
        answer:
          'std::setw(w) sets the field width for the next output insertion. Combined with std::left, it pads the output with spaces on the right to produce evenly aligned table columns.',
      },
      {
        question: 'What happens when entire objects are swapped in Bubble Sort?',
        answer:
          'The default copy assignment operator performs a memberwise copy of all data attributes from one object to another (temp = Ob[j+1]; Ob[j+1] = Ob[j]; Ob[j] = temp).',
      },
      {
        question: 'What is the time complexity of the sorting routine used here?',
        answer:
          'Bubble Sort has an O(n^2) worst-case and average-case time complexity, which is acceptable for small student lab datasets.',
      },
    ],
    importantNotes: [
      'Strict adherence to the problem statement: DA is 25%, HRA is 800 flat, and Income Tax is 15%.',
      'Net salary formula: Basic + DA + HRA - Income Tax.',
      'Ensure <iomanip> is included to use setw() and left manipulators.',
    ],
    keyClassesAndFunctions: [
      { name: 'class Staff', description: 'Encapsulates employee ID, name, basic salary, allowances, and net salary.' },
      { name: 'Accept()', description: 'Prompts for employee identity and basic pay, then triggers computation.' },
      { name: 'Salary()', description: 'Performs DA, HRA, IT, and Net Salary calculations.' },
      { name: 'Display()', description: 'Outputs a formatted table row with column alignment.' },
    ],
  },
  {
    id: 3,
    title: 'Practical 3 — Publication, Book and Tape',
    shortTitle: 'Publication Class Hierarchy & Exceptions',
    category: 'Inheritance & Exceptions',
    originalProblem:
      'Imagine a publishing company which does marketing for book and audio cassette versions. Create a class publication that stores the title (a string) and price (type float) of publications. From this class derive two classes: book which adds a page count (type int) and tape which adds a playing time in minutes (type float). Write a program that instantiates the book and tape class, allows user to enter data and displays the data members. If an exception is caught, replace all the data member values with zero values.',
    aim: 'To demonstrate hierarchical inheritance in C++ by creating a base class Publication and derived classes Book and Tape, incorporating exception handling to reset all attributes to zero if invalid data is entered.',
    concepts: [
      'Hierarchical Inheritance',
      'Base and Derived Classes',
      'Protected Member Access',
      'Exception Handling (try, throw, catch)',
      'Error Recovery & State Reset',
    ],
    operations: [
      'Base class Publication initialization (title, price)',
      'Derived class Book adding page_count',
      'Derived class Tape adding playing_time (minutes)',
      'Data validation (detecting negative or zero price/pages/time)',
      'Exception throwing and catching',
      'State recovery: resetting all members to zero on exception',
    ],
    filename: 'Q3_Publication_Book_Tape.cpp',
    sourceCode: `/*
PRACTICAL Q3: PUBLICATION, BOOK AND TAPE USING HIERARCHICAL INHERITANCE AND EXCEPTION HANDLING

ALGORITHM:
1. Start the program.
2. Define base class Publication with data members title (string) and price (float).
3. In Publication, provide a default constructor to initialize title to "" and price to 0.0.
4. Derive class Book from Publication, adding page_count (int).
   - In Book::getData(), prompt for title, price, and page count.
   - If price <= 0 or page_count <= 0, throw an exception.
   - If an exception occurs, catch it and reset title to "", price to 0.0, and page_count to 0.
   - In Book::displayData(), display title, price, and page count.
5. Derive class Tape from Publication, adding playing_time (float).
   - In Tape::getData(), prompt for title, price, and playing time (in minutes).
   - If price <= 0 or playing_time <= 0, throw an exception.
   - If an exception occurs, catch it and reset title to "", price to 0.0, and playing_time to 0.0.
   - In Tape::displayData(), display title, price, and playing time.
6. In main():
   - Create an instance of Book and an instance of Tape.
   - Read data and display data for Book.
   - Read data and display data for Tape.
7. Stop.
*/

#include <iostream>
#include <string>
using namespace std;

class Publication
{
protected:
    string title;
    float price;

public:
    Publication()
    {
        title = "";
        price = 0.0f;
    }

    void getData()
    {
        cout << "Enter title: ";
        cin >> title;
        cout << "Enter price: ";
        cin >> price;
    }

    void displayData() const
    {
        cout << "Title: " << title << "\\nPrice: Rs. " << price << endl;
    }
};

class Book : public Publication
{
    int page_count;

public:
    Book()
    {
        page_count = 0;
    }

    void getData()
    {
        try
        {
            Publication::getData();
            cout << "Enter page count: ";
            cin >> page_count;

            if (price <= 0 || page_count <= 0)
            {
                throw "Invalid book data! Price and page count must be positive.";
            }
        }
        catch (const char* msg)
        {
            cout << "\\nException caught: " << msg << "\\nResetting all book values to zero.\\n";
            title = "";
            price = 0.0f;
            page_count = 0;
        }
    }

    void displayData() const
    {
        cout << "\\n--- Book Details ---\\n";
        Publication::displayData();
        cout << "Page Count: " << page_count << endl;
    }
};

class Tape : public Publication
{
    float playing_time;

public:
    Tape()
    {
        playing_time = 0.0f;
    }

    void getData()
    {
        try
        {
            Publication::getData();
            cout << "Enter playing time (minutes): ";
            cin >> playing_time;

            if (price <= 0 || playing_time <= 0.0f)
            {
                throw "Invalid tape data! Price and playing time must be positive.";
            }
        }
        catch (const char* msg)
        {
            cout << "\\nException caught: " << msg << "\\nResetting all tape values to zero.\\n";
            title = "";
            price = 0.0f;
            playing_time = 0.0f;
        }
    }

    void displayData() const
    {
        cout << "\\n--- Tape Details ---\\n";
        Publication::displayData();
        cout << "Playing Time: " << playing_time << " mins" << endl;
    }
};

int main()
{
    Book b;
    Tape t;

    cout << "=== Enter Book Details ===\\n";
    b.getData();
    b.displayData();

    cout << "\\n=== Enter Tape Details ===\\n";
    t.getData();
    t.displayData();

    return 0;
}`,
    lineCount: 150,
    algorithm: {
      steps: [
        'START',
        'Declare base class Publication with protected members title (string) and price (float).',
        'Implement Publication constructor initializing title to empty string and price to 0.0.',
        'Implement Publication::getData() and Publication::displayData().',
        'Derive class Book publicly from Publication, introducing private attribute page_count (int).',
        'In Book::getData(), call Publication::getData(), then prompt for page_count inside a try block.',
        'If price <= 0 or page_count <= 0, throw a descriptive exception string.',
        'In the catch block, display error message and reset title = "", price = 0.0, and page_count = 0.',
        'Derive class Tape publicly from Publication, introducing private attribute playing_time (float).',
        'In Tape::getData(), call Publication::getData(), then prompt for playing_time inside a try block.',
        'If price <= 0 or playing_time <= 0, throw an exception string.',
        'In the catch block, display error message and reset title = "", price = 0.0, and playing_time = 0.0.',
        'In main(), instantiate Book and Tape objects, read their inputs, and display their values.',
        'STOP',
      ],
      explanation:
        'This program demonstrates hierarchical inheritance where two classes (Book and Tape) share a single common base class (Publication). Protected visibility allows derived classes direct access to title and price. Crucially, C++ try-throw-catch blocks are applied during data acquisition to validate input sanity; on catching an invalid value, members are cleanly restored to default zero states as mandated by the problem specification.',
    },
    sampleOutput: {
      inputDescription: 'Normal input: Book "CleanCode", price 450, pages 350; Tape "AudioTrack", price 120, playing time 45 mins',
      sampleInput: 'CleanCode 450 350\nAudioTrack 120 45',
      output: `=== Enter Book Details ===
Enter title: Enter price: Enter page count: 

--- Book Details ---
Title: CleanCode
Price: Rs. 450
Page Count: 350

=== Enter Tape Details ===
Enter title: Enter price: Enter playing time (minutes): 

--- Tape Details ---
Title: AudioTrack
Price: Rs. 120
Playing Time: 45 mins`,
      note: 'Normal case successfully preserves all user-entered publication records.',
    },
    errorCaseOutput: {
      inputDescription: 'Exception test case: Book with negative price (-50) and negative pages (-10)',
      sampleInput: 'BadBook -50 -10',
      output: `=== Enter Book Details ===
Enter title: Enter price: Enter page count: 
Exception caught: Invalid book data! Price and page count must be positive.
Resetting all book values to zero.

--- Book Details ---
Title: 
Price: Rs. 0
Page Count: 0`,
      note: 'Exception is caught and all members are replaced with zero values as required by syllabus.',
    },
    vivaQuestions: [
      {
        question: 'What type of inheritance is demonstrated in this problem?',
        answer:
          'Hierarchical inheritance, because multiple derived classes (Book and Tape) inherit from a single common base class (Publication).',
      },
      {
        question: 'Why are title and price declared protected instead of private?',
        answer:
          'Private members of a base class cannot be directly accessed by derived classes. Protected members remain hidden from outside functions while allowing derived classes direct access, which is needed here when resetting values upon an exception.',
      },
      {
        question: 'How does exception handling work in C++?',
        answer:
          'Code that might produce an error is enclosed in a "try" block. When a condition fails, an exception is raised using "throw". Control immediately transfers to a matching "catch" block that handles the condition gracefully without crashing the program.',
      },
      {
        question: 'Why is resetting values to zero in catch important for exam evaluation?',
        answer:
          'The problem statement explicitly dictates: "If an exception is caught, replace all the data member values with zero values." Failure to reset data members violates the exam requirement.',
      },
    ],
    importantNotes: [
      'Protected access specifier is essential for derived classes to reset base class members in the catch block.',
      'Remember to demonstrate at least one exception condition during practical examination to show the catch mechanism works.',
    ],
    keyClassesAndFunctions: [
      { name: 'class Publication', description: 'Base class encapsulating title and price.' },
      { name: 'class Book : public Publication', description: 'Derived class adding page_count with exception handling.' },
      { name: 'class Tape : public Publication', description: 'Derived class adding playing_time with exception handling.' },
    ],
  },
  {
    id: 4,
    title: 'Practical 4 — Matrix ADT',
    shortTitle: 'Matrix Abstract Data Type',
    category: 'Class Design & ADT',
    originalProblem:
      'Write a C++program to implement the matrix ADT using a class. The operations supported by this ADT are: a. Reading a matrix. b. Addition of matrices. c. Printing a matrix. d. Subtraction of matrices. e. Multiplication of matrices',
    aim: 'To implement a complete 2D Matrix Abstract Data Type (ADT) using a C++ class supporting matrix dimension validation, input, tabular display, addition, subtraction, and multiplication.',
    concepts: [
      'Abstract Data Type (ADT)',
      '2D Arrays in Classes',
      'Dimension Compatibility Validation',
      'Matrix Arithmetic (Addition, Subtraction, Multiplication)',
      'Safe Bounds Checking',
    ],
    operations: [
      'Read matrix dimensions and elements (bounds 1..5)',
      'Display matrix in tabular rows with vertical bars',
      'Matrix addition with dimension verification (r1 == r2 && c1 == c2)',
      'Matrix subtraction with dimension verification (r1 == r2 && c1 == c2)',
      'Matrix multiplication with dimension verification (c1 == r2)',
    ],
    filename: 'Q4_Matrix_ADT.cpp',
    sourceCode: `/*
PRACTICAL Q4: MATRIX ADT USING A CLASS

ALGORITHM:
1. Start the program.
2. Define a class Matrix containing a 5x5 matrix and row/column counts.
3. Define GetData() to read dimensions and matrix elements.
4. Check that each dimension is between 1 and 5.
5. Define Display() to print the matrix.
6. Define Add() to:
      a. Check whether both matrices have equal dimensions.
      b. Add corresponding elements.
      c. Return the resulting matrix.
7. Define Sub() to:
      a. Check whether both matrices have equal dimensions.
      b. Subtract corresponding elements.
      c. Return the resulting matrix.
8. Define Mul() to:
      a. Check whether columns of the first matrix equal rows of the second.
      b. Multiply rows by columns using three loops.
      c. Return the resulting matrix.
9. In main(), read two matrices.
10. Display both matrices and perform addition, subtraction and multiplication.
11. Stop.

*/

#include <iostream>
using namespace std;

class Matrix
{
    int mat[5][5];
    int row, col;

public:

    // Default constructor
    Matrix()
    {
        row = 0;
        col = 0;
    }

    // Read matrix
    void GetData()
    {
        cout << "\\nEnter number of rows and columns: ";
        cin >> row >> col;

        if (row < 1 || row > 5 || col < 1 || col > 5)
        {
            cout << "Invalid size! Enter dimensions from 1 to 5.\\n";
            row = 0;
            col = 0;
            return;
        }

        cout << "Enter matrix elements:\\n";

        for (int i = 0; i < row; i++)
        {
            for (int j = 0; j < col; j++)
            {
                cin >> mat[i][j];
            }
        }
    }

    // Display matrix
    void Display()
    {
        if (row == 0 || col == 0)
        {
            cout << "No valid matrix to display.\\n";
            return;
        }

        for (int i = 0; i < row; i++)
        {
            cout << "| ";
            for (int j = 0; j < col; j++)
            {
                cout << mat[i][j] << " | ";
            }
            cout << endl;
        }
    }

    // Matrix addition
    Matrix Add(Matrix m)
    {
        Matrix temp;

        if (row == 0 || col == 0 || row != m.row || col != m.col)
        {
            cout << "\\nAddition cannot be performed.\\n";
            return temp;
        }

        temp.row = row;
        temp.col = col;

        for (int i = 0; i < row; i++)
        {
            for (int j = 0; j < col; j++)
            {
                temp.mat[i][j] = mat[i][j] + m.mat[i][j];
            }
        }

        return temp;
    }

    // Matrix subtraction
    Matrix Sub(Matrix m)
    {
        Matrix temp;

        if (row == 0 || col == 0 || row != m.row || col != m.col)
        {
            cout << "\\nSubtraction cannot be performed.\\n";
            return temp;
        }

        temp.row = row;
        temp.col = col;

        for (int i = 0; i < row; i++)
        {
            for (int j = 0; j < col; j++)
            {
                temp.mat[i][j] = mat[i][j] - m.mat[i][j];
            }
        }

        return temp;
    }

    // Matrix multiplication
    Matrix Mul(Matrix m)
    {
        Matrix temp;

        if (row == 0 || col == 0 || m.row == 0 || m.col == 0 || col != m.row)
        {
            cout << "\\nMultiplication cannot be performed.\\n";
            return temp;
        }

        temp.row = row;
        temp.col = m.col;

        for (int i = 0; i < row; i++)
        {
            for (int j = 0; j < m.col; j++)
            {
                temp.mat[i][j] = 0;

                for (int k = 0; k < col; k++)
                {
                    temp.mat[i][j] += mat[i][k] * m.mat[k][j];
                }
            }
        }

        return temp;
    }
};

int main()
{
    Matrix A, B, C;

    cout << "Enter Matrix A:";
    A.GetData();

    cout << "\\nMatrix A:\\n";
    A.Display();

    cout << "\\nEnter Matrix B:";
    B.GetData();

    cout << "\\nMatrix B:\\n";
    B.Display();

    cout << "\\n===== ADDITION =====\\n";
    C = A.Add(B);
    C.Display();

    cout << "\\n===== SUBTRACTION =====\\n";
    C = A.Sub(B);
    C.Display();

    cout << "\\n===== MULTIPLICATION =====\\n";
    C = A.Mul(B);
    C.Display();

    return 0;
}`,
    lineCount: 200,
    algorithm: {
      steps: [
        'START',
        'Define class Matrix with private members: mat[5][5] array, row, and col counts.',
        'Define constructor initializing row = 0 and col = 0.',
        'In GetData(), prompt for rows and columns. Verify dimensions are within valid bounds (1 to 5). Read matrix elements.',
        'In Display(), check if matrix is populated; traverse and print elements in row-major tabular order enclosed in pipes.',
        'In Add(Matrix m), verify row == m.row and col == m.col. Compute temp.mat[i][j] = mat[i][j] + m.mat[i][j] and return temp.',
        'In Sub(Matrix m), verify row == m.row and col == m.col. Compute temp.mat[i][j] = mat[i][j] - m.mat[i][j] and return temp.',
        'In Mul(Matrix m), verify col == m.row. Allocate result with dimensions row x m.col. Compute dot product using three nested loops and return temp.',
        'In main(), declare matrices A, B, and C.',
        'Read dimensions and elements for A and B.',
        'Display A and B, then execute and display Addition, Subtraction, and Multiplication.',
        'STOP',
      ],
      explanation:
        'An Abstract Data Type defines data structures and allowable operations without exposing internal memory layout. In this implementation, Matrix encapsulates fixed maximum 5x5 storage while tracking dynamic logical dimensions. Each arithmetic method checks mathematical preconditions: addition and subtraction require identical dimensions, whereas multiplication mandates that the inner dimension (columns of the first matrix) equals the rows of the second matrix.',
    },
    sampleOutput: {
      inputDescription: 'Matrix A (2x2): [[1, 2], [3, 4]]; Matrix B (2x2): [[5, 6], [7, 8]]',
      sampleInput: '2 2\n1 2\n3 4\n2 2\n5 6\n7 8',
      output: `Enter Matrix A:
Enter number of rows and columns: Enter matrix elements:

Matrix A:
| 1 | 2 | 
| 3 | 4 | 

Enter Matrix B:
Enter number of rows and columns: Enter matrix elements:

Matrix B:
| 5 | 6 | 
| 7 | 8 | 

===== ADDITION =====
| 6 | 8 | 
| 10 | 12 | 

===== SUBTRACTION =====
| -4 | -4 | 
| -4 | -4 | 

===== MULTIPLICATION =====
| 19 | 22 | 
| 43 | 50 | `,
      note: 'Multiplication check: [1*5+2*7, 1*6+2*8] = [19, 22]; [3*5+4*7, 3*6+4*8] = [43, 50].',
    },
    vivaQuestions: [
      {
        question: 'What is an Abstract Data Type (ADT)?',
        answer:
          'An ADT is a mathematical model for data types where the type is defined by its behavior (operations and semantics) from the user’s point of view, rather than its concrete implementation details.',
      },
      {
        question: 'What is the mathematical condition for matrix multiplication?',
        answer:
          'Matrix multiplication A x B is valid if and only if the number of columns in matrix A is equal to the number of rows in matrix B. The resulting matrix has dimensions (rows of A) x (columns of B).',
      },
      {
        question: 'What is the time complexity of matrix multiplication with three nested loops?',
        answer:
          'For matrices of size n x n, the standard multiplication algorithm requires O(n^3) operations.',
      },
      {
        question: 'Why is bounds checking necessary when taking user input for rows and columns?',
        answer:
          'Static array allocation in C++ has fixed capacity (here 5x5). If the user enters row > 5 or col > 5, accessing mat[i][j] causes undefined behavior and buffer overflow. Bounds checking prevents memory corruption.',
      },
    ],
    importantNotes: [
      'Never allow addition or subtraction if matrix dimensions differ.',
      'Check col == m.row before attempting matrix multiplication.',
      'Validate that entered row and column dimensions do not exceed 5.',
    ],
    keyClassesAndFunctions: [
      { name: 'class Matrix', description: 'Matrix ADT class managing 2D array and dimension states.' },
      { name: 'GetData()', description: 'Reads dimensions and elements with safety validation.' },
      { name: 'Display()', description: 'Prints matrix elements formatted in tabular rows.' },
      { name: 'Add(Matrix m)', description: 'Performs element-wise matrix addition.' },
      { name: 'Sub(Matrix m)', description: 'Performs element-wise matrix subtraction.' },
      { name: 'Mul(Matrix m)', description: 'Computes matrix product via row-column dot products.' },
    ],
  },
  {
    id: 5,
    title: 'Practical 5 — Constructors, Destructors and Multiple Inheritance',
    shortTitle: 'Constructors, Destructors & Multiple Inheritance',
    category: 'Constructors & Destructors',
    originalProblem:
      'Write a program to illustrate default constructor, parameterized constructor and copy constructors. Program should illustrate the order of execution of constructors and destructors when a new class is derived from more than one base class.',
    aim: 'To illustrate default, parameterized, and copy constructors in C++, and explicitly demonstrate constructor and destructor execution order under multiple inheritance.',
    concepts: [
      'Default Constructor',
      'Parameterized Constructor',
      'Copy Constructor',
      'Multiple Inheritance',
      'Constructor Execution Order',
      'Destructor Execution Order (Reverse)',
    ],
    operations: [
      'Instantiate object using default constructor',
      'Instantiate object using parameterized constructor',
      'Instantiate object using copy constructor',
      'Observe multiple inheritance constructor invocation order (Base1 -> Base2 -> Derived)',
      'Observe destructor invocation order in reverse at program exit',
    ],
    filename: 'Q5_Constructors_Multiple_Inheritance.cpp',
    sourceCode: `/*
PRACTICAL Q5: CONSTRUCTORS, DESTRUCTORS AND MULTIPLE INHERITANCE

ALGORITHM:
1. Start the program.
2. Define base class Base1 with a constructor printing "Base1 Constructor" and destructor printing "Base1 Destructor".
3. Define base class Base2 with a constructor printing "Base2 Constructor" and destructor printing "Base2 Destructor".
4. Derive class Derived using multiple inheritance: class Derived : public Base1, public Base2.
5. In Derived, declare data member 'value' (int) and define:
      a. Default constructor: sets value = 0, prints "Derived Default Constructor".
      b. Parameterized constructor: sets value = v, prints "Derived Parameterized Constructor".
      c. Copy constructor: copies d.value, prints "Derived Copy Constructor".
      d. display(): displays value.
      e. Destructor: prints "Derived Destructor".
6. In main():
      a. Instantiate object d1 using default constructor; call display().
      b. Instantiate object d2 using parameterized constructor (with value 100); call display().
      c. Instantiate object d3 using copy constructor (copying d2); call display().
7. Observe execution: Base class constructors execute in order of derivation (Base1, then Base2), followed by Derived constructor.
8. At scope exit, destructors execute in reverse order: Derived, then Base2, then Base1.
9. Stop.
*/

#include <iostream>
using namespace std;

class Base1 {
public:
    Base1() {
        cout << "Base1 Constructor" << endl;
    }

    ~Base1() {
        cout << "Base1 Destructor" << endl;
    }
};

class Base2 {
public:
    Base2() {
        cout << "Base2 Constructor" << endl;
    }

    ~Base2() {
        cout << "Base2 Destructor" << endl;
    }
};

class Derived : public Base1, public Base2 {
    int value;

public:
    // Default Constructor
    Derived() {
        value = 0;
        cout << "Derived Default Constructor" << endl;
    }

    // Parameterized Constructor
    Derived(int v) {
        value = v;
        cout << "Derived Parameterized Constructor" << endl;
    }

    // Copy Constructor
    Derived(const Derived &d) {
        value = d.value;
        cout << "Derived Copy Constructor" << endl;
    }

    void display() {
        cout << "Value = " << value << endl;
    }

    ~Derived() {
        cout << "Derived Destructor" << endl;
    }
};

int main() {

    cout << "\\n--- Object 1: Default Constructor ---\\n";
    Derived d1;
    d1.display();

    cout << "\\n--- Object 2: Parameterized Constructor ---\\n";
    Derived d2(100);
    d2.display();

    cout << "\\n--- Object 3: Copy Constructor ---\\n";
    Derived d3(d2);
    d3.display();

    cout << "\\n--- End of Program ---\\n";

    return 0;
}`,
    lineCount: 97,
    algorithm: {
      steps: [
        'START',
        'Define base class Base1 containing constructor and destructor with logging statements.',
        'Define base class Base2 containing constructor and destructor with logging statements.',
        'Derive class Derived using multiple inheritance: class Derived : public Base1, public Base2.',
        'Implement Derived default constructor initializing value = 0 and printing diagnostic message.',
        'Implement Derived parameterized constructor taking integer v, setting value = v and logging message.',
        'Implement Derived copy constructor taking const Derived& d, copying d.value and logging message.',
        'Implement Derived destructor with diagnostic message.',
        'In main(), create d1 using default constructor and display its value.',
        'Create d2 with argument 100 using parameterized constructor and display its value.',
        'Create d3 copying d2 using copy constructor and display its value.',
        'Notice console messages: for each object, Base1 constructor runs first, then Base2, then Derived.',
        'At main() termination, observe destructors firing in exact reverse order (Derived -> Base2 -> Base1) for all three objects in reverse order of creation (LIFO).',
        'STOP',
      ],
      explanation:
        'When a derived class inherits from multiple base classes, constructors are called in the exact order in which the base classes appear in the class declaration (here, Base1 before Base2), followed by the derived class constructor. Destructors execute in the precise reverse order: Derived first, then Base2, and lastly Base1. Furthermore, local stack objects are destroyed in Last-In-First-Out (LIFO) order (d3, then d2, then d1).',
    },
    sampleOutput: {
      inputDescription: 'Program runs without requiring interactive input, demonstrating constructor and destructor lifecycle sequence.',
      output: `--- Object 1: Default Constructor ---
Base1 Constructor
Base2 Constructor
Derived Default Constructor
Value = 0

--- Object 2: Parameterized Constructor ---
Base1 Constructor
Base2 Constructor
Derived Parameterized Constructor
Value = 100

--- Object 3: Copy Constructor ---
Base1 Constructor
Base2 Constructor
Derived Copy Constructor
Value = 100

--- End of Program ---
Derived Destructor
Base2 Destructor
Base1 Destructor
Derived Destructor
Base2 Destructor
Base1 Destructor
Derived Destructor
Base2 Destructor
Base1 Destructor`,
      note: 'Construction order: Base1 -> Base2 -> Derived. Destruction order: Derived -> Base2 -> Base1. Notice stack objects are destroyed in reverse order of creation.',
    },
    vivaQuestions: [
      {
        question: 'In what order are constructors executed under multiple inheritance?',
        answer:
          'Constructors execute in the order the base classes are listed in the derived class declaration list (left-to-right), NOT the order in the constructor initialization list.',
      },
      {
        question: 'In what order are destructors executed?',
        answer:
          'Destructors are executed in the exact reverse order of constructor execution: the derived destructor executes first, followed by base class destructors from right to left.',
      },
      {
        question: 'Why must the parameter of a copy constructor be passed by reference (const Derived &)?',
        answer:
          'If passed by value, passing the argument would itself require invoking the copy constructor, causing infinite recursive calls and stack overflow.',
      },
      {
        question: 'What is the Diamond Problem in multiple inheritance and how is it resolved?',
        answer:
          'The Diamond Problem occurs when two classes inherit from a common base class, and a fourth class inherits from both. The fourth class receives two duplicate copies of the base class. It is resolved using virtual base classes ("class B : virtual public A").',
      },
    ],
    importantNotes: [
      'The order of base class initialization depends entirely on the class header order (class Derived : public Base1, public Base2), not on main().',
      'Destructors always fire in reverse order of construction.',
      'Copy constructor signature must be "Derived(const Derived &d)" with the reference symbol &.',
    ],
    keyClassesAndFunctions: [
      { name: 'class Base1', description: 'First base class illustrating constructor/destructor logging.' },
      { name: 'class Base2', description: 'Second base class in multiple inheritance declaration.' },
      { name: 'class Derived : public Base1, public Base2', description: 'Derived class demonstrating default, parameterized, and copy constructors.' },
      { name: 'Derived(const Derived &d)', description: 'Copy constructor initializing a new instance by copying an existing instance.' },
    ],
  },
];
