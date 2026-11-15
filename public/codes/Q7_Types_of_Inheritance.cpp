/*
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

    cout << "\nSingle Inheritance:" << endl;
    B obj1;
    obj1.showA();
    obj1.showB();

    cout << "\nMultiple Inheritance:" << endl;
    E obj2;
    obj2.showC();
    obj2.showD();
    obj2.showE();

    cout << "\nMultilevel Inheritance:" << endl;
    H obj3;
    obj3.showF();
    obj3.showG();
    obj3.showH();

    cout << "\nHierarchical Inheritance:" << endl;
    J obj4;
    K obj5;
    obj4.showI();
    obj4.showJ();
    obj5.showI();
    obj5.showK();

    return 0;
}
