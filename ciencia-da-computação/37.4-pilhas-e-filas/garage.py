from stack import Stack

garage = Stack()

option = 0

while option != 4:
    print(
        "\nOperations: "
        "\n1. Park a vehicle"
        "\n2. Unpark a vehicle"
        "\n3. Parked vehicles"
        "\n4. Exit"
    )
    option = int(input("\nOption: "))

    if option == 1:
        plate_number = input("\nPlate number: ")
        garage.push(plate_number)
        print(f"\nVehicle of plate number {plate_number} parked.")
    elif option == 2:
        vehicle_plate = input("Plate number: ")
        street = Stack()
        removed = False

        while not garage.is_empty():
            parked_number = garage.pop()
            if parked_number == vehicle_plate:
                print(f"\nVehicle of plate number {vehicle_plate} unparked.")
                removed = True
            else:
                street.push(parked_number)

        while not street.is_empty():
            street_vehicle = street.pop
            garage.push(street_vehicle)

        if not removed:
            print(f"\nThere is no vehicle of plate number {plate_number}")
    elif option == 3:
        if garage.is_empty():
            print("\nGarage is empty!")
        else:
            print(f"\nParked vehicles: {str(garage)}")
    elif option == 4:
        print("\nGoodbye!")
    else:
        print("\nInvalid option.")
