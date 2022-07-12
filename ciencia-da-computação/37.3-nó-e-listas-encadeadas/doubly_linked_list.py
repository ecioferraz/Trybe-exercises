from linked_list_content import LinkedList


class DoublyLinkedList(LinkedList):
    def index_of(self, value):
        position = 0
        current_value = self.head.next

        while current_value != self.tail:
            if current_value.value == value:
                return position
            current_value = current_value.next
            position += 1

        return -1

    def remove_duplicates(linked_list):
        unique_elements_list = DoublyLinkedList()

        while linked_list:
            current_node = linked_list.remove_first()
            if linked_list.index_of(current_node.value) == -1:
                unique_elements_list.insert_last(current_node.value)

        return unique_elements_list
