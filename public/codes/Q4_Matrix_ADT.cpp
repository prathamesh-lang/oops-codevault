/*
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
        cout << "\nEnter number of rows and columns: ";
        cin >> row >> col;

        if (row < 1 || row > 5 || col < 1 || col > 5)
        {
            cout << "Invalid size! Enter dimensions from 1 to 5.\n";
            row = 0;
            col = 0;
            return;
        }

        cout << "Enter matrix elements:\n";

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
            cout << "No valid matrix to display.\n";
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
            cout << "\nAddition cannot be performed.\n";
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
            cout << "\nSubtraction cannot be performed.\n";
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
            cout << "\nMultiplication cannot be performed.\n";
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

    cout << "\nMatrix A:\n";
    A.Display();

    cout << "\nEnter Matrix B:";
    B.GetData();

    cout << "\nMatrix B:\n";
    B.Display();

    cout << "\n===== ADDITION =====\n";
    C = A.Add(B);
    C.Display();

    cout << "\n===== SUBTRACTION =====\n";
    C = A.Sub(B);
    C.Display();

    cout << "\n===== MULTIPLICATION =====\n";
    C = A.Mul(B);
    C.Display();

    return 0;
}
