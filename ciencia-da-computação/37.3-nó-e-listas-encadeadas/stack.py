from typing import Union
from linked_list_content import LinkedList
from node import Node


class Stack:
    def __init__(self) -> None:
        self.__data = LinkedList()

    def push(self, value) -> None:
        self.__data.insert_last(value)

    def pop(self) -> Union[Node, None]:
        return self.__data.remove_last()

    def peek(self, position: int) -> Union[Node, None]:
        return self.__data.get_element_at(position)

    def is_empty(self) -> bool:
        return not len(self.__data)
