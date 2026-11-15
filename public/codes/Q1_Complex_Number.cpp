/*
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

    cout << "\nFirst Complex Number: " << C1;
    cout << "\nSecond Complex Number: " << C2;
    cout << "\nAddition: " << Sum;
    cout << "\nMultiplication: " << Product << endl;

    return 0;
}
