/*
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

    cout << "\n--- Object 1: Default Constructor ---\n";
    Derived d1;
    d1.display();

    cout << "\n--- Object 2: Parameterized Constructor ---\n";
    Derived d2(100);
    d2.display();

    cout << "\n--- Object 3: Copy Constructor ---\n";
    Derived d3(d2);
    d3.display();

    cout << "\n--- End of Program ---\n";

    return 0;
}
