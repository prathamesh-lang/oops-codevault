/*
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
}
