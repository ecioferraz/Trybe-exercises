from typing import Any, Union


class Stack:
    def __init__(self) -> None:
        self._data = list()

    def __str__(self) -> str:
        str_items = ""
        for i in range(self.size()):
            value = self._data[i]
            str_items += str(value)
            if i + 1 < self.size():
                str_items += ", "

        return f"Stack({str_items})"

    # felps' vid {
    # def __str__(self) -> str:
    #     str_stack = "PILHA:\n"

    #     for i in range(self.size() - 1, -1, -1):
    #         value = self._data[i]
    #         str_stack += f" |{str(value)}| \n"

    #     return str_stack

    # def __repr__(self) -> str:
    #     return str(self._data)

    # def __len__(self) -> int:
    #     return len(self._data)

    # def pop(self) -> Union[Any, None]:
    #     return None if self.is_empty() else self._data.pop()
    # }

    def size(self) -> int:
        return len(self._data)

    def is_empty(self) -> bool:
        return not bool(self.size())

    def push(self, value) -> None:
        self._data.append(value)

    def pop(self) -> Union[Any, None]:
        if self.is_empty():
            return None

        value = self._data[-1]
        del self._data[-1]
        return value

    def peek(self) -> Union[Any, None]:
        return None if self.is_empty() else self._data[-1]

    def clear(self) -> None:
        self._data.clear()

    def min_value(self) -> Union[int, None]:
        if self.is_empty():
            return None

        current_value = self._data[0]
        for value in self._data:
            if value < current_value:
                current_value = value
        return current_value


if __name__ == "__main__":
    elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    content_stack = Stack()

    for elem in elements:
        content_stack.push(elem)

    # saída: Stack(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    print(content_stack)
    # saída: 10
    print(content_stack.size())

    # saída: 10
    print(content_stack.peek())
    # saída: 10, pois a função retorna o elemento que está sendo retirado
    print(content_stack.pop())

    # saída: 9, pois, após o 10 ter sido removido,
    # o 9 se tornou o elemento do topo da pilha
    print(content_stack.peek())
    # saída: 9
    print(content_stack.size())

    # saída: None, pois a função não retorna nada!
    print(content_stack.clear())
    # saída: 0
    print(content_stack.size())
