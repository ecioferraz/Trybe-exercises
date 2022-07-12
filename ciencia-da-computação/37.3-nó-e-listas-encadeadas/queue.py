from typing import Union
from linked_list_content import LinkedList
from node import Node


class Queue:
    def __init__(self):
        self.__data = LinkedList()

    def enqueue(self, value):
        self.__data.insert_last(value)

    def dequeue(self, position: int) -> Union[Node, None]:
        return self.__data.remove_at(position)

    def peek(self, position: int) -> Union[Node, None]:
        return self.__data.get_element_at(position)
    
    def is_empty(self) -> bool:
        return not len(self.__data)
